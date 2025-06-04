import fs from 'node:fs/promises';
import express from 'express';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile('./dist/client/index.html', 'utf-8')
    : '';

// Create http server
const app = express();

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    });
    app.use(vite.middlewares);
} else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML

const URL_REGEX = /^(?!\/(api|assets|favicon\.ico|\.well-known)).*$/;
app.use(URL_REGEX, async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '');

        /** @type {string} */
        let template;
        /** @type {import('./src/entry-server.js').render} */
        let render;
        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('./src/entry-server.jsx'))
                .render;
        } else {
            template = templateHtml;
            render = (await import('./dist/server/entry-server.js')).render;
        }

        const rendered = await render(url);
        if (rendered.redirect) {
            console.log(`Redirecting to: ${rendered.redirect.location}`);
            return res.redirect(
                rendered.redirect.status,
                rendered.redirect.location
            );
        }

        if (!rendered.html) {
            console.error(`No HTML content rendered for: ${url}`);
            return res.status(500).send('Error: No content rendered');
        }

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')
            .replace('</head>', `${rendered.helmet.meta.toString()}</head>`)
            .replace('</head>', `${rendered.helmet.title.toString()}</head>`)
            .replace('</head>', `${rendered.helmet.script.toString()}</head>`)
            .replace('</head>', `${rendered.css || ''}</head>`);

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (e) {
        vite?.ssrFixStacktrace(e);
        console.error('SSR Error:', e);
        res.status(500).send(`
            <html>
                <head>
                    <title>Server Error</title>
                </head>
                <body>
                    <h1>Server Error</h1>
                    <p>The server encountered an error while rendering this page.</p>
                    <pre>${
                        isProduction ? 'Check server logs for details' : e.stack
                    }</pre>
                </body>
            </html>
        `);
    }
});

// Start http server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
