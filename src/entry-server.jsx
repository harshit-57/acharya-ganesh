import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { NavProvider } from './hook/useNav';
const helmetContext = {};

/**
 * @param {string} _url
 */
export function render(_url) {
    const html = renderToString(
        <StaticRouter location={_url}>
            <HelmetProvider context={helmetContext}>
                <NavProvider>
                    <App />
                </NavProvider>
            </HelmetProvider>
        </StaticRouter>
    );
    const { helmet } = helmetContext;
    return { html, helmet };
}
