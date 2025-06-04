import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { NavProvider } from './hook/useNav';
import routes from './routes';

import './index.css';

const router = createBrowserRouter(routes);

hydrateRoot(
    document.getElementById('root'),
    <HelmetProvider>
        <NavProvider>
            <RouterProvider router={router} />
        </NavProvider>
    </HelmetProvider>
);
