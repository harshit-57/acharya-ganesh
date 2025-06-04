import { renderToString } from 'react-dom/server';
import {
    StaticRouterProvider,
    createStaticHandler,
    createStaticRouter,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { NavProvider } from './hook/useNav';
import routes from './routes';
import React from 'react';

const handler = createStaticHandler(routes);

export async function render(url, manifest) {
    const helmetContext = {};
    const normalizedUrl = url.startsWith('/') ? url : `/${url}`;

    const request = new Request(`http://localhost${normalizedUrl}`, {
        method: 'GET',
        headers: {},
    });

    const context = await handler.query(request);

    if (context instanceof Response) {
        return {
            redirect: {
                status: context.status,
                location: context.headers.get('Location'),
            },
        };
    }

    const router = createStaticRouter(handler.dataRoutes, context);

    const matchedRoutes = router.state.matches;
    const componentPromises = matchedRoutes.map(async (match) => {
        if (match.route.lazy) {
            await match.route.lazy();
        }
    });

    await Promise.all(componentPromises);

    const originalSuspense = React.Suspense;
    React.Suspense = ({ children }) => children;

    try {
        const html = renderToString(
            <HelmetProvider context={helmetContext}>
                <NavProvider>
                    <StaticRouterProvider router={router} context={context} />
                </NavProvider>
            </HelmetProvider>
        );

        // Restore Suspense
        React.Suspense = originalSuspense;

        return {
            html,
            helmet: helmetContext.helmet,
            head: helmetContext.helmet
                ? [
                      helmetContext.helmet.title.toString(),
                      helmetContext.helmet.meta.toString(),
                      helmetContext.helmet.link.toString(),
                      helmetContext.helmet.script.toString(),
                  ].join('\n')
                : '',
        };
    } catch (error) {
        // Restore Suspense even if there's an error
        React.Suspense = originalSuspense;
        throw error;
    }
}
