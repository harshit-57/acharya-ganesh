import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { CardSmall } from './components/stories-card/CardSmall';

import ImgBlogHeader from '../../assets/webstory_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
import SEO from '../../Seo';
import Loader from '../../components/loader/Loader';
const STORIES_PER_PAGE = 9;
const WebStoriesList = () => {
    const navigate = useNavigate();
    const [stories, setStories] = useState([]);
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [webstoriesTags, setWebStoriesTags] = useState([]);
    useEffect(() => {
        fetchStories();
        fetchWebStoriesTags();
    }, [currentPage]);

    const fetchStories = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getWebStories({
                status: 1,
                active: 1,
                page: currentPage,
                pageSize: STORIES_PER_PAGE,
            });
            setStories(response?.data?.data);
            const totalPage = Math.round(
                (response.data?.total || 1) / STORIES_PER_PAGE
            );
            setPageCount(totalPage);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };
    const fetchWebStoriesTags = async () => {
        try {
            const response = await APIHelper.getWebStoryTags({
                status: 1,
            });
            setWebStoriesTags(response.data);
        } catch (e) {
        } finally {
        }
    };

    const keywords = webstoriesTags.map((e) => e.Name).join(', ');
    const description =
        'Explore our interactive web stories on astrology, numerology, kundali matching, and daily horoscopes. Engaging and informative content for your spiritual journey.';
    const title = 'Acharya Ganesh Astrology Academy | Web Stories';
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
                        <h3>Web Stories</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={'>'} />
                            </span>
                            <span>Web Stories</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                {loading && <Loader />}
                {!loading &&
                    Array.isArray(stories) &&
                    stories.map((blog, index) => (
                        <CardSmall
                            key={blog?.Id || index}
                            blog={blog}
                            onClick={() =>
                                navigate(`/web-stories/${blog?.Slug}`)
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

export default WebStoriesList;
