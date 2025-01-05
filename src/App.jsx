import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogList from './pages/blog/BlogList';

export default () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/blog/:category" element={<BlogList />} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
};
