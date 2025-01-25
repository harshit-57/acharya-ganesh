import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogList from './pages/blog-list/BlogList';
import CoursesList from './pages/courses/CoursesList';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about/AboutUs';
import Article from './pages/article/Article';
import CourseDetail from './pages/course-detail/CourseDetail';
import SpiritualityList from './pages/spirituality/SpiritualityList';
import SArticle from './pages/spirituality-article/SArticle';

export default () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/blog/:category" element={<BlogList />} />
            <Route path="/blog/:category/:slug" element={<Article />} />
            <Route
                path="/spirituality/:category"
                element={<SpiritualityList />}
            />
            <Route
                path="/spirituality/:category/:slug"
                element={<SArticle />}
            />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
};
