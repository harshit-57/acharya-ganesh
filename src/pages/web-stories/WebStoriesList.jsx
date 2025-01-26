import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { CardSmall } from './components/stories-card/CardSmall';

import ImgBlogHeader from '../../assets/blog_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
const STORIES_PER_PAGE = 9;
import list from '../../data/web-stories-list.js';
const WebStoriesList = () => {
    const navigate = useNavigate();
    const [stories, setStories] = useState([]);
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStories();
    }, [currentPage]);

    const fetchStories = async () => {
        try {
            setLoading(true);
            // const response = await APIHelper.getWebStories({
            //     page: currentPage,
            //     pageSize: STORIES_PER_PAGE,
            // });
            setStories(list);
            // const totalPage = Math.round(
            //     (response.data?.total || 1) / STORIES_PER_PAGE
            // );
            // setPageCount(totalPage);
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
                        <h3>Web Stories</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    Array.isArray(stories) &&
                    stories.map((blog, index) => (
                        <CardSmall
                            key={blog?.Id || index}
                            blog={blog}
                            onClick={() =>
                                navigate(
                                    category
                                        ? blog?.Slug
                                        : `${blog?.CategorySlug}/${blog?.Slug}`
                                )
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

export default WebStoriesList;
