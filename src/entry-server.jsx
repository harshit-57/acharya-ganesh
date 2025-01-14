import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

/**
 * @param {string} _url
 */
export function render(_url) {
    const html = renderToString(
        <StaticRouter location={_url}>
            <HelmetProvider context={helmetContext}>
                <App />
            </HelmetProvider>
        </StaticRouter>
    );
    const { helmet } = helmetContext;
    return { html, helmet };
}
