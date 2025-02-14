import axios from 'axios';

const useLocalHostApi = true;

const BASE_URL_PROD = 'https://';
const BASE_URL_LOCAL = 'http://localhost:4200';
// const BASE_URL_LOCAL = 'http://34.131.192.173:4200';

const getBaseUrl = () => (useLocalHostApi ? BASE_URL_LOCAL : BASE_URL_PROD);

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
});

export const ADMINAPIHELPER = Object.freeze({
    login: await postApi('v1/admin/login'),
    getAdminPermission: await getApi('v1/admin/get-admin-permission'),

    createCourse: await postApi('v1/admin/create-course'),
    updateCourse: await postApi('v1/admin/update-course'),
});
