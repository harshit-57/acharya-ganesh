import axios from 'axios';

const useLocalHostApi = true;

const BASE_URL_PROD = 'https://';
const BASE_URL_LOCAL = 'http://localhost:4200/v1/GetDivine';

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
    async (params = {}) =>
        await axiosHelper('GET', endpoint, params, {}, 'token');

export const APIHelper = Object.freeze({
    getBlogCategories: await getApi('getBlogCategories'),
    getBlogTags: await getApi('getBlogTags'),
    getBlogs: await getApi('getBlogs'),
    getCitations: await getApi('getCitations'),
    getCourseCategories: await getApi('getCourseCategories'),
    getCourseTags: await getApi('getCourseTags'),
    getSpiritualities: await getApi('getSpiritualities'),
    getSpiritualityTags: await getApi('getSpiritualityTags'),
    getSpiritualityCategories: await getApi('getSpiritualityCategories'),
    getTestimonials: await getApi('getTestimonials'),
    getWebStories: await getApi('getWebStories'),
    getWebStoryCategories: await getApi('getWebStoryCategories'),
    getWebStoryTags: await getApi('getWebStoryTags'),
    getCourses: await getApi('getCourses'),
});
