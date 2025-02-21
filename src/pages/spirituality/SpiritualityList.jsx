import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { SCardSmall } from './components/card/SCardSmall';
import { useEffect, useState } from 'react';

import ImgBlogHeader from '../../assets/spirituality_page_banner.jpg';
import { Spacer } from '../../components/spacer/Spacer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
const BLOG_PER_PAGE = 9;
const SpiritualityList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, [currentPage, category]);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getSpiritualities({
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
                        <h3>Spirituality</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>{category?.toUpperCase()} Spirituality</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    Array.isArray(blogs) &&
                    blogs.map((blog, index) => (
                        <SCardSmall
                            key={blog?.Id || index}
                            blog={blog}
                            onClick={() =>
                                navigate(
                                    `/spirituality/${
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

export default SpiritualityList;
