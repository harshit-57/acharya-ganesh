import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';

// Common pages
const Home = lazy(() => import('./pages/home/Home'));
const BlogList = lazy(() => import('./pages/blog-list/BlogList'));
const CoursesList = lazy(() => import('./pages/courses/CoursesList'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const AboutUs = lazy(() => import('./pages/about/AboutUs'));
const Article = lazy(() => import('./pages/article/Article'));
const CourseDetail = lazy(() => import('./pages/course-detail/CourseDetail'));
const SpiritualityList = lazy(() =>
    import('./pages/spirituality/SpiritualityList')
);
const SArticle = lazy(() => import('./pages/spirituality-article/SArticle'));
const BookConsultation = lazy(() =>
    import('./pages/book-consultation/BookConsultation')
);
const WebStoriesList = lazy(() => import('./pages/web-stories/WebStoriesList'));
const WebStoriesView = lazy(() =>
    import('./pages/web-stories-view/WebStoriesView')
);
const CitationDetail = lazy(() =>
    import('./pages/citation-detail/CitationDetail')
);
const Citation = lazy(() => import('./pages/citation/Citation'));
const FormConsultation = lazy(() =>
    import('./pages/consultation-booking-page/BookConsultationForm')
);
const Services = lazy(() => import('./pages/services/Services'));
const ServiceDetail = lazy(() =>
    import('./pages/service-detail/ServiceDetail')
);

// Admin pages
const Login = lazy(() => import('./admin/pages/login/Login'));
const Edit = lazy(() => import('./admin/content-editor/Content'));
const AdminApp = lazy(() => import('./admin/AdminApp'));
const Dashboard = lazy(() => import('./admin/pages/dashboard/Dashboard'));
const ManageCourses = lazy(() =>
    import('./admin/pages/manage-course/ManageCourse')
);
const ManageBlogs = lazy(() => import('./admin/pages/manage-blog/ManageBlog'));
const ManageSpirituality = lazy(() =>
    import('./admin/pages/manage-spirituality/ManageSpirituality')
);
const ManageStory = lazy(() =>
    import('./admin/pages/manage-stories/ManageStory')
);
const ManageTestimonial = lazy(() =>
    import('./admin/pages/manage-testimonial/ManageTestimonial')
);
const ManageSupport = lazy(() =>
    import('./admin/pages/manage-support/ManageSupport')
);
const ManageCitation = lazy(() =>
    import('./admin/pages/manage-citation/ManageCitation')
);
const ManageAdmin = lazy(() =>
    import('./admin/pages/manage-admin/ManageAdmin')
);
const ManageSlot = lazy(() => import('./admin/pages/manage-slot/ManageSlot'));
const ManageService = lazy(() =>
    import('./admin/pages/manage-service/ManageService')
);
const ManageBooking = lazy(() =>
    import('./admin/pages/manage-booking/ManageBooking')
);

// Context
import { AuthProvider } from './admin/contexts/AuthContext';

const RouteChangeDetector = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default function App() {
    return (
        <>
            <RouteChangeDetector />
            <Suspense
                fallback={
                    // <Loading
                    //     style={{
                    //         position: 'fixed',
                    //         top: '50%',
                    //         left: '50%',
                    //         transform: 'translate(-50%, -50%)',
                    //         zIndex: 9999,
                    //     }}
                    // />
                    <div>Loading...</div>
                }
            >
                <Routes>
                    {/* Public Routes */}
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
                            element={<Navigate to="/admin/dashboard" />}
                        />
                        <Route
                            path="/admin/content-editor/:type/:slug"
                            element={<Edit />}
                        />
                        <Route
                            path="/admin/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/admin/management"
                            element={<ManageAdmin />}
                        />
                        <Route
                            path="/admin/courses"
                            element={<ManageCourses />}
                        />
                        <Route path="/admin/blogs" element={<ManageBlogs />} />
                        <Route
                            path="/admin/spiritualities"
                            element={<ManageSpirituality />}
                        />
                        <Route
                            path="/admin/stories"
                            element={<ManageStory />}
                        />
                        <Route
                            path="/admin/services"
                            element={<ManageService />}
                        />
                        <Route
                            path="/admin/citations"
                            element={<ManageCitation />}
                        />
                        <Route
                            path="/admin/testimonials"
                            element={<ManageTestimonial />}
                        />
                        <Route
                            path="/admin/support"
                            element={<ManageSupport />}
                        />
                        <Route
                            path="/admin/booking/slots"
                            element={<ManageSlot />}
                        />
                        <Route
                            path="/admin/booking"
                            element={<ManageBooking />}
                        />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </>
    );
}
