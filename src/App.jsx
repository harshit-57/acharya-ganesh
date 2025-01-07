import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogList from './pages/blog/BlogList';
import CoursesList from './pages/courses/CoursesList';

export default () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/blog/:category" element={<BlogList />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
};
