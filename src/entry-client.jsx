import './index.css';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { NavProvider } from './hook/useNav';

hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
        <HelmetProvider>
            <Router>
                <NavProvider>
                    <App />
                </NavProvider>
            </Router>
        </HelmetProvider>
    </StrictMode>
);
