import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import styles from './style.module.css';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ToggleSwitch from '../../components/toggle/ToggleSwitch';
import { InputField } from '../../components/input-field/InputField';
import useSettings from '../hooks/useSettings';
import Editor from './component/editor/Editor';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ADMINAPIHELPER, APIHelper } from '../../util/APIHelper';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Icon,
    Link,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import { MatxLoading } from '../components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { HorizontalBorder, Spacer } from '../../components/spacer/Spacer';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayJs from 'dayjs';
import { toast } from 'react-toastify';
import { htmlToText } from 'html-to-text';
import AlertDialog from '../components/Alert';
import parse from 'html-react-parser';
import FilePondSingle from './component/file-pond/FilePond';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';

const Edit = () => {
    const { updateSettings } = useSettings();
    const theme = useTheme();
    const primaryColor = theme?.palette?.primary?.main;
    const { state } = useLocation();
    const navigate = useNavigate();
    const { type, slug } = useParams();
    const token = localStorage.getItem('accessToken');

    const initalData = {
        title: '',
        description: !['story']?.includes(type) ? '' : undefined,
        image: ['course', 'blog', 'spirituality', 'story', 'service']?.includes(
            type
        )
            ? ''
            : undefined,
        imageAlt: [
            'course',
            'blog',
            'spirituality',
            'story',
            'service',
        ]?.includes(type)
            ? ''
            : undefined,
        focusKeyphrase: [
            'course',
            'blog',
            'spirituality',
            'citation',
            'service',
        ]?.includes(type)
            ? ''
            : undefined,
        metaTitle: [
            'course',
            'blog',
            'spirituality',
            'citation',
            'service',
        ]?.includes(type)
            ? ''
            : undefined,
        metaSiteName: [
            'course',
            'blog',
            'spirituality',
            'citation',
            'service',
        ]?.includes(type)
            ? 'Acharya Ganesh: Solutions for Life, Love, and Career Woes'
            : undefined,
        metaDescription: [
            'course',
            'blog',
            'spirituality',
            'citation',
            'service',
        ]?.includes(type)
            ? ''
            : undefined,
        isShortDescription: ['course', 'story'].includes(type)
            ? true
            : undefined,
        shortDescription: ['course', 'story']?.includes(type) ? '' : undefined,
        isTOP: ['course'].includes(type)
            ? false
            : ['blog', 'spirituality']?.includes(type)
            ? 1
            : undefined,
        status: 1,
        publishedOn: new Date(),
        categories: ['course', 'blog', 'spirituality', 'story']?.includes(type)
            ? []
            : undefined,
        tags: ['course', 'blog', 'spirituality', 'story']?.includes(type)
            ? []
            : undefined,
        // Course Data
        isCourse: type === 'course' ? true : undefined,
        productUrl: type === 'course' ? '' : undefined,
        buyText: type === 'course' ? 'Buy Now' : undefined,
        regularPrice: type === 'course' ? '' : undefined,
        salePrice: type === 'course' ? '' : undefined,
        productImages: type === 'course' ? [] : undefined,
        // Testimonial Data
        rating: ['testimonial']?.includes(type) ? '' : undefined,
        // Web story Data
        storyImages: ['story']?.includes(type) ? [] : undefined,
        timeDuration: ['story']?.includes(type) ? 500 : undefined,
        // Service Data
        header: ['service']?.includes(type) ? '' : undefined,
        subHeader: ['service']?.includes(type) ? '' : undefined,
        link: ['service']?.includes(type) ? '' : undefined,
        linkText: ['service']?.includes(type) ? '' : undefined,
        // extraDetails: {
        //     images: [],
        //     link: '',
        //     icon: '',
        //     size: '',
        //     textColor: '',
        //     bgColor: '',
        // },
    };

    const [data, setData] = useState(initalData);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isTableContent, setIsTableContent] = useState(false);
    const [slugInput, setSlugInput] = useState('');
    const [editSlug, setEditSlug] = useState(false);
    const [statusInput, setStatusInput] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    const [publishedOnInput, setPublishedOnInput] = useState(new Date());
    const [editPublishedOn, setEditPublishedOn] = useState(false);
    const [categoryTab, setCategoryTab] = useState('');
    const [newCategoryInput, setNewCategoryInput] = useState('');
    const [newCategory, setNewCategory] = useState(false);
    const [tagInput, setTagInput] = useState('');
    const [suggestTag, setSuggestTag] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const imageUpload = useRef(null);
    const storyImageUpload = useRef();

    const init = useCallback(() => {
        switch (type) {
            case 'course':
                (async () => {
                    setIsLoading(true);
                    const tagResponse = await APIHelper.getCourseTags({
                        pageSize: 3,
                        filter: 'most_used',
                    });
                    setTags(tagResponse?.data);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getCourses({ slug: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Name,
                            description: response?.ProductDescription,
                            slug: response?.Slug,
                            image: response?.Images?.length
                                ? response?.Images[0]
                                : '',
                            // imageAlt: "",
                            focusKeyphrase: response?.Focus_Keyphrase || '',
                            metaTitle: response?.Meta_Title,
                            metaSiteName: response?.Meta_SiteName,
                            metaDescription: response?.Meta_Desc,
                            isShortDescription: true,
                            shortDescription: response?.ShortDescription,
                            isTOP: response?.IsTop || 0,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),

                            categories:
                                response?.Categories?.map((item) => ({
                                    id: item?.CategoryId,
                                    name: item?.CategoryName,
                                    slug: item?.CategorySlug,
                                })) || [],
                            tags:
                                response?.Tags?.map((item) => ({
                                    id: item?.TagId,
                                    name: item?.TagName,
                                })) || [],
                            isCourse: true,
                            productUrl: response?.ProductURL,
                            buyText: response?.Buy_Text,
                            regularPrice: Math.ceil(
                                response?.Regular_Price || 0
                            ),
                            salePrice: Math.ceil(response?.Sale_Price || 0),
                            productImages: response?.Images,
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'blog':
                (async () => {
                    setIsLoading(true);
                    const tagResponse = await APIHelper.getBlogTags({
                        pageSize: 3,
                        filter: 'most_used',
                    });
                    setTags(tagResponse?.data);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getBlogs({ slug: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Title,
                            description: response?.Description,
                            slug: response?.Slug,
                            image: response?.Image || '',
                            imageAlt: response?.ImageAlt || '',
                            focusKeyphrase: response?.Focus_Keyphrase || '',
                            metaTitle: response?.Meta_Title,
                            metaSiteName: response?.Meta_SiteName,
                            metaDescription: response?.Meta_Desc,
                            // isShortDescription: true,
                            // shortDescription: response?.ShortDescription,
                            isTOP: response?.IsTop || 1,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),

                            categories:
                                response?.Categories?.map((item) => ({
                                    id: item?.CategoryId,
                                    name: item?.CategoryName,
                                    slug: item?.CategorySlug,
                                })) || [],
                            tags:
                                response?.Tags?.map((item) => ({
                                    id: item?.TagId,
                                    name: item?.TagName,
                                })) || [],
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'spirituality':
                (async () => {
                    setIsLoading(true);
                    const tagResponse = await APIHelper.getSpiritualityTags({
                        pageSize: 3,
                        filter: 'most_used',
                    });
                    setTags(tagResponse?.data);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getSpiritualities({ slug: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Title,
                            description: response?.Description,
                            slug: response?.Slug,
                            image: response?.Image || '',
                            imageAlt: response?.ImageAlt || '',
                            focusKeyphrase: response?.Focus_Keyphrase || '',
                            metaTitle: response?.Meta_Title,
                            metaSiteName: response?.Meta_SiteName,
                            metaDescription: response?.Meta_Desc,
                            isTOP: response?.IsTop || 1,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),

                            categories:
                                response?.Categories?.map((item) => ({
                                    id: item?.CategoryId,
                                    name: item?.CategoryName,
                                    slug: item?.CategorySlug,
                                })) || [],
                            tags:
                                response?.Tags?.map((item) => ({
                                    id: item?.TagId,
                                    name: item?.TagName,
                                })) || [],
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'citation':
                (async () => {
                    setIsLoading(true);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getCitations({ slug: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Title,
                            description: response?.Description,
                            slug: response?.Slug,
                            status: response?.Status,
                            focusKeyphrase: response?.Focus_Keyphrase || '',
                            metaTitle: response?.Meta_Title,
                            metaSiteName: response?.Meta_SiteName,
                            metaDescription: response?.Meta_Desc,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'testimonial':
                (async () => {
                    setIsLoading(true);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getTestimonials({ id: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.UserName,
                            description: response?.Description,
                            rating:
                                Math.ceil(response?.Rating) < 5
                                    ? Math.ceil(response?.Rating)
                                    : 5,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'story':
                (async () => {
                    setIsLoading(true);
                    const tagResponse = await APIHelper.getWebStoryTags({
                        pageSize: 3,
                        filter: 'most_used',
                    });
                    setTags(tagResponse?.data);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getWebStories({ id: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Title,
                            image: response?.CoverImageUrl || '',
                            imageAlt: response?.CoverImageAlt || '',
                            isShortDescription: true,
                            shortDescription: response?.ShortDescription,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),
                            categories:
                                response?.Categories?.map((item) => ({
                                    id: item?.CategoryId,
                                    name: item?.CategoryName,
                                    slug: item?.CategorySlug,
                                })) || [],
                            tags:
                                response?.Tags?.map((item) => ({
                                    id: item?.TagId,
                                    name: item?.TagName,
                                })) || [],
                            storyImages:
                                response?.Images?.map((item, index) => ({
                                    id: item?.Id,
                                    imageText: item?.ImageText,
                                    imageType: htmlToText(
                                        item?.ImageText
                                    )?.trim()
                                        ? 'text'
                                        : 'link',
                                    imageUrl: item?.ImageUrl,
                                    imageOrder: item?.ImageOrder || index + 1,
                                    imageLink: item?.ImageLink || '',
                                    imageLinkText: item?.ImageLinkText || '',
                                    imageLinkIcon: item?.ImageLinkIcon || '',
                                })) || [],
                            timeDuration: response?.TimeDuration,
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            case 'service':
                (async () => {
                    setIsLoading(true);
                    if (slug != 'new' && state?.Id) {
                        const response = (
                            await APIHelper.getServices({ slug: slug })
                        )?.data?.data[0];
                        setData({
                            id: response?.Id,
                            title: response?.Name,
                            description: response?.Description,
                            slug: response?.Slug,
                            header: response?.Title,
                            subHeader: response?.SubTitle,
                            image: response?.Image || '',
                            imageAlt: response?.ImageAlt || '',
                            link: response?.Link || '',
                            linkText: response?.LinkText || '',
                            focusKeyphrase: response?.Focus_Keyphrase || '',
                            metaTitle: response?.Meta_Title,
                            metaSiteName: response?.Meta_SiteName,
                            metaDescription: response?.Meta_Desc,
                            status: response?.Status,
                            publishedOn: response?.PublishedOn
                                ? new Date(response?.PublishedOn)
                                : new Date(),
                            parentId: response?.ParentId,
                            parentSlug: response?.ParentSlug,
                            parentName: response?.ParentName,
                        });
                    }
                    setIsLoading(false);
                })();
                break;

            default:
                setIsLoading(false);
                break;
        }
    }, [type]);

    useEffect(() => {
        setTimeout(() => {
            updateSettings({
                layout1Settings: {
                    leftSidebar: {
                        mode: 'compact',
                        title:
                            !state?.Id || slug === 'new'
                                ? `New ${type}`
                                : `Edit ${type}`,
                    },
                },
            });
        }, 100);
        init();
        return () => {
            updateSettings({
                layout1Settings: {
                    leftSidebar: {
                        title: '',
                    },
                },
            });
        };
    }, []);

    useEffect(() => {
        getCategories();
    }, [categoryTab]);

    const getCategories = async () => {
        let categoryResponse;
        switch (type) {
            case 'course':
                categoryResponse = await APIHelper.getCourseCategories(
                    categoryTab == 'most'
                        ? {
                              sortBy: 'Count',
                              sort: 'DESC',
                          }
                        : {}
                );
                setCategories(categoryResponse?.data);
                break;

            case 'blog':
                categoryResponse = await APIHelper.getBlogCategories(
                    categoryTab == 'most'
                        ? {
                              sortBy: 'Count',
                              sort: 'DESC',
                          }
                        : {}
                );
                setCategories(categoryResponse?.data);
                break;

            case 'spirituality':
                categoryResponse = await APIHelper.getSpiritualityCategories(
                    categoryTab == 'most'
                        ? {
                              sortBy: 'Count',
                              sort: 'DESC',
                          }
                        : {}
                );
                setCategories(categoryResponse?.data);
                break;

            case 'story':
                categoryResponse = await APIHelper.getWebStoryCategories(
                    categoryTab == 'most'
                        ? {
                              sortBy: 'Count',
                              sort: 'DESC',
                          }
                        : {}
                );
                setCategories(categoryResponse?.data);
                break;

            default:
                break;
        }
    };

    const handleChangeData = (event) => {
        const { name, value } = event.target;
        if (name) setData({ ...data, [name]: value });
    };

    const handleTagsChange = (tag) => {
        if (!tag) return;

        const tagList = tag?.split(',')?.map((item) => item.trim());

        tagList?.forEach((item) => {
            if (
                data.tags.some(
                    (tag) => tag.name?.toLowerCase() === item?.toLowerCase()
                )
            )
                return;
            setData({
                ...data,
                tags: [
                    ...data.tags,
                    {
                        name: item,
                    },
                ],
            });
        });
        setTagInput('');
    };

    const handleCreateCategory = async () => {
        try {
            let payload = {
                type,
                name: newCategoryInput,
            };

            setIsLoading(true);
            ADMINAPIHELPER.createCategory(payload, token)
                ?.then((response) => {
                    if (response?.data?.success) {
                        toast.success('Category created successfully');
                        setCategories([
                            {
                                Id: response?.data?.data?.Id,
                                Name: response?.data?.data?.Name,
                                Slug: response?.data?.data?.Slug,
                            },
                            ...categories,
                        ]);
                        setNewCategoryInput('');
                    } else {
                        toast.error(response?.message);
                    }
                    setIsLoading(false);
                })
                .catch((error) => {
                    toast.error(
                        error?.response?.data?.message || error?.message
                    );
                    setIsLoading(false);
                });
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const handleValidation = (payload) => {
        let isValid = true;
        if (!payload?.title) {
            toast.error('Title is required');
            isValid = false;
            return isValid;
        }

        if (payload?.title?.length > 200) {
            toast.error('Title should be less than 200 characters');
            isValid = false;
            return isValid;
        }

        if (
            !['story']?.includes(type) &&
            payload?.status == 1 &&
            !payload?.description
        ) {
            toast.error('Description is required');
            isValid = false;
            return isValid;
        }

        if (
            !['story', 'testimonial']?.includes(type) &&
            payload?.status == 1 &&
            htmlToText(payload?.description)?.length < 200
        ) {
            toast.error('Description should be more than 200 characters');
            isValid = false;
            return isValid;
        }

        if (
            ['course', 'story']?.includes(type) &&
            payload?.status == 1 &&
            !payload?.image
        ) {
            toast.error('Image is required');
            isValid = false;
            return isValid;
        }

        if (payload?.image && !payload?.imageAlt) {
            toast.error('Image Alt is required');
            isValid = false;
            return isValid;
        }

        if (payload?.status == 1 && payload?.isShortDescription) {
            if (!payload?.shortDescription) {
                toast.error('Short Description is required');
                isValid = false;
                return isValid;
            }
            // if (htmlToText(payload?.shortDescription)?.length > 500) {
            //     toast.error(
            //         'Short Description should not be more than 500 characters'
            //     );
            //     isValid = false;
            //     return isValid;
            // }
        }

        if (
            !['citation', 'testimonial', 'service']?.includes(type) &&
            payload?.status == 1 &&
            !payload?.categories?.length
        ) {
            toast.error('Category is required');
            isValid = false;
            return isValid;
        }

        if (payload?.status == 1 && payload?.isCourse) {
            if (!payload?.productUrl) {
                toast.error('Course URL is required');
                isValid = false;
                return isValid;
            }
            if (!payload?.buyText) {
                toast.error('Buy Text is required');
                isValid = false;
                return isValid;
            }
            if (!payload?.regularPrice) {
                toast.error('Regular Price is required');
                isValid = false;
                return isValid;
            }
        }

        if (type == 'story')
            if (!data?.storyImages?.length) {
                toast.error('Story Images are required');
                isValid = false;
                return isValid;
            } else {
                data?.storyImages?.forEach((item, index) => {
                    if (!item?.imageUrl) {
                        toast.error(`Story Image ${index + 1} is required`);
                        isValid = false;
                        return isValid;
                    }
                    if (item?.imageType === 'link') {
                        if (!item?.imageLink) {
                            toast.error(
                                ` ${index + 1} Story Image Link is required`
                            );
                            isValid = false;
                            return isValid;
                        }
                        if (!item?.imageLink?.match(/^(http|https):\/\//)) {
                            toast.error(
                                `${
                                    index + 1
                                } Story Image Link is not a valid URL`
                            );
                            isValid = false;
                            return isValid;
                        }
                        if (!item?.imageLinkText) {
                            toast.error(
                                `${index + 1} Story Image Link Text is required`
                            );
                            isValid = false;
                            return isValid;
                        }
                    }
                    //  else if (!htmlToText(item?.imageText)) {
                    //     toast.error(
                    //         `${index + 1} Story Image Text is required`
                    //     );
                    //     isValid = false;
                    //     return isValid;
                    // }
                });
            }

        if (payload?.id) {
            if (!['story', 'testimonial']?.includes(type) && !payload?.slug) {
                toast.error('Slug is required');
                isValid = false;
                return isValid;
            }
        }
        return isValid;
    };

    const handleSubmit = async (status) => {
        let payload = data;
        if (status) payload.status = status;

        const isValid = handleValidation(payload);
        if (!isValid) return;

        switch (type) {
            case 'course':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateCourse(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Course updated successfully');
                                navigate(`/admin/courses`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createCourse(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Course created successfully');
                                navigate(`/admin/courses`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'blog':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateBlog(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Blog updated successfully');
                                navigate(`/admin/blogs`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createBlog(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Blog created successfully');
                                navigate(`/admin/blogs`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'spirituality':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateSpirituality(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Spirituality updated successfully'
                                );
                                navigate(`/admin/spiritualities`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createSpirituality(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Spirituality created successfully'
                                );
                                navigate(`/admin/spiritualities`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'story':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateWebStory(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Web Story updated successfully');
                                navigate(`/admin/stories`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createWebStory(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Web Story created successfully');
                                navigate(`/admin/stories`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'citation':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateCitation(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Citation updated successfully');
                                navigate(`/admin/citations`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createCitation(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Citation created successfully');
                                navigate(`/admin/citations`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'testimonial':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateTestimonial(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Testimonial updated successfully'
                                );
                                navigate(`/admin/testimonials`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createTestimonial(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Testimonial created successfully'
                                );
                                navigate(`/admin/testimonials`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            case 'service':
                setIsLoading(true);
                if (payload?.id) {
                    ADMINAPIHELPER.updateService(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Service updated successfully');
                                navigate(`/admin/services`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                } else {
                    ADMINAPIHELPER.createService(payload, token)
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Service created successfully');
                                navigate(`/admin/services`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            default:
                break;
        }
    };

    const handleDelete = async () => {
        switch (type) {
            case 'course':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateCourse(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Course deleted successfully');
                                navigate(`/admin/courses`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;
            case 'blog':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateBlog(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Blog deleted successfully');
                                navigate(`/admin/blogs`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;
            case 'spirituality':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateSpirituality(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Spirituality deleted successfully'
                                );
                                navigate(`/admin/spiritualities`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;
            case 'citation':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateCitation(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Citation deleted successfully');
                                navigate(`/admin/citations`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;
            case 'testimonial':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateTestimonial(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success(
                                    'Testimonial deleted successfully'
                                );
                                navigate(`/admin/testimonials`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;
            case 'service':
                if (data?.id) {
                    setIsLoading(true);
                    ADMINAPIHELPER.updateService(
                        { id: data?.id, deletedOn: new Date() },
                        token
                    )
                        ?.then((response) => {
                            if (response?.data?.success) {
                                toast.success('Service deleted successfully');
                                navigate(`/admin/services`);
                            } else {
                                toast.error(response?.message);
                            }
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            toast.error(
                                error?.response?.data?.message || error?.message
                            );
                            setIsLoading(false);
                        });
                }
                break;

            default:
                setShowDeleteAlert(false);
                break;
        }
    };

    const handlePreview = async () => {
        let previewData = {};
        if (data?.title) {
            switch (type) {
                case 'course':
                    previewData = {
                        Id: data.id || undefined,
                        Name: data.title,
                        Slug: data.slug,
                        ProductDescription: data?.description,
                        Focus_Keyphrase: data.focusKeyphrase,
                        Meta_Title: data.metaTitle,
                        Meta_SiteName: data.metaSiteName,
                        Meta_Desc: data.metaDescription,
                        Regular_Price: data.regularPrice,
                        Sale_Price: data.salePrice,
                        ProductURL: data.productUrl,
                        ShortDescription: data.shortDescription,
                        Buy_Text: data.buyText,
                        PublishedOn: data.publishedOn,
                        IsTop: data.isTOP,
                        Status: data.status,
                        Categories: data.categories?.map((category) => ({
                            CategoryId: category.id,
                            CategoryName: category.name,
                            CategorySlug: category.slug,
                        })),
                        Tags: data.tags?.map((tag) => ({
                            TagId: tag.id,
                            TagName: tag.name,
                        })),
                        Images: data.productImages,
                    };
                    navigate(
                        `/course/${previewData?.Slug || 'new'}?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                case 'blog':
                    previewData = {
                        Id: data.id || undefined,
                        Title: data.title,
                        Slug: data.slug,
                        Description: data?.description,
                        Focus_Keyphrase: data.focusKeyphrase,
                        Meta_Title: data.metaTitle,
                        Meta_SiteName: data.metaSiteName,
                        Meta_Desc: data.metaDescription,
                        ShortDescription: data.shortDescription,
                        PublishedOn: data.publishedOn,
                        IsTop: data.isTOP,
                        Status: data.status,
                        Categories: data.categories?.map((category) => ({
                            CategoryId: category.id,
                            CategoryName: category.name,
                            CategorySlug: category.slug,
                        })),
                        Tags: data.tags?.map((tag) => ({
                            TagId: tag.id,
                            TagName: tag.name,
                        })),
                        Image: data.image,
                        ImageAlt: data.imageAlt,
                    };

                    navigate(
                        `/blog/${
                            previewData?.Categories?.length
                                ? previewData?.Categories[0]?.CategorySlug
                                : '-'
                        }/${previewData?.Slug || 'new'}?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                case 'spirituality':
                    previewData = {
                        Id: data.id || undefined,
                        Title: data.title,
                        Slug: data.slug,
                        Description: data?.description,
                        Focus_Keyphrase: data.focusKeyphrase,
                        Meta_Title: data.metaTitle,
                        Meta_SiteName: data.metaSiteName,
                        Meta_Desc: data.metaDescription,
                        ShortDescription: data.shortDescription,
                        PublishedOn: data.publishedOn,
                        IsTop: data.isTOP,
                        Status: data.status,
                        Categories: data.categories?.map((category) => ({
                            CategoryId: category.id,
                            CategoryName: category.name,
                            CategorySlug: category.slug,
                        })),
                        Tags: data.tags?.map((tag) => ({
                            TagId: tag.id,
                            TagName: tag.name,
                        })),
                        Image: data.image,
                        ImageAlt: data.imageAlt,
                    };

                    navigate(
                        `/spirituality/${
                            previewData?.Categories?.length
                                ? previewData?.Categories[0]?.CategorySlug
                                : '-'
                        }/${previewData?.Slug || 'new'}?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                case 'story':
                    previewData = {
                        Id: data.id || undefined,
                        Title: data.title,
                        ShortDescription: data.shortDescription,
                        PublishedOn: data.publishedOn,
                        Status: data.status,
                        Categories: data.categories?.map((category) => ({
                            CategoryId: category.id,
                            CategoryName: category.name,
                            CategorySlug: category.slug,
                        })),
                        Tags: data.tags?.map((tag) => ({
                            TagId: tag.id,
                            TagName: tag.name,
                        })),
                        CoverImageUrl: data.image,
                        CoverImageAlt: data.imageAlt,
                        Images:
                            data?.storyImages?.map((item, index) => ({
                                Id: item?.id,
                                ImageText: item?.imageText,
                                ImageUrl: item?.imageUrl,
                                ImageOrder: index + 1,
                                ImageLink: item?.imageLink,
                                ImageLinkText: item?.imageLinkText,
                                ImageLinkIcon: item?.imageLinkIcon,
                            })) || [],
                        TimeDuration: data?.timeDuration,
                    };

                    navigate(
                        `/web-stories/${
                            previewData?.Categories?.length
                                ? previewData?.Categories[0]?.CategorySlug
                                : '-'
                        }/${previewData?.Id || 'new'}?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                case 'citation':
                    previewData = {
                        Title: data.title,
                        Slug: data.slug,
                        Description: data?.description,
                        PublishedOn: data.publishedOn,
                        Status: data.status,
                        Focus_Keyphrase: data.focusKeyphrase,
                        Meta_Title: data.metaTitle,
                        Meta_SiteName: data.metaSiteName,
                        Meta_Desc: data.metaDescription,
                    };

                    navigate(
                        `/citation/${previewData?.Slug || 'new'}?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                case 'service':
                    previewData = {
                        Id: data.id || undefined,
                        Name: data.title,
                        Slug: data.slug,
                        Description: data?.description,
                        Title: data?.header,
                        SubTitle: data?.subHeader,
                        Focus_Keyphrase: data.focusKeyphrase,
                        Meta_Title: data.metaTitle,
                        Meta_SiteName: data.metaSiteName,
                        Meta_Desc: data.metaDescription,
                        PublishedOn: data.publishedOn,
                        Status: data.status,
                        Image: data.image,
                        ImageAlt: data.imageAlt,
                        Link: data?.link,
                        LinkText: data?.linkText,
                        ParentId: data?.parentId,
                        ParentName: data?.parentName,
                        ParentSlug: data?.parentSlug,
                    };

                    navigate(
                        previewData?.ParentSlug
                            ? `/service/${previewData?.parentSlug}/${
                                  previewData?.Slug || 'new'
                              }?preview=true`
                            : `/service/${
                                  previewData?.Slug || 'new'
                              }?preview=true`,
                        { state: { data: previewData } }
                    );
                    break;

                default:
                    break;
            }
        }
    };

    const baseLink = useMemo(
        () =>
            type === 'course'
                ? `${window?.location?.origin}/course`
                : type === 'blog'
                ? `${window?.location?.origin}/blog/${
                      data?.categories?.length ? data?.categories[0]?.slug : '-'
                  }`
                : type === 'spirituality'
                ? `${window?.location?.origin}/spirituality/${
                      data?.categories?.length ? data?.categories[0]?.slug : '-'
                  }`
                : type === 'story'
                ? `${window?.location?.origin}/web-stories/${
                      data?.categories?.length ? data?.categories[0]?.slug : '-'
                  }`
                : type === 'service'
                ? `${window?.location?.origin}/service` +
                  (data?.parentSlug ? `/${data?.parentSlug}` : '')
                : type === 'citation'
                ? `${window?.location?.origin}/citation`
                : `${window?.location?.origin}/${type}/${
                      data?.categories?.length ? data?.categories[0]?.slug : '-'
                  }`,
        [type, data]
    );

    const statusName = useMemo(() => {
        if (data.status == 1) return 'Published';
        else if (data.status == 2) return 'Draft';
        // else if (data.publishedOn > new Date()) return 'Scheduled';
        else return 'Pending';
    }, [data.status]);

    return isLoading ? (
        <MatxLoading />
    ) : (
        <div className={styles.container}>
            <div className={styles.left_content}>
                <InputField
                    className={styles.title}
                    type="text"
                    name="title"
                    value={data.title}
                    placeholder="Enter Title"
                    onChange={handleChangeData}
                />
                {data?.id && data?.slug !== undefined && (
                    <div className={styles.permalink}>
                        <label>Permalink:</label>
                        {editSlug || !data?.slug ? (
                            <>
                                <div className={styles.link_input}>
                                    {' '}
                                    <p>
                                        {baseLink}
                                        {'/'}
                                    </p>
                                    <InputField
                                        type="text"
                                        value={slugInput}
                                        name="slug"
                                        placeholder="Enter Slug"
                                        onChange={(e) => {
                                            setSlugInput(e.target.value);
                                        }}
                                    />
                                </div>
                                <span
                                    className={styles.edit_icon}
                                    onClick={() => {
                                        setEditSlug(false);
                                        setData({ ...data, slug: slugInput });
                                    }}
                                >
                                    <Icon sx={{ color: '#000' }}>
                                        check_circle_outline
                                    </Icon>
                                </span>
                                <Spacer horizontal={'10px'} />
                                <span
                                    className={styles.edit_icon}
                                    onClick={() => {
                                        setEditSlug(false);
                                    }}
                                >
                                    <Icon sx={{ color: '#000' }}>
                                        cancel_outline
                                    </Icon>
                                </span>
                            </>
                        ) : (
                            <>
                                <a
                                    className={styles.link}
                                    href={`${baseLink}/${data.slug}`}
                                    target="_blank"
                                >
                                    {`${baseLink}/${data.slug}`}
                                </a>
                                <span
                                    className={styles.edit_icon}
                                    onClick={() => {
                                        setEditSlug(!editSlug);
                                        setSlugInput(data.slug);
                                    }}
                                >
                                    <Icon>edit</Icon>
                                </span>
                            </>
                        )}
                    </div>
                )}

                <div className={styles.buttons}>
                    <button
                        className={styles.save_drafts}
                        onClick={() => {
                            setData({ ...data, status: 2 });
                            handleSubmit(2);
                        }}
                    >
                        Save Drafts
                    </button>
                    {!['testimonial']?.includes(type) && (
                        <button
                            className={styles.preview_changes}
                            onClick={() => {
                                handlePreview();
                            }}
                        >
                            Preview Changes
                        </button>
                    )}
                </div>

                {data?.description != undefined && (
                    <div className={styles.description_container}>
                        {/* <div className={styles.buttons}>
                        <button className={styles.form_buttons}>
                            Add Media
                        </button>
                        <button className={styles.form_buttons}>
                            Add Form
                        </button>
                        <button className={styles.form_buttons}>
                            Add Contact Form
                        </button>
                    </div> */}
                        <div className={styles.additional_header}>
                            <span>{type} Description</span>
                        </div>
                        <Editor
                            content={data?.description || ''}
                            setContent={(html) =>
                                setData({ ...data, description: html })
                            }
                        />
                    </div>
                )}

                {/* Rating for Testimonial */}
                {data?.rating !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Ratings</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <p className={styles.content_label}>Ratings</p>
                                <div className={styles.tab_container}>
                                    {['', '1', '2', '3', '4', '5'].map(
                                        (rating) => (
                                            <button
                                                key={rating}
                                                onClick={() =>
                                                    setData({
                                                        ...data,
                                                        rating: rating,
                                                    })
                                                }
                                                className={
                                                    data?.rating == rating
                                                        ? styles.tab_button_active
                                                        : styles.tab_button
                                                }
                                            >
                                                {rating || 'None'}
                                            </button>
                                        )
                                    )}
                                </div>
                                <span
                                    className={styles.icon_name_info_container}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="#2C2520"
                                            stroke-opacity="0.7"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span
                                        className={
                                            styles.icon_name_info_example
                                        }
                                    >
                                        Null value will be considered as Best
                                    </span>
                                </span>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}

                {data?.isCourse && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Data</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <p className={styles.content_label}>
                                    {type} URL
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.productUrl}
                                    name="productUrl"
                                    onChange={handleChangeData}
                                    placeholder="Enter Course URL"
                                />

                                <p className={styles.content_label}>
                                    Button Text
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={'Buy Now'}
                                    name="buyText"
                                    // onChange={handleChangeData}
                                    placeholder="Enter Button Text"
                                />

                                <p className={styles.content_label}>
                                    Regular Price
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="number"
                                    value={data?.regularPrice}
                                    name="regularPrice"
                                    onChange={handleChangeData}
                                    placeholder="Enter Regular Price"
                                />

                                <p className={styles.content_label}>
                                    Sale Price
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="number"
                                    value={data?.salePrice}
                                    name="salePrice"
                                    onChange={handleChangeData}
                                    placeholder="Enter Sale Price"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}

                {type === 'service' && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Data</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <p className={styles.content_label}>Header</p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.header}
                                    name="header"
                                    onChange={handleChangeData}
                                    placeholder="Enter Header"
                                />
                                <p className={styles.content_label}>
                                    Sub Header
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.subHeader}
                                    name="subHeader"
                                    onChange={handleChangeData}
                                    placeholder="Enter Header"
                                />

                                <p className={styles.content_label}>
                                    Button URL
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.link}
                                    name="link"
                                    onChange={handleChangeData}
                                    placeholder="Enter Button URL"
                                />

                                <p className={styles.content_label}>
                                    Button Text
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.linkText}
                                    name="linkText"
                                    onChange={handleChangeData}
                                    placeholder="Enter Button Text"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}

                {data?.isShortDescription && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Short Description</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0px' }}>
                            <Editor
                                style={{ marginTop: '0px' }}
                                className={'short_editor'}
                                content={data?.shortDescription}
                                setContent={(html) =>
                                    setData({ ...data, shortDescription: html })
                                }
                            />
                        </AccordionDetails>
                    </Accordion>
                )}

                {data?.timeDuration !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Data</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                className={styles.content_wrappper}
                                style={{ maxWidth: '100%' }}
                            >
                                <p className={styles.content_label}>
                                    Time Duration
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="number"
                                    value={data?.timeDuration}
                                    name="timeDuration"
                                    onChange={handleChangeData}
                                    placeholder="Enter Time Duration"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}

                {data?.storyImages !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>Story Images</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.story_container}>
                                {data?.storyImages?.map((storyImage, index) => (
                                    <>
                                        <div
                                            className={
                                                styles.Web_stories_container
                                            }
                                        >
                                            <div className={styles.leftSection}>
                                                <Box
                                                    className={
                                                        styles.content_wrappper
                                                    }
                                                >
                                                    <FilePondSingle
                                                        index={index}
                                                        image={
                                                            storyImage?.imageUrl
                                                        }
                                                        setImage={(
                                                            img,
                                                            imageIndex
                                                        ) =>
                                                            setData((prev) => {
                                                                return {
                                                                    ...prev,
                                                                    storyImages:
                                                                        prev.storyImages.map(
                                                                            (
                                                                                storyImage,
                                                                                i
                                                                            ) => {
                                                                                return imageIndex ==
                                                                                    i
                                                                                    ? {
                                                                                          ...storyImage,
                                                                                          imageUrl:
                                                                                              img,
                                                                                      }
                                                                                    : storyImage;
                                                                            }
                                                                        ),
                                                                };
                                                            })
                                                        }
                                                        type={type}
                                                    />

                                                    <p
                                                        className={
                                                            styles.content_label
                                                        }
                                                        style={{
                                                            marginTop: '20px',
                                                        }}
                                                    >
                                                        Story Type
                                                    </p>
                                                    <div
                                                        className={
                                                            styles.tab_container
                                                        }
                                                    >
                                                        {['text', 'link'].map(
                                                            (imageType) => (
                                                                <button
                                                                    key={
                                                                        imageType
                                                                    }
                                                                    onClick={() =>
                                                                        setData(
                                                                            {
                                                                                ...data,
                                                                                storyImages:
                                                                                    data.storyImages?.map(
                                                                                        (
                                                                                            storyImage,
                                                                                            i
                                                                                        ) => {
                                                                                            return index ===
                                                                                                i
                                                                                                ? {
                                                                                                      ...storyImage,
                                                                                                      imageType:
                                                                                                          imageType,
                                                                                                  }
                                                                                                : storyImage;
                                                                                        }
                                                                                    ),
                                                                            }
                                                                        )
                                                                    }
                                                                    className={
                                                                        (storyImage?.imageType ||
                                                                            'text') ==
                                                                        imageType
                                                                            ? styles.tab_button_active
                                                                            : styles.tab_button
                                                                    }
                                                                >
                                                                    {imageType ||
                                                                        'None'}
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </Box>
                                            </div>
                                            <div
                                                className={styles.rightSection}
                                            >
                                                <div
                                                    className={
                                                        styles.previewContainer
                                                    }
                                                >
                                                    {storyImage.imageUrl ? (
                                                        <img
                                                            className={
                                                                styles.story_media
                                                            }
                                                            src={
                                                                storyImage?.imageUrl ||
                                                                null
                                                            }
                                                            alt={`storyImage-${
                                                                index + 1
                                                            }`}
                                                        />
                                                    ) : (
                                                        <div
                                                            className={
                                                                styles.story_no_media
                                                            }
                                                        ></div>
                                                    )}
                                                    {storyImage?.imageType ===
                                                    'link' ? (
                                                        <div
                                                            className={`${styles.story_link_container}`}
                                                        >
                                                            <Link
                                                                href={
                                                                    storyImage?.imageLink ||
                                                                    ''
                                                                }
                                                                target={
                                                                    '_blank'
                                                                }
                                                            >
                                                                <Icon
                                                                    className={
                                                                        styles.link_icon
                                                                    }
                                                                >
                                                                    {storyImage?.imageLinkIcon ||
                                                                        ''}
                                                                </Icon>
                                                                <p
                                                                    className={
                                                                        styles.link_text
                                                                    }
                                                                >
                                                                    {storyImage?.imageLinkText ||
                                                                        'See More'}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={`${styles.story_text_container}`}
                                                        >
                                                            {parse(
                                                                storyImage?.imageText
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div class={styles.lastSection}>
                                                <div
                                                    className={
                                                        styles.ActionsContainer
                                                    }
                                                >
                                                    <div
                                                        class={styles.button}
                                                        style={{
                                                            opacity:
                                                                index > 0
                                                                    ? 1
                                                                    : 0.5,
                                                        }}
                                                        onClick={() => {
                                                            if (index > 0)
                                                                setData(
                                                                    (
                                                                        prevData
                                                                    ) => ({
                                                                        ...prevData,
                                                                        storyImages:
                                                                            prevData.storyImages.map(
                                                                                (
                                                                                    item,
                                                                                    i
                                                                                ) => {
                                                                                    if (
                                                                                        i ===
                                                                                        index
                                                                                    )
                                                                                        return prevData
                                                                                            .storyImages[
                                                                                            index -
                                                                                                1
                                                                                        ];
                                                                                    if (
                                                                                        i ===
                                                                                        index -
                                                                                            1
                                                                                    )
                                                                                        return prevData
                                                                                            .storyImages[
                                                                                            index
                                                                                        ];
                                                                                    return item;
                                                                                }
                                                                            ),
                                                                    })
                                                                );
                                                        }}
                                                    >
                                                        <Icon>
                                                            keyboard_arrow_up
                                                        </Icon>
                                                    </div>
                                                    <Tooltip title="Delete">
                                                        <div
                                                            class={
                                                                styles.button
                                                            }
                                                            onClick={() => {
                                                                setData(
                                                                    (p) => ({
                                                                        ...p,
                                                                        storyImages:
                                                                            p.storyImages.filter(
                                                                                (
                                                                                    e,
                                                                                    i
                                                                                ) =>
                                                                                    i !==
                                                                                    index
                                                                            ),
                                                                    })
                                                                );
                                                            }}
                                                        >
                                                            <Icon color="primary">
                                                                delete
                                                            </Icon>
                                                        </div>
                                                    </Tooltip>
                                                    <div
                                                        class={styles.button}
                                                        style={{
                                                            opacity:
                                                                index + 1 <
                                                                data
                                                                    ?.storyImages
                                                                    ?.length
                                                                    ? 1
                                                                    : 0.5,
                                                        }}
                                                        onClick={() => {
                                                            if (
                                                                index + 1 <
                                                                data
                                                                    ?.storyImages
                                                                    .length
                                                            )
                                                                setData(
                                                                    (
                                                                        prevData
                                                                    ) => ({
                                                                        ...prevData,
                                                                        storyImages:
                                                                            prevData.storyImages.map(
                                                                                (
                                                                                    item,
                                                                                    i
                                                                                ) => {
                                                                                    if (
                                                                                        i ===
                                                                                        index
                                                                                    )
                                                                                        return prevData
                                                                                            .storyImages[
                                                                                            index +
                                                                                                1
                                                                                        ];
                                                                                    if (
                                                                                        i ===
                                                                                        index +
                                                                                            1
                                                                                    )
                                                                                        return prevData
                                                                                            .storyImages[
                                                                                            index
                                                                                        ];
                                                                                    return item;
                                                                                }
                                                                            ),
                                                                    })
                                                                );
                                                        }}
                                                    >
                                                        <Icon>
                                                            keyboard_arrow_down
                                                        </Icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {storyImage?.imageType == 'link' ? (
                                            <Box
                                                className={
                                                    styles.content_wrappper
                                                }
                                                style={{
                                                    maxWidth: '100%',
                                                    margin: '20px 0',
                                                }}
                                            >
                                                <p
                                                    className={
                                                        styles.content_label
                                                    }
                                                >
                                                    Story Link
                                                </p>
                                                <InputField
                                                    className={styles.input}
                                                    type="text"
                                                    value={
                                                        storyImage?.imageLink
                                                    }
                                                    name="imageLink"
                                                    onChange={(e) =>
                                                        setData((prevData) => ({
                                                            ...prevData,
                                                            storyImages:
                                                                prevData.storyImages.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => {
                                                                        if (
                                                                            i ===
                                                                            index
                                                                        )
                                                                            return {
                                                                                ...item,
                                                                                imageLink:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            };
                                                                        return item;
                                                                    }
                                                                ),
                                                        }))
                                                    }
                                                    placeholder="Enter Link"
                                                />
                                                <p
                                                    className={
                                                        styles.content_label
                                                    }
                                                >
                                                    Story Link Text
                                                </p>

                                                <InputField
                                                    className={styles.input}
                                                    type="text"
                                                    value={
                                                        storyImage?.imageLinkText
                                                    }
                                                    name="imageLinkText"
                                                    onChange={(e) =>
                                                        setData((prevData) => ({
                                                            ...prevData,
                                                            storyImages:
                                                                prevData.storyImages.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => {
                                                                        if (
                                                                            i ===
                                                                            index
                                                                        )
                                                                            return {
                                                                                ...item,
                                                                                imageLinkText:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            };
                                                                        return item;
                                                                    }
                                                                ),
                                                        }))
                                                    }
                                                    placeholder="Enter Link Text"
                                                />

                                                <p
                                                    className={
                                                        styles.content_label
                                                    }
                                                >
                                                    Story Link Icon
                                                </p>
                                                <div>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent:
                                                                'space-between',
                                                            alignItems:
                                                                'center',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: '45%',
                                                            }}
                                                        >
                                                            <select
                                                                style={{
                                                                    borderRadius:
                                                                        '9999px',
                                                                    padding:
                                                                        '15px 16px',
                                                                    border: '1px solid #ccc',
                                                                    fontSize:
                                                                        '16px',
                                                                    appearance:
                                                                        'none',
                                                                    background:
                                                                        'white',
                                                                    fontFamily:
                                                                        'inherit',
                                                                    outline:
                                                                        'none',
                                                                    width: '100%',
                                                                }}
                                                            >
                                                                <option>
                                                                    MUI Icons
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div
                                                            style={{
                                                                width: '45%',
                                                            }}
                                                        >
                                                            <InputField
                                                                className={
                                                                    styles.input
                                                                }
                                                                type="text"
                                                                value={
                                                                    storyImage?.imageLinkIcon
                                                                }
                                                                placeholder="Enter Icon name"
                                                                onChange={(e) =>
                                                                    setData({
                                                                        ...data,
                                                                        storyImages:
                                                                            data?.storyImages?.map(
                                                                                (
                                                                                    image,
                                                                                    i
                                                                                ) =>
                                                                                    index ===
                                                                                    i
                                                                                        ? {
                                                                                              ...image,
                                                                                              imageLinkIcon:
                                                                                                  e
                                                                                                      .target
                                                                                                      .value,
                                                                                          }
                                                                                        : image
                                                                            ),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                width: '5%',
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    display:
                                                                        'flex',
                                                                    alignItems:
                                                                        'center',
                                                                    justifyContent:
                                                                        'center',
                                                                }}
                                                            >
                                                                {storyImage?.imageLinkIcon && (
                                                                    <Icon>
                                                                        {
                                                                            storyImage?.imageLinkIcon
                                                                        }
                                                                    </Icon>
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span
                                                            className={
                                                                styles.icon_name_info_container
                                                            }
                                                        >
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                                    stroke="#2C2520"
                                                                    stroke-opacity="0.7"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                            <span
                                                                className={
                                                                    styles.icon_name_info
                                                                }
                                                            >
                                                                Enter icon name
                                                                from the list.
                                                            </span>
                                                        </span>
                                                        <span
                                                            className={
                                                                styles.icon_name_info_example
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            Examples:{' '}
                                                            <u
                                                                onClick={() =>
                                                                    setData({
                                                                        ...data,
                                                                        storyImages:
                                                                            data?.storyImages?.map(
                                                                                (
                                                                                    image,
                                                                                    i
                                                                                ) =>
                                                                                    index ===
                                                                                    i
                                                                                        ? {
                                                                                              ...image,
                                                                                              imageLinkIcon:
                                                                                                  'arrow_drop_up',
                                                                                          }
                                                                                        : image
                                                                            ),
                                                                    })
                                                                }
                                                            >
                                                                arrow_drop_up
                                                            </u>
                                                            ,{' '}
                                                            <u
                                                                onClick={() =>
                                                                    setData({
                                                                        ...data,
                                                                        storyImages:
                                                                            data?.storyImages?.map(
                                                                                (
                                                                                    image,
                                                                                    i
                                                                                ) =>
                                                                                    index ===
                                                                                    i
                                                                                        ? {
                                                                                              ...image,
                                                                                              imageLinkIcon:
                                                                                                  'keyboard_arrow_up',
                                                                                          }
                                                                                        : image
                                                                            ),
                                                                    })
                                                                }
                                                            >
                                                                keyboard_arrow_up
                                                            </u>
                                                            ,{' '}
                                                            <u
                                                                onClick={() =>
                                                                    setData({
                                                                        ...data,
                                                                        storyImages:
                                                                            data?.storyImages?.map(
                                                                                (
                                                                                    image,
                                                                                    i
                                                                                ) =>
                                                                                    index ===
                                                                                    i
                                                                                        ? {
                                                                                              ...image,
                                                                                              imageLinkIcon:
                                                                                                  'keyboard_double_arrow_up',
                                                                                          }
                                                                                        : image
                                                                            ),
                                                                    })
                                                                }
                                                            >
                                                                keyboard_double_arrow_up
                                                            </u>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Box>
                                        ) : (
                                            <div
                                                className={
                                                    styles.textEditorContainer
                                                }
                                            >
                                                <Editor
                                                    style={{}}
                                                    content={
                                                        storyImage?.imageText ||
                                                        ''
                                                    }
                                                    setContent={(html) =>
                                                        setData((p) => ({
                                                            ...p,
                                                            storyImages:
                                                                p?.storyImages?.map(
                                                                    (item, i) =>
                                                                        i ==
                                                                        index
                                                                            ? {
                                                                                  ...item,
                                                                                  imageText:
                                                                                      html,
                                                                              }
                                                                            : item
                                                                ),
                                                        }))
                                                    }
                                                />
                                            </div>
                                        )}

                                        <HorizontalBorder
                                            height="1px"
                                            color="#ddd"
                                        />
                                    </>
                                ))}
                                <div
                                    className={
                                        styles.Web_stories_button_container
                                    }
                                >
                                    <button
                                        className={styles.Web_Stories_add_btn}
                                        onClick={() => {
                                            setData((prevData) => ({
                                                ...prevData,
                                                storyImages: [
                                                    ...prevData.storyImages,
                                                    {
                                                        imageText: '',
                                                        imageUrl: '',
                                                        imageLink: '',
                                                    },
                                                ],
                                            }));
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )}

                {data?.focusKeyphrase !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>SEO Meta Tags</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <div className={styles.focus_title_container}>
                                    <p className={styles.content_label}>
                                        Focus Keyphrases
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ marginLeft: '10px' }}
                                        >
                                            <path
                                                d="M6.672 6.6C6.86008 6.06533 7.23132 5.61449 7.71996 5.32731C8.20861 5.04013 8.78312 4.93515 9.34174 5.03097C9.90037 5.12679 10.4071 5.41722 10.7721 5.85082C11.1371 6.28443 11.3368 6.83322 11.336 7.4C11.336 9 8.936 9.8 8.936 9.8M9 13H9.008M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                                stroke="#23201D"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </p>
                                    <InputField
                                        className={styles.input}
                                        type="text"
                                        value={data?.focusKeyphrase}
                                        name="focusKeyphrase"
                                        onChange={handleChangeData}
                                        placeholder="Enter Focus Keyphrase"
                                        style={{ textTransform: 'capitalize' }}
                                    />
                                    {/* <div className={styles.button_group}>
                                    <button className={styles.action_button}>
                                        Use AI
                                    </button>
                                    <button className={styles.action_button}>
                                        Insert Variable
                                    </button>
                                </div> */}
                                </div>

                                <div className={styles.seo_title_container}>
                                    <p className={styles.content_label}>
                                        Page Title
                                    </p>
                                    <InputField
                                        className={styles.input}
                                        type="text"
                                        value={data?.metaSiteName}
                                        name="metaSiteName"
                                        onChange={handleChangeData}
                                        placeholder="Enter Page Title"
                                    />
                                </div>

                                <div className={styles.seo_title_container}>
                                    <p className={styles.content_label}>
                                        SEO Title
                                    </p>
                                    <InputField
                                        className={styles.input}
                                        type="text"
                                        value={data?.metaTitle}
                                        name="metaTitle"
                                        onChange={handleChangeData}
                                        placeholder="Enter Meta Title"
                                    />
                                    <span
                                        className={
                                            styles.icon_name_info_container
                                        }
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="#2C2520"
                                                stroke-opacity="0.7"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <span
                                            className={
                                                styles.icon_name_info_example
                                            }
                                        >
                                            Leave blank to use the default.
                                        </span>
                                    </span>
                                </div>

                                <div className={styles.seo_title_container}>
                                    <p className={styles.content_label}>
                                        Meta Description
                                    </p>
                                    <textarea
                                        className={styles.input}
                                        type="text"
                                        value={data?.metaDescription}
                                        name="metaDescription"
                                        onChange={handleChangeData}
                                        placeholder="Enter Meta Description"
                                        style={{
                                            borderRadius: '10px',
                                            resize: 'vertical',
                                            minHeight: '100px',
                                        }}
                                        rows={5}
                                    />
                                    <span
                                        className={
                                            styles.icon_name_info_container
                                        }
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="#2C2520"
                                                stroke-opacity="0.7"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <a
                                            href={
                                                'https://developers.google.com/search/docs/appearance/title-link'
                                            }
                                            target={'_blank'}
                                        >
                                            <span
                                                className={
                                                    styles.icon_name_info
                                                }
                                            >
                                                Learn More
                                            </span>
                                        </a>
                                    </span>
                                </div>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}

                {/* Additional Settings */}
                {/* <>
                    <Accordion className={styles.accordion_container}>
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>Additional Settings</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <p className={styles.content_label}>Images</p>
                                <div>
                                    <FilePondSingle
                                        image={data?.extraDetails?.image}
                                        setImage={(image) =>
                                            setData({
                                                ...data,
                                                extraDetails: {
                                                    ...data.extra,
                                                    image: image,
                                                },
                                            })
                                        }
                                    />
                                </div>
                                <p className={styles.content_label}>
                                    Custom Link
                                </p>
                                <div className={styles.permalink}>
                                    <input
                                        type="text"
                                        value={data?.extraDetails?.link}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                extraDetails: {
                                                    ...data?.extra,
                                                    link: e.target.value,
                                                },
                                            })
                                        }
                                        placeholder="Enter Custom Link"
                                    />
                                    <span className={styles.edit_icon}>
                                        <i className="fas fa-edit"></i>
                                    </span>
                                </div>

                                <p className={styles.content_label}>Icon</p>
                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div style={{ width: '45%' }}>
                                            <select
                                                style={{
                                                    borderRadius: '9999px',
                                                    padding: '15px 16px',
                                                    border: '1px solid #ccc',
                                                    fontSize: '16px',
                                                    appearance: 'none',
                                                    background: 'white',
                                                    fontFamily: 'inherit',
                                                    outline: 'none',
                                                    width: '100%',
                                                }}
                                            >
                                                <option>MUI Icons</option>
                                            </select>
                                        </div>
                                        <div style={{ width: '45%' }}>
                                            <InputField
                                                className={styles.input}
                                                type="text"
                                                value={data?.extraDetails?.icon}
                                                placeholder="Enter Icon name"
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        extraDetails: {
                                                            ...data?.extra,
                                                            icon: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            />
                                        </div>
                                        <div style={{ width: '5%' }}>
                                            <span
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {data?.extraDetails?.icon && (
                                                    <Icon>
                                                        {
                                                            data?.extraDetails
                                                                ?.icon
                                                        }
                                                    </Icon>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span
                                            className={
                                                styles.icon_name_info_container
                                            }
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                    stroke="#2C2520"
                                                    stroke-opacity="0.7"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <span
                                                className={
                                                    styles.icon_name_info
                                                }
                                            >
                                                Enter icon name from the list.
                                            </span>
                                            <span
                                                className={
                                                    styles.icon_name_info_example
                                                }
                                                style={{
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Examples:{' '}
                                                <u
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            extraDetails: {
                                                                ...data?.extraDetails,
                                                                icon: 'star',
                                                            },
                                                        })
                                                    }
                                                >
                                                    star
                                                </u>
                                                ,{' '}
                                                <u
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            extraDetails: {
                                                                ...data?.extraDetails,
                                                                icon: 'edit',
                                                            },
                                                        })
                                                    }
                                                >
                                                    edit
                                                </u>
                                                ,{' '}
                                                <u
                                                    onClick={() =>
                                                        setData({
                                                            ...data,
                                                            extraDetails: {
                                                                ...data?.extraDetails,
                                                                icon: 'code',
                                                            },
                                                        })
                                                    }
                                                >
                                                    code
                                                </u>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <p className={styles.content_label}>
                                    Custom Size
                                </p>
                                <div className={styles.tab_container}>
                                    {['', '2x1', '1x2', '2x2'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() =>
                                                setData({
                                                    ...data,
                                                    extraDetails: {
                                                        ...data?.extraDetails,
                                                        size: size,
                                                    },
                                                })
                                            }
                                            className={
                                                data?.extraDetails?.size ===
                                                size
                                                    ? styles.tab_button_active
                                                    : styles.tab_button
                                            }
                                        >
                                            {size || 'None'}
                                        </button>
                                    ))}
                                </div>

                                <p className={styles.content_label}>
                                    Background Color
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        borderRadius: '12px',
                                        padding: '8px 12px',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '50px',
                                            borderRadius: '8px',
                                            backgroundColor:
                                                data?.extraDetails?.bgColor ||
                                                'transparent',
                                            border: data?.extraDetails?.bgColor
                                                ? 'none'
                                                : '1px dashed #ccc',
                                        }}
                                    ></div>

                                    <InputField
                                        className={styles.input}
                                        type="text"
                                        value={
                                            data?.extraDetails?.bgColor || ''
                                        }
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                extraDetails: {
                                                    ...data?.extraDetails,
                                                    bgColor: e.target.value,
                                                },
                                            })
                                        }
                                        placeholder="Transparent"
                                    />
                                </div>

                                <p className={styles.content_label}>
                                    Text Color
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        // border: '1px solid #DADADA',
                                        borderRadius: '12px',
                                        padding: '8px 12px',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '50px',
                                            borderRadius: '8px',
                                            backgroundColor:
                                                data?.extraDetails?.textColor ||
                                                'transparent',
                                            border: data?.extraDetails
                                                ?.textColor
                                                ? 'none'
                                                : '1px dashed #ccc',
                                        }}
                                    ></div>
                                    <InputField
                                        className={styles.input}
                                        type="text"
                                        value={data?.extraDetails?.textColor}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                extraDetails: {
                                                    ...data?.extraDetails,
                                                    textColor: e.target.value,
                                                },
                                            })
                                        }
                                        placeholder="Transparent"
                                    />
                                </div>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </> */}

                {data?.isTOP !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>Disable TOP Table Of Contents</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <div className={styles.focus_title_container}>
                                    <div style={{ marginTop: '10px' }}>
                                        <ToggleSwitch
                                            label="Disable"
                                            isChecked={data?.isTOP}
                                            onToggle={() =>
                                                setData({
                                                    ...data,
                                                    isTOP: !data?.isTOP,
                                                })
                                            }
                                            onColor={primaryColor || '#000'}
                                            offColor="#F3F3F3"
                                        />
                                    </div>
                                </div>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>

            <div className={styles.right_content}>
                <Accordion
                    defaultExpanded
                    className={styles.accordion_container}
                >
                    <AccordionSummary
                        expandIcon={
                            <ArrowDropDownIcon
                                color="disabled"
                                sx={{ fontSize: '2rem' }}
                            />
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={styles.additional_header}
                    >
                        <Typography component="div" variant="div">
                            <span>Publish</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={styles.content_wrappper}>
                            <div style={{ marginBottom: '20px' }}>
                                <div className={styles.publish_cell_container}>
                                    <div className={styles.publish_cell}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.75 3.23578V6.85C13.75 7.34005 13.75 7.58507 13.8454 7.77224C13.9293 7.93688 14.0631 8.07074 14.2278 8.15463C14.4149 8.25 14.66 8.25 15.15 8.25H18.7642M19 9.9897V16.3C19 17.7701 19 18.5052 18.7139 19.0667C18.4622 19.5606 18.0607 19.9622 17.5667 20.2139C17.0052 20.5 16.2701 20.5 14.8 20.5H9.2C7.72986 20.5 6.99479 20.5 6.43327 20.2139C5.93935 19.9622 5.53778 19.5606 5.28611 19.0667C5 18.5052 5 17.7701 5 16.3V7.2C5 5.72986 5 4.99479 5.28611 4.43327C5.53778 3.93935 5.93935 3.53778 6.43327 3.28611C6.99479 3 7.72986 3 9.2 3H12.0103C12.6524 3 12.9734 3 13.2755 3.07253C13.5433 3.13683 13.7994 3.24289 14.0342 3.38682C14.2992 3.54915 14.5262 3.77615 14.9802 4.23015L17.7698 7.01985C18.2238 7.47385 18.4508 7.70085 18.6132 7.96575C18.7571 8.20062 18.8632 8.45667 18.9275 8.72452C19 9.02662 19 9.34765 19 9.9897Z"
                                                stroke="#23201D"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <span>
                                            Status :{' '}
                                            {!editStatus && (
                                                <span
                                                    className={styles.boldValue}
                                                >
                                                    {statusName}
                                                </span>
                                            )}
                                        </span>
                                    </div>

                                    {!editStatus && (
                                        <span
                                            className={styles.publish_cell_edit}
                                            onClick={() => {
                                                setEditStatus(true);
                                                setStatusInput(data?.status);
                                            }}
                                        >
                                            Edit
                                        </span>
                                    )}
                                </div>
                                {editStatus && (
                                    <div
                                        className={
                                            styles.publish_cell_edit_container
                                        }
                                    >
                                        <select
                                            className={styles.input}
                                            value={statusInput}
                                            onChange={(e) =>
                                                setStatusInput(e.target.value)
                                            }
                                        >
                                            <option value={3}>Pending</option>(
                                            <option value={1}>Published</option>
                                            )<option value={2}>Draft</option>
                                        </select>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditStatus(false);
                                                setData({
                                                    ...data,
                                                    status: statusInput,
                                                });
                                            }}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                check_circle_outline
                                            </Icon>
                                        </span>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditStatus(false);
                                            }}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                cancel_outline
                                            </Icon>
                                        </span>
                                    </div>
                                )}

                                <div className={styles.publish_cell_container}>
                                    <div className={styles.publish_cell}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 10.1111H4M15.5556 3V6.55556M8.44444 3V6.55556M8.26667 20.7778H15.7333C17.2268 20.7778 17.9735 20.7778 18.544 20.4871C19.0457 20.2315 19.4537 19.8235 19.7094 19.3218C20 18.7513 20 18.0046 20 16.5111V9.04445C20 7.55097 20 6.80423 19.7094 6.2338C19.4537 5.73204 19.0457 5.32409 18.544 5.06843C17.9735 4.77778 17.2268 4.77778 15.7333 4.77778H8.26667C6.77319 4.77778 6.02646 4.77778 5.45603 5.06843C4.95426 5.32409 4.54631 5.73204 4.29065 6.2338C4 6.80423 4 7.55097 4 9.04444V16.5111C4 18.0046 4 18.7513 4.29065 19.3218C4.54631 19.8235 4.95426 20.2315 5.45603 20.4871C6.02646 20.7778 6.77319 20.7778 8.26667 20.7778Z"
                                                stroke="#23201D"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span>
                                            {data?.publishedOn > new Date()
                                                ? 'Scheduled at'
                                                : data?.id
                                                ? 'Published On'
                                                : 'Publish'}{' '}
                                            :{' '}
                                            {!editPublishedOn && (
                                                <span
                                                    className={styles.boldValue}
                                                >
                                                    {data?.publishedOn <
                                                        new Date() && !data?.id
                                                        ? 'Immediately'
                                                        : data?.publishedOn?.toDateString()}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    {!editPublishedOn && (
                                        <span
                                            className={styles.publish_cell_edit}
                                            onClick={() =>
                                                setEditPublishedOn(true)
                                            }
                                        >
                                            Edit
                                        </span>
                                    )}
                                </div>
                                {editPublishedOn && (
                                    <div
                                        className={
                                            styles.publish_cell_edit_container
                                        }
                                    >
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DateTimePicker
                                                label=""
                                                sx={{
                                                    width: '100%',
                                                }}
                                                value={dayJs(publishedOnInput)}
                                                onChange={(value) => {
                                                    setPublishedOnInput(value);
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditPublishedOn(false);
                                                setData({
                                                    ...data,
                                                    publishedOn: new Date(
                                                        publishedOnInput
                                                    ),
                                                });
                                            }}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                check_circle_outline
                                            </Icon>
                                        </span>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditPublishedOn(false);
                                            }}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                cancel_outline
                                            </Icon>
                                        </span>
                                    </div>
                                )}
                            </div>
                            <HorizontalBorder height="1px" color="#ddd" />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                className={styles.buttons}
                            >
                                <button
                                    className={styles.action_button}
                                    style={
                                        !data?.id
                                            ? {
                                                  opacity: 0.2,
                                              }
                                            : {}
                                    }
                                    disabled={!data?.id}
                                    onClick={() => setShowDeleteAlert(true)}
                                >
                                    Move To Trash
                                </button>
                                <button
                                    className={styles.preview_changes}
                                    onClick={() => handleSubmit()}
                                >
                                    {data?.id ? 'Update' : 'Publish'}
                                </button>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {data?.image !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Image</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <div>
                                    <FilePondSingle
                                        image={data?.image}
                                        setImage={(image) =>
                                            setData({
                                                ...data,
                                                image: image || '',
                                            })
                                        }
                                        isAlt={true}
                                        alt={data?.imageAlt || ''}
                                        setAlt={(alt) =>
                                            setData({ ...data, imageAlt: alt })
                                        }
                                        type={type}
                                    />
                                </div>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
                {data?.categories !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Categories</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <div className={styles.tab_container}>
                                    <button
                                        onClick={() => setCategoryTab('')}
                                        className={
                                            categoryTab === ''
                                                ? styles.tab_button_active
                                                : styles.tab_button
                                        }
                                    >
                                        All Categories
                                    </button>
                                    <button
                                        onClick={() => setCategoryTab('most')}
                                        className={
                                            categoryTab === 'most'
                                                ? styles.tab_button_active
                                                : styles.tab_button
                                        }
                                    >
                                        Most Used
                                    </button>
                                </div>
                                <div className={styles.category_container}>
                                    {categories?.map((category) => (
                                        <div
                                            key={category.Id}
                                            className={styles.category_item}
                                        >
                                            <Checkbox
                                                checked={data?.categories
                                                    ?.map((c) => c.id)
                                                    ?.includes(category.Id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setData({
                                                            ...data,
                                                            categories: [
                                                                ...data?.categories,
                                                                {
                                                                    id: category.Id,
                                                                    name: category.Name,
                                                                    slug: category.Slug,
                                                                },
                                                            ],
                                                        });
                                                    } else {
                                                        setData({
                                                            ...data,
                                                            categories:
                                                                data?.categories?.filter(
                                                                    (c) =>
                                                                        c.id !==
                                                                        category.Id
                                                                ),
                                                        });
                                                    }
                                                }}
                                            />
                                            <span>
                                                {category.Name}{' '}
                                                {/* {category.Count
                                                    ? ` (${category.Count})`
                                                    : ''} */}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <HorizontalBorder height="1px" color="#ddd" />
                                {newCategory ? (
                                    <div
                                        className={
                                            styles.publish_cell_edit_container
                                        }
                                    >
                                        <InputField
                                            className={styles.input}
                                            type={'text'}
                                            value={newCategoryInput}
                                            onChange={(e) =>
                                                setNewCategoryInput(
                                                    e.target.value
                                                )
                                            }
                                            placeholder={'Enter New Category'}
                                        />
                                        <span
                                            className={styles.edit_icon}
                                            onClick={handleCreateCategory}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                check_circle_outline
                                            </Icon>
                                        </span>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setNewCategory(false);
                                            }}
                                        >
                                            <Icon sx={{ color: '#000' }}>
                                                cancel_outline
                                            </Icon>
                                        </span>
                                    </div>
                                ) : (
                                    <div
                                        className={styles.category_new}
                                        onClick={() => {
                                            setNewCategory(true);
                                            setNewCategoryInput('');
                                        }}
                                    >
                                        <Icon>add</Icon>
                                        <span>Add New Category</span>
                                    </div>
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
                {data?.tags !== undefined && (
                    <Accordion
                        defaultExpanded
                        className={styles.accordion_container}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ArrowDropDownIcon
                                    color="disabled"
                                    sx={{ fontSize: '2rem' }}
                                />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className={styles.additional_header}
                        >
                            <Typography component="div" variant="div">
                                <span>{type} Tags</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <div
                                    className={
                                        styles.publish_cell_edit_container
                                    }
                                >
                                    <InputField
                                        className={styles.input}
                                        type={'text'}
                                        value={tagInput}
                                        onChange={(e) =>
                                            setTagInput(e.target.value)
                                        }
                                        placeholder={'Enter Tag'}
                                    />
                                    {/* <Autocomplete
                                    options={tags?.map((option) => ({
                                        id: option.Id,
                                        label: option.Name,
                                    }))}
                                    // getOptionLabel={(option) => option.name}
                                    onChange={(e, value) => {
                                        setTagInput(value);
                                    }}
                                    renderInput={(params) => (
                                        <InputField
                                            {...params}
                                            className={styles.input}
                                            placeholder="Enter Tag"
                                            // value={tagInput}
                                            // onChange={(e) =>
                                            //     setTagInput(e.target.value)
                                            // }
                                        />
                                    )}
                                /> */}

                                    <div className={styles.buttons}>
                                        <button
                                            className={styles.preview_changes}
                                            onClick={() =>
                                                handleTagsChange(tagInput)
                                            }
                                        >
                                            {'Add'}
                                        </button>
                                    </div>
                                </div>
                                <span
                                    className={styles.icon_name_info_container}
                                    style={{
                                        marginTop: 0,
                                        marginBottom: '10px',
                                    }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 12.8V10M10 7.2H10.007M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="#2C2520"
                                            stroke-opacity="0.7"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span
                                        className={
                                            styles.icon_name_info_example
                                        }
                                    >
                                        Separate tags with commas
                                    </span>
                                </span>
                                <div className={styles.tag_container}>
                                    {data?.tags?.map((tag) => (
                                        <div
                                            key={tag.Id}
                                            className={styles.tag_item}
                                        >
                                            <span>{tag.name}</span>
                                            <Icon
                                                sx={{
                                                    color: '#000',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => {
                                                    setData({
                                                        ...data,
                                                        tags: data?.tags?.filter(
                                                            (t) =>
                                                                t.name !==
                                                                tag.name
                                                        ),
                                                    });
                                                }}
                                            >
                                                cancel_outline
                                            </Icon>
                                        </div>
                                    ))}
                                </div>
                                <HorizontalBorder height="1px" color="#ddd" />
                                <div
                                    className={styles.tag_most}
                                    onClick={() => {
                                        setSuggestTag(!suggestTag);
                                    }}
                                >
                                    <span>Choose from the most used tags</span>
                                </div>
                                {suggestTag && (
                                    <div>
                                        {tags?.slice(0, 3)?.map((tag) => (
                                            <div
                                                key={tag.Id}
                                                className={styles.tag_link}
                                                onClick={() =>
                                                    handleTagsChange(tag?.Name)
                                                }
                                            >
                                                <span>{tag?.Name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
            {showDeleteAlert && (
                <AlertDialog
                    modal={showDeleteAlert}
                    toggle={() => setShowDeleteAlert(!showDeleteAlert)}
                    title={`Delete ${type}`}
                    description={`Are you want to sure delete the ${type}?`}
                    confirmFunc={() => handleDelete()}
                />
            )}
        </div>
    );
};

export default Edit;
