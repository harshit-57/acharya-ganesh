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
import BookConsultation from './pages/book-consultation/BookConsultation';
import WebStoriesList from './pages/web-stories/WebStoriesList';
import { WebStoriesView } from './pages/web-stories-view/WebStoriesView';
import { useEffect, useState } from 'react';
import Login from './admin/pages/login/Login';
import CitationDetail from './pages/citation-detail/CitationDetail';
import Citation from './pages/citation/Citation';
import Edit from './admin/content-editor/Content';
import AdminApp from './admin/AdminApp';
import Dashboard from './admin/pages/dashboard/Dashboard';
import { AuthProvider } from './admin/contexts/AuthContext';
import ManageCourses from './admin/pages/manage-course/ManageCourse';
import ManageBlogs from './admin/pages/manage-blog/ManageBlog';
import ManageSpirituality from './admin/pages/manage-spirituality/ManageSpirituality';
import ManageStory from './admin/pages/manage-stories/ManageStory';
import FormConsultation from './pages/consultation-booking-page/BookConsultationForm';
import ManageTestimonial from './admin/pages/manage-testimonial/ManageTestimonial';
import ManageSupport from './admin/pages/manage-support/ManageSupport';
import ManageCitation from './admin/pages/manage-citation/ManageCitation';
import ManageAdmin from './admin/pages/manage-admin/ManageAdmin';
import Services from './pages/services/Services';
import ServiceDetail from './pages/service-detail/ServiceDetail';
import ManageSlot from './admin/pages/manage-slot/ManageSlot';
import ManageService from './admin/pages/manage-service/ManageService';
import ManageBooking from './admin/pages/manage-booking/ManageBooking';
import { AppProvider } from './contexts/AppContext';

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
                <Route
                    element={
                        <AppProvider>
                            <Outlet />
                        </AppProvider>
                    }
                >
                    <Route index path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                    <Route
                        path="/services/:parent/:slug"
                        element={<ServiceDetail />}
                    />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blog/:category" element={<BlogList />} />
                    <Route path="/:category/:slug" element={<Article />} />
                    <Route
                        path="/spirituality"
                        element={<SpiritualityList />}
                    />
                    <Route
                        path="/spirituality/category/:category"
                        element={<SpiritualityList />}
                    />
                    <Route path="/spirituality/:slug" element={<SArticle />} />
                    <Route path="/course" element={<CoursesList />} />
                    <Route path="/course/:slug" element={<CourseDetail />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/web-stories" element={<WebStoriesList />} />
                    <Route
                        path="/web-stories/category/:category"
                        element={<WebStoriesList />}
                    />
                    <Route
                        path="/web-stories/:slug"
                        element={<WebStoriesView />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/citation" element={<Citation />} />
                    <Route
                        path="/locations/:slug"
                        element={<CitationDetail />}
                    />
                    <Route
                        path="/book-consultation"
                        element={<BookConsultation />}
                    />
                    <Route
                        path="/book-consultation-form"
                        element={<FormConsultation />}
                    />
                </Route>
                <Route path="*" element={<Navigate to={'/'} />} />

                {/* Admin Routes */}
                <Route
                    path="/admin/login"
                    element={
                        <AuthProvider>
                            <Login />
                        </AuthProvider>
                    }
                />
                <Route
                    element={
                        <AuthProvider>
                            <AdminApp />
                        </AuthProvider>
                    }
                >
                    <Route
                        path="/admin"
                        element={<Navigate to={'/admin/dashboard'} />}
                    />
                    <Route
                        path="/admin/content-editor/:type/:slug"
                        element={<Edit />}
                    />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/management" element={<ManageAdmin />} />
                    <Route path="/admin/courses" element={<ManageCourses />} />
                    <Route path="/admin/blogs" element={<ManageBlogs />} />
                    <Route
                        path="/admin/spiritualities"
                        element={<ManageSpirituality />}
                    />
                    <Route path="/admin/stories" element={<ManageStory />} />
                    <Route path="/admin/services" element={<ManageService />} />
                    <Route
                        path="/admin/citations"
                        element={<ManageCitation />}
                    />
                    <Route
                        path="/admin/testimonials"
                        element={<ManageTestimonial />}
                    />
                    <Route path="/admin/support" element={<ManageSupport />} />

                    <Route
                        path="/admin/booking/slots"
                        element={<ManageSlot />}
                    />
                    <Route path="/admin/booking" element={<ManageBooking />} />
                </Route>
            </Routes>
        </>
    );
};
