import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, useEffect, Component } from 'react';
import loadable from '@loadable/component';
import { AuthProvider } from './admin/contexts/AuthContext';
import Loader from './components/loader/Loader';
import Home from './pages/Home/Home';
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        margin: '50px auto',
                        textAlign: 'center',
                    }}
                >
                    <Loader className="mb-4" />
                    <h1>Oops! Something went wrong.</h1>
                    <p>Please try refreshing the page or come back later.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

const PageLoader = () => {
    return <Loader style={{ position: 'fixed' }} />;
};

// Common pages
// const Home = loadable(() =>
//      import('./pages/home/Home'), {
//     fallback: <PageLoader />,
// });
const BlogList = loadable(() => import('./pages/blog-list/BlogList'), {
    fallback: <PageLoader />,
});
const CoursesList = loadable(() => import('./pages/courses/CoursesList'), {
    fallback: <PageLoader />,
});
const Contact = loadable(() => import('./pages/contact/Contact'), {
    fallback: <PageLoader />,
});
const AboutUs = loadable(() => import('./pages/about/AboutUs'), {
    fallback: <PageLoader />,
});
const Article = loadable(() => import('./pages/article/Article'), {
    fallback: <PageLoader />,
});
const CourseDetail = loadable(
    () => import('./pages/course-detail/CourseDetail'),
    {
        fallback: <PageLoader />,
    }
);
const SpiritualityList = loadable(
    () => import('./pages/spirituality/SpiritualityList'),
    {
        fallback: <PageLoader />,
    }
);
const SArticle = loadable(
    () => import('./pages/spirituality-article/SArticle'),
    {
        fallback: <PageLoader />,
    }
);
const BookConsultation = loadable(
    () => import('./pages/book-consultation/BookConsultation'),
    {
        fallback: <PageLoader />,
    }
);
const WebStoriesList = loadable(
    () => import('./pages/web-stories/WebStoriesList'),
    {
        fallback: <PageLoader />,
    }
);
const WebStoriesView = loadable(
    () => import('./pages/web-stories-view/WebStoriesView'),
    {
        fallback: <PageLoader />,
    }
);
const CitationDetail = loadable(
    () => import('./pages/citation-detail/CitationDetail'),
    {
        fallback: <PageLoader />,
    }
);
const Citation = loadable(() => import('./pages/citation/Citation'), {
    fallback: <PageLoader />,
});
const FormConsultation = loadable(
    () => import('./pages/consultation-booking-page/BookConsultationForm'),
    {
        fallback: <PageLoader />,
    }
);
const Services = loadable(() => import('./pages/services/Services'), {
    fallback: <PageLoader />,
});
const ServiceDetail = loadable(
    () => import('./pages/service-detail/ServiceDetail'),
    {
        fallback: <PageLoader />,
    }
);

// Admin pages
const Login = loadable(() => import('./admin/pages/login/Login'), {
    fallback: <PageLoader />,
});
const Edit = loadable(() => import('./admin/content-editor/Content'), {
    fallback: <PageLoader />,
});
const AdminApp = loadable(() => import('./admin/AdminApp'), {
    fallback: <PageLoader />,
});
const Dashboard = loadable(() => import('./admin/pages/dashboard/Dashboard'), {
    fallback: <PageLoader />,
});
const ManageCourses = loadable(
    () => import('./admin/pages/manage-course/ManageCourse'),
    {
        fallback: <PageLoader />,
    }
);
const ManageBlogs = loadable(
    () => import('./admin/pages/manage-blog/ManageBlog'),
    {
        fallback: <PageLoader />,
    }
);
const ManageSpirituality = loadable(
    () => import('./admin/pages/manage-spirituality/ManageSpirituality'),
    {
        fallback: <PageLoader />,
    }
);
const ManageStory = loadable(
    () => import('./admin/pages/manage-stories/ManageStory'),
    {
        fallback: <PageLoader />,
    }
);
const ManageTestimonial = loadable(
    () => import('./admin/pages/manage-testimonial/ManageTestimonial'),
    {
        fallback: <PageLoader />,
    }
);
const ManageSupport = loadable(
    () => import('./admin/pages/manage-support/ManageSupport'),
    {
        fallback: <PageLoader />,
    }
);
const ManageCitation = loadable(
    () => import('./admin/pages/manage-citation/ManageCitation'),
    {
        fallback: <PageLoader />,
    }
);
const ManageAdmin = loadable(
    () => import('./admin/pages/manage-admin/ManageAdmin'),
    {
        fallback: <PageLoader />,
    }
);
const ManageSlot = loadable(
    () => import('./admin/pages/manage-slot/ManageSlot'),
    {
        fallback: <PageLoader />,
    }
);
const ManageService = loadable(
    () => import('./admin/pages/manage-service/ManageService'),
    {
        fallback: <PageLoader />,
    }
);
const ManageBooking = loadable(
    () => import('./admin/pages/manage-booking/ManageBooking'),
    {
        fallback: <PageLoader />,
    }
);

// Scroll to top or anchor on route change
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
        <ErrorBoundary>
            <RouteChangeDetector />
            <Suspense fallback={<PageLoader />}>
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

                    {/* Fallback Route */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}
