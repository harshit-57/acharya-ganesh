import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MatxLayout, MatxTheme } from './components';
import { PageContainer } from '../components/page-container/PageContainer';
import './AdminApp.css';

const AdminApp = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to={'/admin/login'} />;
    }

    return (
        <PageContainer>
            <MatxTheme>
                <CssBaseline />
                <MatxLayout />
            </MatxTheme>
        </PageContainer>
    );
};

export default AdminApp;
