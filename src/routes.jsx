import { createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './admin/contexts/AuthContext';
import {
    articleLoader,
    blogListLoader,
    citationDetailLoader,
    citationLoader,
    courseDetailLoader,
    coursesListLoader,
    serviceDetailLoader,
    servicesLoader,
    spiritualityArticleLoader,
    spiritualityListLoader,
    webStoriesListLoader,
    webStoryViewLoader,
} from './loaderData';
import Loader from './components/loader/Loader';
import Home from './pages/Home/Home';
import BlogList from './pages/blog-list/BlogList';
import CoursesList from './pages/courses/CoursesList';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about/AboutUs';
import Article from './pages/article/Article';
import CourseDetail from './pages/course-detail/CourseDetail';
import SpiritualityList from './pages/spirituality/SpiritualityList';
import SArticle from './pages/spirituality-article/SArticle';
import BookConsultation from './pages/book-consultation/BookConsultation';
import FormConsultation from './pages/consultation-booking-page/BookConsultationForm';
import WebStoriesList from './pages/web-stories/WebStoriesList';
import WebStoriesView from './pages/web-stories-view/WebStoriesView';
import Services from './pages/services/Services';
import ServiceDetail from './pages/service-detail/ServiceDetail';
import Citation from './pages/citation/Citation';
import CitationDetail from './pages/citation-detail/CitationDetail';

// Admin pages
import Login from './admin/pages/login/Login';
import AdminApp from './admin/AdminApp';
import Edit from './admin/content-editor/Content';
import Dashboard from './admin/pages/dashboard/Dashboard';
import ManageCourses from './admin/pages/manage-course/ManageCourse';
import ManageBlogs from './admin/pages/manage-blog/ManageBlog';
import ManageSpirituality from './admin/pages/manage-spirituality/ManageSpirituality';
import ManageStory from './admin/pages/manage-stories/ManageStory';
import ManageTestimonial from './admin/pages/manage-testimonial/ManageTestimonial';
import ManageSupport from './admin/pages/manage-support/ManageSupport';
import ManageService from './admin/pages/manage-service/ManageService';
import ManageCitation from './admin/pages/manage-citation/ManageCitation';
import ManageAdmin from './admin/pages/manage-admin/ManageAdmin';
import ManageSlot from './admin/pages/manage-slot/ManageSlot';
import ManageBooking from './admin/pages/manage-booking/ManageBooking';

export default createRoutesFromElements(
    <Route path="/" element={<App />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route
            path="blogs"
            element={<BlogList />}
            loader={blogListLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="blog/:category"
            element={<BlogList />}
            loader={blogListLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path=":category/:slug"
            element={<Article />}
            loader={articleLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="spirituality"
            element={<SpiritualityList />}
            loader={spiritualityListLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="spirituality/category/:category"
            element={<SpiritualityList />}
            loader={spiritualityListLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="spirituality/:slug"
            element={<SArticle />}
            loader={spiritualityArticleLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="course"
            element={<CoursesList />}
            loader={coursesListLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route
            path="course/:slug"
            element={<CourseDetail />}
            loader={courseDetailLoader}
            HydrateFallback={() => <Loader />}
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route
            path="web-stories"
            element={<WebStoriesList />}
            loader={webStoriesListLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="web-stories/category/:category"
            element={<WebStoriesList />}
            loader={webStoriesListLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="web-stories/:slug"
            element={<WebStoriesView />}
            loader={webStoryViewLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="services"
            element={<Services />}
            loader={servicesLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="services/:slug"
            element={<ServiceDetail />}
            loader={serviceDetailLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="services/:parent/:slug"
            element={<ServiceDetail />}
            loader={serviceDetailLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="citation"
            element={<Citation />}
            loader={citationLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route
            path="locations/:slug"
            element={<CitationDetail />}
            loader={citationDetailLoader}
            hydrateFallback={() => <Loader />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="book-consultation" element={<BookConsultation />} />
        <Route path="book-consultation-form" element={<FormConsultation />} />

        {/* Admin Routes */}
        <Route
            path="admin/login"
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
            <Route path="admin" element={<Navigate to="admin/dashboard" />} />
            <Route path="admin/content-editor/:type/:slug" element={<Edit />} />
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/management" element={<ManageAdmin />} />
            <Route path="admin/courses" element={<ManageCourses />} />
            <Route path="admin/blogs" element={<ManageBlogs />} />
            <Route
                path="admin/spiritualities"
                element={<ManageSpirituality />}
            />
            <Route path="admin/stories" element={<ManageStory />} />
            <Route path="admin/services" element={<ManageService />} />
            <Route path="admin/citations" element={<ManageCitation />} />
            <Route path="admin/testimonials" element={<ManageTestimonial />} />
            <Route path="admin/support" element={<ManageSupport />} />
            <Route path="admin/booking/slots" element={<ManageSlot />} />
            <Route path="admin/booking" element={<ManageBooking />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="" />} />
    </Route>
);
