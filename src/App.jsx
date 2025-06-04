// 'use client';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, Component, Suspense } from 'react';
import Loader from './components/loader/Loader';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        margin: '50px auto',
                        textAlign: 'center',
                    }}
                >
                    <Loader className="mb-4" />
                    <h1>Oops! Something went wrong.</h1>
                    <p>Please try refreshing the page or come back later.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

const PageLoader = () => {
    return <Loader style={{ position: 'fixed' }} />;
};

const RouteChangeDetector = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default function App() {
    return (
        <ErrorBoundary>
            <RouteChangeDetector />
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </ErrorBoundary>
    );
}
