import axios from 'axios';

// Environment and Base URL Configuration
const REACT_APP_ENV = 'production';

const REACT_APP_API_URL = 'http://localhost:4200/api';
const REACT_APP_API_URL_DEV = 'http://34.131.192.173:4200/api';
const REACT_APP_API_URL_PROD = 'https://acharyaganesh.com/api';
const REACT_APP_UPLOAD_URL = 'https://acharyaganesh.com/api';

export const getBaseUrl = () =>
    REACT_APP_ENV === 'production'
        ? REACT_APP_API_URL_PROD
        : REACT_APP_ENV === 'development'
        ? REACT_APP_API_URL_DEV
        : REACT_APP_API_URL;

// Axios Helper
const axiosHelper = async (method, url, params = {}, data = {}, token) => {
    return await axios({
        method,
        url: `${getBaseUrl()}/${url}`,
        params,
        data,
        headers: {
            'Content-Type': 'application/json',
            authorization: token ? `Bearer ${token}` : '',
        },
        responseType: 'json',
    });
};

// API Factory Functions
const getApi = (endpoint) => (params = {}, token) =>
    axiosHelper('GET', endpoint, params, {}, token);

const postApi = (endpoint) => (data = {}, token) =>
    axiosHelper('POST', endpoint, {}, data, token);

// Public API Helper
export const APIHelper = Object.freeze({
    getBlogCategories: getApi('v1/GetDivine/getBlogCategories'),
    getBlogTags: getApi('v1/GetDivine/getBlogTags'),
    getBlogs: getApi('v1/GetDivine/getBlogs'),
    getCitations: getApi('v1/GetDivine/getCitations'),
    getCourseCategories: getApi('v1/GetDivine/getCourseCategories'),
    getCourseTags: getApi('v1/GetDivine/getCourseTags'),
    getSpiritualities: getApi('v1/GetDivine/getSpiritualities'),
    getSpiritualityTags: getApi('v1/GetDivine/getSpiritualityTags'),
    getSpiritualityCategories: getApi('v1/GetDivine/getSpiritualityCategories'),
    getTestimonials: getApi('v1/GetDivine/getTestimonials'),
    getWebStories: getApi('v1/GetDivine/getWebStories'),
    getWebStoryCategories: getApi('v1/GetDivine/getWebStoryCategories'),
    getWebStoryTags: getApi('v1/GetDivine/getWebStoryTags'),
    getCourses: getApi('v1/GetDivine/getCourses'),
    createLead: postApi('v1/GetDivine/createLead'),
    getLeads: getApi('v1/GetDivine/getLeads'),
    getServices: getApi('v1/GetDivine/getServices'),
    getSlots: getApi('v1/GetDivine/getBookingSlots'),
    createBooking: postApi('v1/GetDivine/createBooking'),
    completeBooking: postApi('v1/GetDivine/completeBooking'),
});

// Admin API Helper
export const ADMINAPIHELPER = Object.freeze({
    login: postApi('v1/admin/login'),
    getAdmin: getApi('v1/admin/get-admin'),
    getAdmins: getApi('v1/admin/get-admins'),
    getRoles: getApi('v1/admin/get-roles'),
    createAdmin: postApi('v1/admin/create-admin'),
    updateAdmin: postApi('v1/admin/update-admin'),
    deleteAdmin: postApi('v1/admin/delete-admin'),
    createCourse: postApi('v1/admin/create-course'),
    updateCourse: postApi('v1/admin/update-course'),
    createBlog: postApi('v1/admin/create-blog'),
    updateBlog: postApi('v1/admin/update-blog'),
    createSpirituality: postApi('v1/admin/create-spirituality'),
    updateSpirituality: postApi('v1/admin/update-spirituality'),
    createWebStory: postApi('v1/admin/create-web-story'),
    updateWebStory: postApi('v1/admin/update-web-story'),
    createCitation: postApi('v1/admin/create-citation'),
    updateCitation: postApi('v1/admin/update-citation'),
    createTestimonial: postApi('v1/admin/create-testimonial'),
    updateTestimonial: postApi('v1/admin/update-testimonial'),
    createCategory: postApi('v1/admin/create-category'),
    createService: postApi('v1/admin/create-service'),
    updateService: postApi('v1/admin/update-service'),
    createSlots: postApi('v1/admin/create-slots'),
    updateSlot: postApi('v1/admin/update-slot'),
    deleteSlot: postApi('v1/admin/delete-slot'),
    getBookings: getApi('v1/admin/get-bookings'),
});

// Upload API Helper
export const UPLOADAPIHELPER = Object.freeze({
    upload: (data) =>
        axios({
            method: 'POST',
            url: `${REACT_APP_UPLOAD_URL}/v1/upload`,
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'json',
        }),
});
