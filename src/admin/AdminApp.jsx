import { CssBaseline } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { MatxLayout, MatxTheme } from './components';
import { PageContainer } from '../components/page-container/PageContainer';
import './AdminApp.css';
import useAuth from './hooks/useAuth';
import { SettingsProvider } from './contexts/SettingsContext';
import { Helmet } from 'react-helmet-async';

const AdminApp = () => {
    let { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to={'/admin/login'} />;
    }

    return (
        <PageContainer>
            <Helmet>
                <title>Acharya Ganesh Admin</title>

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Helmet>
            <SettingsProvider>
                <MatxTheme>
                    <CssBaseline />
                    <MatxLayout />
                </MatxTheme>
            </SettingsProvider>
        </PageContainer>
    );
};

export default AdminApp;
