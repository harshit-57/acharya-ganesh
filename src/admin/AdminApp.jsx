import { CssBaseline } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { MatxLayout, MatxTheme } from './components';
import { PageContainer } from '../components/page-container/PageContainer';
import './AdminApp.css';
import useAuth from './hooks/useAuth';
import { SettingsProvider } from './contexts/SettingsContext';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const AdminApp = () => {
    let { isAuthenticated, permission } = useAuth();
    const location = useLocation();
    if (!isAuthenticated) {
        return <Navigate to={'/admin/login'} />;
    }

    const route = location?.pathname;
    if (route == '/admin/management') {
        if (permission && !permission.ManageAdmin) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/courses') {
        if (permission && !permission.ManageCourse) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/blogs') {
        if (permission && !permission.ManageBlog) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/spiritualities') {
        if (permission && !permission.ManageSpirituality) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/stories') {
        if (permission && !permission.ManageWebStory) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/citations') {
        if (permission && !permission.ManageCitation) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/testimonials') {
        if (permission && !permission.ManageTestimonial) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
    } else if (route == '/admin/support') {
        if (permission && !permission.ManageSupport) {
            toast.error('You do not have permission to access this page.');
            return <Navigate to={'/admin/dashboard'} />;
        }
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
                <ToastContainer />
            </SettingsProvider>
        </PageContainer>
    );
};

export default AdminApp;
