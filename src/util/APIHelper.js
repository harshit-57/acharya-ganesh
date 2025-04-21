import axios from 'axios';

const REACT_APP_ENV = 'production';

const REACT_APP_API_URL = 'http://localhost:4200/api';
const REACT_APP_API_URL_DEV = 'http://34.131.192.173:4200/api';
const REACT_APP_API_URL_PROD = 'https://acharyaganesh.com/api';
const REACT_APP_UPLOAD_URL = 'https://acharyaganesh.com/api';

export const getBaseUrl = () =>
    REACT_APP_ENV == 'production'
        ? REACT_APP_API_URL_PROD
        : REACT_APP_ENV == 'development'
        ? REACT_APP_API_URL_DEV
        : REACT_APP_API_URL;

const axiosHelper = async (method, url, params = {}, data = {}, token) => {
    data = { ...data };
    return await axios({
        method,
        url: getBaseUrl() + '/' + url,
        params,
        data: { ...data },
        headers: {
            'Content-Type': 'application/json',
            authorization: token ? `Bearer ${token}` : '',
        },
        responseType: 'json',
    });
};

const getApi =
    async (endpoint) =>
    async (params = {}, token) =>
        await axiosHelper('GET', endpoint, params, {}, token);

const postApi =
    async (endpoint) =>
    async (data = {}, token) =>
        await axiosHelper('POST', endpoint, {}, data, token);

export const APIHelper = Object.freeze({
    getBlogCategories: await getApi('v1/GetDivine/getBlogCategories'),
    getBlogTags: await getApi('v1/GetDivine/getBlogTags'),
    getBlogs: await getApi('v1/GetDivine/getBlogs'),
    getCitations: await getApi('v1/GetDivine/getCitations'),
    getCourseCategories: await getApi('v1/GetDivine/getCourseCategories'),
    getCourseTags: await getApi('v1/GetDivine/getCourseTags'),
    getSpiritualities: await getApi('v1/GetDivine/getSpiritualities'),
    getSpiritualityTags: await getApi('v1/GetDivine/getSpiritualityTags'),
    getSpiritualityCategories: await getApi(
        'v1/GetDivine/getSpiritualityCategories'
    ),
    getTestimonials: await getApi('v1/GetDivine/getTestimonials'),
    getWebStories: await getApi('v1/GetDivine/getWebStories'),
    getWebStoryCategories: await getApi('v1/GetDivine/getWebStoryCategories'),
    getWebStoryTags: await getApi('v1/GetDivine/getWebStoryTags'),
    getCourses: await getApi('v1/GetDivine/getCourses'),
    createLead: await postApi('v1/GetDivine/createLead'),
    getLeads: await getApi('v1/GetDivine/getLeads'),
    getServices: await getApi('v1/GetDivine/getServices'),

    getSlots: await getApi('v1/GetDivine/getBookingSlots'),
    createBooking: await postApi('v1/GetDivine/createBooking'),
    completeBooking: await postApi('v1/GetDivine/completeBooking'),
});

export const ADMINAPIHELPER = Object.freeze({
    login: await postApi('v1/admin/login'),
    getAdmin: await getApi('v1/admin/get-admin'),
    getAdmins: await getApi('v1/admin/get-admins'),
    getRoles: await getApi('v1/admin/get-roles'),
    createAdmin: await postApi('v1/admin/create-admin'),
    updateAdmin: await postApi('v1/admin/update-admin'),
    deleteAdmin: await postApi('v1/admin/delete-admin'),
    createCourse: await postApi('v1/admin/create-course'),
    updateCourse: await postApi('v1/admin/update-course'),
    createBlog: await postApi('v1/admin/create-blog'),
    updateBlog: await postApi('v1/admin/update-blog'),
    createSpirituality: await postApi('v1/admin/create-spirituality'),
    updateSpirituality: await postApi('v1/admin/update-spirituality'),
    createWebStory: await postApi('v1/admin/create-web-story'),
    updateWebStory: await postApi('v1/admin/update-web-story'),
    createCitation: await postApi('v1/admin/create-citation'),
    updateCitation: await postApi('v1/admin/update-citation'),
    createTestimonial: await postApi('v1/admin/create-testimonial'),
    updateTestimonial: await postApi('v1/admin/update-testimonial'),
    createCategory: await postApi('v1/admin/create-category'),
    createService: await postApi('v1/admin/create-service'),
    updateService: await postApi('v1/admin/update-service'),

    createSlots: await postApi('v1/admin/create-slots'),
    updateSlot: await postApi('v1/admin/update-slot'),
    deleteSlot: await postApi('v1/admin/delete-slot'),

    getBookings: await getApi('v1/admin/get-bookings'),
});

export const UPLOADAPIHELPER = Object.freeze({
    upload: async (data) => {
        return await axios({
            method: 'POST',
            url: REACT_APP_UPLOAD_URL + '/v1/upload',
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'json',
        });
    },
});
