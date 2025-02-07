import { Outlet } from 'react-router-dom';
import { MatxSuspense } from '../';
import { MatxLayouts } from './index';
import { MatxLayoutSettings as settings } from './settings';

const MatxLayout = (props) => {
    const Layout = MatxLayouts[settings.activeLayout];

    return (
        <MatxSuspense>
            <Layout {...props} />
        </MatxSuspense>
    );
};

export default MatxLayout;
