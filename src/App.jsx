import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

export default () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
};
