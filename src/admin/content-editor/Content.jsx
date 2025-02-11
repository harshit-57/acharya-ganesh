import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './style.module.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ToggleSwitch from '../../components/toggle/ToggleSwitch';
import { InputField } from '../../components/input-field/InputField';
import useSettings from '../hooks/useSettings';
import Editor from './component/editor/Editor';
import { useLocation, useParams } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Icon,
    Typography,
    useTheme,
} from '@mui/material';
import { MatxLoading } from '../components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Spacer } from '../../components/spacer/Spacer';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayJs from 'dayjs';

registerPlugin(FilePondPluginImagePreview);

const Edit = () => {
    const { updateSettings } = useSettings();
    const theme = useTheme();
    const primaryColor = theme?.palette?.primary?.main;
    const { state } = useLocation();
    const { type, slug } = useParams();

    const initalData = {
        title: '',
        description: '',
        slug: '',
        image: '',
        focusKeyphrase: '',
        metaTitle: '',
        metaSiteName: '',
        metaDescription: '',
        isShortDescription: false,
        shortDescription: '',
        isTOP: false,
        status: 1,
        publishedOn: new Date(),
        categories: [],
        tags: [],
        isProduct: type === 'course' ? true : false,
        productUrl: '',
        buyText: '',
        regularPrice: '',
        salePrice: '',
        productImages: [],
        extraDetails: {
            images: [],
            link: '',
            icon: '',
            size: '',
            textColor: '',
            bgColor: '',
        },
    };

    const [data, setData] = useState(initalData);
    const [isLoading, setIsLoading] = useState(false);
    const [isTableContent, setIsTableContent] = useState(false);
    const [slugInput, setSlugInput] = useState('');
    const [editSlug, setEditSlug] = useState(false);
    const [statusInput, setStatusInput] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    const [publishedOnInput, setPublishedOnInput] = useState(new Date());
    const [editPublishedOn, setEditPublishedOn] = useState(false);

    const handleChangeData = (event) => {
        const { name, value } = event.target;
        if (name) setData({ ...data, [name]: value });
    };

    useEffect(() => {
        setTimeout(() => {
            updateSettings({
                layout1Settings: { leftSidebar: { mode: 'compact' } },
            });
        }, 100);

        if (slug != 'new' && state?.Id) setIsLoading(true);
        switch (type) {
            case 'course':
                (async () => {
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
                        focusKeyphrase:
                            response?.Focus_Keyphrase ||
                            response?.Slug?.split('-')?.join(' '),
                        metaTitle: response?.Meta_Title,
                        metaSiteName: response?.Meta_SiteName,
                        metaDescription: response?.Meta_Desc,
                        isShortDescription: true,
                        shortDescription: response?.ShortDescription,
                        extraDetails: {
                            images: response?.Extra_Images || [],
                            link: response?.Extra_Link || '',
                            icon: response?.Extra_Icon || '',
                            size: response?.Extra_Size || '',
                            textColor: response?.Extra_Text_Color || '',
                            bgColor: response?.Extra_Bg_Color || '',
                        },
                        isTOP: response?.isTOP || false,
                        status: response?.Status,
                        publishedOn: response?.PublishedOn
                            ? new Date(response?.PublishedOn)
                            : new Date(),

                        categories: response?.Categories?.map((item) => ({
                            id: item?.CategoryId,
                            name: item?.CategoryName,
                        })),
                        tags: response?.Tags?.map((item) => ({
                            id: item?.TagId,
                            name: item?.TagName,
                        })),

                        // For Product/Courses
                        isProduct: true,
                        productUrl: response?.ProductURL,
                        buyText: response?.Buy_Text,
                        regularPrice: Math.ceil(response?.Regular_Price || 0),
                        salePrice: Math.ceil(response?.Sale_Price || 0),
                        productImages: response?.Images,
                    });
                    setIsLoading(false);
                })();
                break;

            default:
                break;
        }
    }, []);

    const baseLink =
        type === 'course'
            ? `${window?.location?.origin}/courses`
            : type === 'blog'
            ? `${window?.location?.origin}/blog/detail`
            : type === 'spirtuality'
            ? `${window?.location?.origin}/spirtuality/detail`
            : type === 'story'
            ? `${window?.location?.origin}/web-stories`
            : `${window?.location?.origin}/${type}`;

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
                                <Icon>check_circle</Icon>
                            </span>
                            <Spacer horizontal={'10px'} />
                            <span
                                className={styles.edit_icon}
                                onClick={() => {
                                    setEditSlug(false);
                                }}
                            >
                                <Icon>cancel</Icon>
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
                <div className={styles.buttons}>
                    <button className={styles.save_drafts}>Save Drafts</button>
                    <button className={styles.preview_changes}>
                        Preview Changes
                    </button>
                </div>
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
                        <span>
                            {type == 'course' ? 'Product' : type} Description
                        </span>
                    </div>
                    <Editor
                        content={data?.description}
                        setContent={(html) =>
                            setData({ ...data, description: html })
                        }
                    />
                </div>

                {data?.isProduct && (
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
                                <span>Product data</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.content_wrappper}>
                                <p className={styles.content_label}>
                                    Product URL
                                </p>
                                <InputField
                                    className={styles.input}
                                    type="text"
                                    value={data?.productUrl}
                                    name="productUrl"
                                    onChange={handleChangeData}
                                    placeholder="Enter Product URL"
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
                                <span>
                                    {type == 'course' ? 'Product' : type} Short
                                    Description
                                </span>
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
                                    <a
                                        href={
                                            'https://developers.google.com/search/docs/appearance/title-link'
                                        }
                                        target={'_blank'}
                                    >
                                        <span className={styles.icon_name_info}>
                                            Learn More
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>

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
                                <FilePond
                                    files={data?.extraDetails?.images}
                                    onupdatefiles={(fileItems) =>
                                        setData({
                                            ...data,
                                            extraDetails: {
                                                ...data.extra,
                                                images: fileItems.map(
                                                    (item) => item.file
                                                ),
                                            },
                                        })
                                    }
                                    allowMultiple={true}
                                    maxFiles={1}
                                    name="files"
                                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                />
                            </div>
                            <p className={styles.content_label}>Custom Link</p>
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
                                            <option>Font Awesome Solid</option>
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
                                                        icon: e.target.value,
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
                                                    {data?.extraDetails?.icon}
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
                                        <span className={styles.icon_name_info}>
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

                            <p className={styles.content_label}>Custom Size</p>
                            <div className={styles.costomize_container}>
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
                                        style={{
                                            padding: '10px 20px',
                                            border: 'none',
                                            borderRadius: '12px',
                                            backgroundColor:
                                                data?.extraDetails?.size ===
                                                size
                                                    ? 'white'
                                                    : 'transparent',
                                            boxShadow:
                                                data?.extraDetails?.size ===
                                                size
                                                    ? '0 2px 6px rgba(0, 0, 0, 0.1)'
                                                    : 'none',
                                            fontWeight:
                                                data?.extraDetails?.size ===
                                                size
                                                    ? 'bold'
                                                    : 'normal',
                                            color:
                                                data?.extraDetails?.size ===
                                                size
                                                    ? '#000'
                                                    : '#AAA',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            width: '100%',
                                        }}
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
                                    value={data?.extraDetails?.bgColor || ''}
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

                            <p className={styles.content_label}>Text Color</p>
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
                                        border: data?.extraDetails?.textColor
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
                            <div>
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
                                            <option value={''}>Pending</option>
                                            {data?.id && (
                                                <option value={1}>
                                                    Published
                                                </option>
                                            )}
                                            <option value={2}>Draft</option>
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
                                            <Icon>check_circle</Icon>
                                        </span>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditStatus(false);
                                            }}
                                        >
                                            <Icon>cancel</Icon>
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
                                        style={{
                                            marginTop: '10px',
                                        }}
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
                                            <Icon>check_circle</Icon>
                                        </span>
                                        <span
                                            className={styles.edit_icon}
                                            onClick={() => {
                                                setEditPublishedOn(false);
                                            }}
                                        >
                                            <Icon>cancel</Icon>
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                className={styles.buttons}
                            >
                                <button className={styles.action_button}>
                                    Move To Trash
                                </button>
                                <button className={styles.preview_changes}>
                                    {data?.id ? 'Update' : 'Publish'}
                                </button>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Edit;
