import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { BlogCardSmall } from './components/blog-card/BlogCardSmall';

import ImgBlogHeader from '../../assets/blog_main_bg.png';
import ICFilter from '../../assets/filter-lines.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
import SEO from '../../Seo';
const BLOG_PER_PAGE = 9;
const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [blogstags, setBlogsTags] = useState([]);
    const { category } = useParams();
    const [blogCategories, setBlogCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showFilterDropDown, setShowFilterDropDown] = useState({
        category: false,
    });

    useEffect(() => {
        fetchBlogs();
        fetchBlogsTags();
        fetchBlogCategories();

        return () => {
            setShowFilterDropDown(false);
        };
    }, [currentPage, category]);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getBlogs({
                page: currentPage,
                pageSize: BLOG_PER_PAGE,
                status: 1,
                active: 1,
                category: category || undefined,
            });
            setBlogs(response.data?.data);
            const totalPage = Math.round(
                (response.data?.total || 1) / BLOG_PER_PAGE
            );
            setPageCount(totalPage);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };
    const fetchBlogsTags = async () => {
        try {
            const response = await APIHelper.getBlogTags({
                status: 1,
            });
            setBlogsTags(response.data);
        } catch (e) {
        } finally {
        }
    };
    const fetchBlogCategories = async () => {
        try {
            const response = await APIHelper.getBlogCategories({
                status: 1,
                active: 1,
            });
            setBlogCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const keywords = blogstags.map((e) => e.Name).join(', ');
    const description =
        'Browse our latest blog posts on astrology, numerology, kundali matching, and daily horoscopes. Stay updated with expert advice and spiritual guidance.';
    const title = 'Acharya Ganesh - Blog';
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} title={title} />

            <div
                style={{ backgroundImage: `url(${ImgBlogHeader})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Blog</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={'>'} />
                            </span>{' '}
                            <span>{category?.toUpperCase()} Blog</span>
                        </p>
                    </div>
                </div>
            </div>

            {!category && (
                <div className={css.filter_container}>
                    <div
                        className={css.filter_item_wrapper}
                        style={{ display: 'flex', gap: '10px' }}
                    >
                        <div
                            onClick={() =>
                                setShowFilterDropDown({
                                    sort: false,
                                    category: !showFilterDropDown?.category,
                                })
                            }
                        >
                            <img src={ICFilter} alt={'Filter'} />
                            <p>{'Select Category'}</p>
                            {showFilterDropDown?.category && (
                                <div className={css.filter_dropdown}>
                                    <p onClick={() => {}}>Select Category</p>
                                    {blogCategories?.map((c) => (
                                        <p
                                            onClick={() =>
                                                navigate(`/blog/${c?.Slug}`)
                                            }
                                        >
                                            {c?.Name}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className={css.list_container}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    Array.isArray(blogs) &&
                    blogs.map((blog, index) => (
                        <BlogCardSmall
                            key={blog?.Id || index}
                            blog={blog}
                            onClick={() =>
                                navigate(
                                    `/${
                                        blog?.Categories?.length
                                            ? blog?.Categories[0]?.CategorySlug
                                            : '-'
                                    }/${blog?.Slug}`
                                )
                            }
                            className={css.blog_card}
                        />
                    ))}
            </div>
            {pageCount > 1 && (
                <div className={css.page_number_container}>
                    <p
                        style={{
                            opacity: currentPage <= 1 ? '0.5' : '1',
                        }}
                        onClick={() => {
                            if (currentPage > 1)
                                setCurrentPage(currentPage - 1);
                        }}
                    >
                        Prev
                    </p>
                    <p
                        style={{
                            backgroundColor:
                                currentPage === 1
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </p>

                    {currentPage > 4 && <p>...</p>}

                    {[...Array(5)].map((_, index) => {
                        const page = currentPage - 2 + index;
                        if (page > 1 && page < pageCount) {
                            return (
                                <p
                                    key={page}
                                    style={{
                                        backgroundColor:
                                            page === currentPage
                                                ? 'var(--color-primary)'
                                                : 'transparent',
                                    }}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </p>
                            );
                        }
                        return null;
                    })}

                    {currentPage < pageCount - 3 && <p>...</p>}

                    <p
                        style={{
                            backgroundColor:
                                currentPage === pageCount
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(pageCount)}
                    >
                        {pageCount}
                    </p>
                    <p
                        style={{
                            opacity: currentPage >= pageCount ? '0.5' : '1',
                        }}
                        onClick={() => {
                            if (currentPage < pageCount)
                                setCurrentPage(currentPage + 1);
                        }}
                    >
                        Next
                    </p>
                </div>
            )}
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default BlogList;
