import { Outlet } from 'react-router-dom';
import { MatxSuspense } from '../';
import { MatxLayouts } from './index';
import useSettings from '../../hooks/useSettings';

const MatxLayout = (props) => {
    const { settings } = useSettings();
    const Layout = MatxLayouts[settings.activeLayout];

    return (
        <MatxSuspense>
            <Layout {...props} />
        </MatxSuspense>
    );
};

export default MatxLayout;
