import './index.css';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { NavProvider } from './hook/useNav';

hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <NavProvider>
                    <App />
                </NavProvider>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);
