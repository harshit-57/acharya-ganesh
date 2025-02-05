import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogList from './pages/blog-list/BlogList';
import CoursesList from './pages/courses/CoursesList';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about/AboutUs';
import Article from './pages/article/Article';
import CourseDetail from './pages/course-detail/CourseDetail';
import SpiritualityList from './pages/spirituality/SpiritualityList';
import SArticle from './pages/spirituality-article/SArticle';
import { AstroVastu } from './pages/services/astro-vastu/AstroVastu';
import { Astrology } from './pages/services/astrology/Astrology';
import { BirthChart } from './pages/services/birth-chart/BirthChart';
import { CareerPrediction } from './pages/services/career-prediction/CareerPrediction';
import { HealthAstrology } from './pages/services/health-astrology/HealthAstrology';
import { LoveAstrology } from './pages/services/love-astrology/LoveAstrology';
import { MatchMaking } from './pages/services/match-making/MatchMaking';
import { WealthAstrology } from './pages/services/wealth-astrology/WealthAstrology';
import WebStoriesList from './pages/web-stories/WebStoriesList';
import { WebStoriesView } from './pages/web-stories-view/WebStoriesView';
import { useEffect } from 'react';
import Login from './admin/login/Login';
import CitationDetail from './pages/citation-detail/CitationDetail';
import Edit from './admin/edit/Edit';

const RouteChangeDetector = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};
export default () => {
    return (
        <>
            <RouteChangeDetector />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/services/astro-vastu" element={<AstroVastu />} />
                <Route path="/services/astrology" element={<Astrology />} />
                <Route path="/services/muhurat" element={<BirthChart />} />
                <Route
                    path="/services/career-prediction"
                    element={<CareerPrediction />}
                />
                <Route
                    path="/services/health-astrology"
                    element={<HealthAstrology />}
                />
                <Route
                    path="/services/love-astrology"
                    element={<LoveAstrology />}
                />
                <Route
                    path="/services/match-making"
                    element={<MatchMaking />}
                />
                <Route
                    path="/services/wealth-astrology"
                    element={<WealthAstrology />}
                />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:category" element={<BlogList />} />
                <Route path="/blog/:category/:slug" element={<Article />} />
                <Route path="/spirituality" element={<SpiritualityList />} />
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
                <Route path="/web-stories" element={<WebStoriesList />} />
                <Route
                    path="/web-stories/:category"
                    element={<WebStoriesList />}
                />
                <Route
                    path="/web-stories/:category/:slug"
                    element={<WebStoriesView />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/citation/:slug/:location"
                    element={<CitationDetail />}
                />
                <Route path="*" element={<Navigate to={'/'} />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route element={<AdminGuard />}>
                    <Route
                        path="/admin"
                        element={<Navigate to={'/admin/dashboard'} />}
                    />
                    <Route path="/admin/edit" element={<Edit />} />
                    <Route
                        path="/admin/dashboard"
                        element={
                            <>
                                <h1> Admin Dashboard</h1>
                            </>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};

const AdminGuard = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to={'/admin/login'} />;
    }
    return <Outlet />;
};
