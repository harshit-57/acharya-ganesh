import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { BlogCardSmall } from './components/blog-card/BlogCardSmall';

import ImgBlogHeader from '../../assets/blog_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
const BLOG_PER_PAGE = 21;
const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState([]);
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getBlogs();
            setBlogs(response.data);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const b = blogs.slice(
            (currentPage - 1) * BLOG_PER_PAGE,
            currentPage * BLOG_PER_PAGE
        );
        setVisibleBlogs(b);
    }, [currentPage, blogs]);

    useEffect(() => {
        const c = Math.round(blogs.length / BLOG_PER_PAGE);
        setPageCount(c);
    }, [blogs]);

    return (
        <PageContainer className={css.container}>
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
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>{category.toUpperCase()} Blog</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    Array.isArray(visibleBlogs) &&
                    visibleBlogs.map((blog, index) => (
                        <BlogCardSmall
                            key={blog?.Id || index}
                            blog={blog}
                            onClick={() =>
                                navigate(blog?.Slug, { state: blog })
                            }
                            className={css.blog_card}
                        />
                    ))}
            </div>
            <div className={css.page_number_container}>
                {[...Array(3)].map((number, index) => (
                    <p
                        style={{
                            backgroundColor:
                                index + 1 == currentPage
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </p>
                ))}
                <p>...</p>
                <p
                    style={{
                        backgroundColor:
                            pageCount == currentPage
                                ? 'var(--color-primary)'
                                : 'transparent',
                    }}
                    onClick={() => setCurrentPage(pageCount)}
                >
                    {pageCount}
                </p>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default BlogList;
