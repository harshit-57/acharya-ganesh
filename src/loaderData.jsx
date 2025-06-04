import { APIHelper } from './util/APIHelper';

export const blogListLoader = async ({ params }) => {
    try {
        const { category } = params;
        const response = await APIHelper.getBlogs({
            page: 1,
            pageSize: 9,
            status: 1,
            active: 1,
            category: category || undefined,
        });
        const tags = await APIHelper.getBlogTags({
            status: 1,
        });
        return {
            blogs: response?.data?.data || [],
            tags: tags?.data || [],
        };
    } catch (error) {
        console.error('Blog list loader error:', error);
        return { blogs: [], category };
    }
};

export const articleLoader = async ({ params }) => {
    try {
        const { slug } = params;
        const response = await APIHelper.getBlogs({
            slug,
            status: 1,
            active: 1,
        });
        return {
            article: response?.data?.data?.length
                ? response.data.data[0]
                : null,
        };
    } catch (error) {
        console.error('Article loader error:', error);
    }
};

export const coursesListLoader = async ({}) => {
    try {
        const response = await APIHelper.getCourses({
            page: 1,
            pageSize: 8,
            status: 1,
            active: 1,
        });
        const tags = await APIHelper.getCourseTags({
            status: 1,
        });
        return { courses: response?.data?.data || [], tags: tags?.data || [] };
    } catch (error) {
        console.error('Courses loader error:', error);
        return { courses: [] };
    }
};

export const courseDetailLoader = async ({ params }) => {
    try {
        const { slug } = params;
        const response = await APIHelper.getCourses({
            slug: slug,
            status: 1,
            active: 1,
        });
        return {
            course: response?.data?.data?.length ? response.data.data[0] : null,
        };
    } catch (error) {
        console.error('Course detail loader error:', error);
        throw new Response('Course not found', { status: 404 });
    }
};

export const spiritualityListLoader = async ({ params }) => {
    try {
        const { category } = params;
        const response = await APIHelper.getSpiritualities({
            page: 1,
            pageSize: 9,
            status: 1,
            active: 1,
            category: category || undefined,
        });
        const tags = await APIHelper.getSpiritualityTags({
            status: 1,
        });
        return {
            spiritualities: response?.data?.data || [],
            tags: tags?.data || [],
        };
    } catch (error) {
        console.error('Spirituality loader error:', error);
        return { articles: [], category };
    }
};

export const spiritualityArticleLoader = async ({ params }) => {
    try {
        const { slug } = params;
        const response = await APIHelper.getSpiritualities({
            slug: slug,
            status: 1,
            active: 1,
        });
        return {
            article: response?.data?.data?.length
                ? response.data.data[0]
                : null,
        };
    } catch (error) {
        console.error('Spirituality article loader error:', error);
        throw new Response('Article not found', { status: 404 });
    }
};

export const webStoriesListLoader = async ({ params }) => {
    try {
        const response = await APIHelper.getWebStories({
            status: 1,
            active: 1,
            page: 1,
            pageSize: 9,
        });
        const tags = await APIHelper.getWebStoryTags({
            status: 1,
        });
        return {
            stories: response?.data?.data || [],
            tags: tags?.data || [],
        };
    } catch (error) {
        console.error('Web stories loader error:', error);
        return { stories: [], category };
    }
};

export const webStoryViewLoader = async ({ params }) => {
    try {
        const { slug } = params;
        const response = await APIHelper.getWebStories({ slug: slug });
        return {
            story: response?.data?.data?.length ? response.data.data[0] : null,
        };
    } catch (error) {
        console.error('Web story loader error:', error);
        throw new Response('Story not found', { status: 404 });
    }
};

export const servicesLoader = async () => {
    try {
        const response = await APIHelper.getServices({
            status: 1,
            active: 1,
        });
        return { services: response?.data?.data || [] };
    } catch (error) {
        console.error('Services loader error:', error);
        return { services: [] };
    }
};

export const serviceDetailLoader = async ({ params }) => {
    try {
        const { slug, parent } = params;
        const response = await APIHelper.getServices({
            slug: slug,
            status: 1,
            active: 1,
        });
        return {
            service: response.data.data?.length ? response.data.data[0] : null,
        };
    } catch (error) {
        console.error('Service detail loader error:', error);
        throw new Response('Service not found', { status: 404 });
    }
};

export const citationLoader = async () => {
    try {
        const response = await APIHelper.getCitations({
            page: 1,
            pageSize: 24,
            status: 1,
        });
        return { citations: response?.data?.data || [] };
    } catch (error) {
        console.error('Citations loader error:', error);
        return { citations: [] };
    }
};

export const citationDetailLoader = async ({ params }) => {
    try {
        const { slug } = params;
        const response = await APIHelper.getCitations({
            slug: slug,
            status: 1,
        });
        return {
            citation: response.data.data?.length ? response.data.data[0] : null,
        };
    } catch (error) {
        console.error('Citation detail loader error:', error);
        throw new Response('Citation not found', { status: 404 });
    }
};
