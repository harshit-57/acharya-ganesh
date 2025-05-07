import css from './style.module.css';
import { PageContainer } from '../page-container/PageContainer';
import { ArticleCard } from './components/ArticleCard';
import { useState, useEffect } from 'react';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import useBreakpoint from 'use-breakpoint';
import { MatxLoading } from '../../admin/components';
import useApp from '../../hook/useApp';

const PER_FRAME_ARTICLE_COUNT_ULTRA_WIDE = 5;
const PER_FRAME_ARTICLE_COUNT_LARGE_DESKTOP = 4;
const PER_FRAME_ARTICLE_COUNT_DESKTOP = 3;
const PER_FRAME_ARTICLE_COUNT_TABLET = 2;
const PER_FRAME_ARTICLE_COUNT_MOBILE = 1;
const BREAKPOINTS = {
    mobile: 0,
    tablet: 768,
    desktop: 1255,
    largeDesktop: 1600,
    ultraWide: 1945,
};

const getArticleCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_ARTICLE_COUNT_MOBILE;
        case 'tablet':
            return PER_FRAME_ARTICLE_COUNT_TABLET;
        case 'desktop':
            return PER_FRAME_ARTICLE_COUNT_DESKTOP;
        case 'largeDesktop':
            return PER_FRAME_ARTICLE_COUNT_LARGE_DESKTOP;
        case 'ultraWide':
            return PER_FRAME_ARTICLE_COUNT_ULTRA_WIDE;
        default:
            return PER_FRAME_ARTICLE_COUNT_ULTRA_WIDE;
    }
};

const Blog = ({ breakpoints }) => {
    const navigate = useNavigate();
    const {
        theme: { Images },
    } = useApp();
    const { breakpoint } = useBreakpoint(breakpoints || BREAKPOINTS, 'desktop');
    const [articleList, setArticleList] = useState([]);
    const [visibleArticles, setVisibleArticles] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getBlogs({
                page: 1,
                pageSize: 9,
                status: 1,
                active: 1,
            });
            setLoading(false);
            setArticleList(response.data?.data);
            setCurrentSlideOffset(0);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (!articleList.length) return;
        setVisibleArticles(
            articleList.slice(
                currentSlideOffset * getArticleCountPerFrame(breakpoint),
                currentSlideOffset * getArticleCountPerFrame(breakpoint) +
                    getArticleCountPerFrame(breakpoint)
            )
        );
    }, [articleList, currentSlideOffset, breakpoint]);

    useEffect(() => {
        const totalSlides = Math.ceil(
            articleList.length / getArticleCountPerFrame(breakpoint)
        );

        const interval = setInterval(() => {
            setCurrentSlideOffset((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [articleList, breakpoint]);

    const onIndicatorClick = (index) => {
        if (
            index > -1 &&
            index <
                Math.ceil(
                    articleList.length / getArticleCountPerFrame(breakpoint)
                )
        ) {
            setCurrentSlideOffset(index);
        }
    };

    const onPrev = () => {
        if (currentSlideOffset > 0) {
            setCurrentSlideOffset(currentSlideOffset - 1);
        } else {
            setCurrentSlideOffset(
                Math.ceil(
                    articleList.length / getArticleCountPerFrame(breakpoint)
                ) - 1
            );
        }
    };

    const onNext = () => {
        if (
            currentSlideOffset <
            Math.ceil(
                articleList.length / getArticleCountPerFrame(breakpoint)
            ) -
                1
        ) {
            setCurrentSlideOffset(currentSlideOffset + 1);
        } else {
            setCurrentSlideOffset(0);
        }
    };

    return (
        <PageContainer
            style={{
                backgroundImage: `url(${Images.ImgSectionBgAlt})`,
            }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                Discover the Cosmos on Our Blog
            </h2>
            {!loading ? (
                <>
                    <div className={css.article_slide_container}>
                        <button onClick={onPrev} className={css.prev_button}>
                            <img src={Images.LeftArrow} alt="<" />
                        </button>
                        <button onClick={onNext} className={css.next_button}>
                            <img src={Images.LeftArrow} alt=">" />
                        </button>

                        <div
                            className={css.article_slide_wrapper}
                            // style={{
                            //     gridTemplateColumns:
                            //         getArticleCountPerFrame(breakpoint) >= 4
                            //             ? `repeat(auto-fill, minmax(300px, 1fr))`
                            //             : `repeat(auto-fill, minmax(340px, 1fr))`,
                            // }}
                        >
                            {Array.isArray(visibleArticles) &&
                                visibleArticles.map((article, index) => (
                                    <ArticleCard
                                        key={index}
                                        article={article}
                                        onClick={() =>
                                            navigate(
                                                `/${
                                                    article?.Categories?.length
                                                        ? article?.Categories[0]
                                                              ?.CategorySlug
                                                        : '-'
                                                }/${article?.Slug}`
                                            )
                                        }
                                    />
                                ))}
                        </div>
                    </div>
                    <IndicatorContainer
                        currentIndex={currentSlideOffset}
                        count={Math.ceil(
                            articleList.length /
                                getArticleCountPerFrame(breakpoint)
                        )}
                        onIndicatorClick={onIndicatorClick}
                    />
                </>
            ) : (
                <MatxLoading />
            )}
        </PageContainer>
    );
};

export default Blog;
