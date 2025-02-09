import css from './style.module.css';
import { PageContainer } from '../page-container/PageContainer';
import { ArticleCard } from './components/ArticleCard';
import ImgSectionBg from '../../assets/blog_section_bg.png';
import { useState, useEffect } from 'react';
import { APIHelper } from '../../util/APIHelper';
import { useNavigate } from 'react-router-dom';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import LeftArrow from '../../assets/left-arrow.png';
import useBreakpoint from 'use-breakpoint';

const PER_FRAME_ARTICLE_COUNT_DESKTOP = 3;
const PER_FRAME_ARTICLE_COUNT_TABLET = 2;
const PER_FRAME_ARTICLE_COUNT_MOBILE = 1;
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const getArticleCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_ARTICLE_COUNT_MOBILE;
        case 'tablet':
            return PER_FRAME_ARTICLE_COUNT_TABLET;
        case 'desktop':
            return PER_FRAME_ARTICLE_COUNT_DESKTOP;
        default:
            return PER_FRAME_ARTICLE_COUNT_DESKTOP;
    }
};

const Blog = () => {
    const navigate = useNavigate();
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const [articleList, setArticleList] = useState([]);
    const [visibleArticles, setVisibleArticles] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(0);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            const response = await APIHelper.getBlogs({ page: 1, pageSize: 9 });
            setArticleList(response.data?.data);
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
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                Discover the Cosmos on Our Blog
            </h2>
            <div className={css.article_slide_container}>
                <button
                    onClick={onPrev}
                    className={css.prev_button}
                    disabled={currentSlideOffset === 0}
                    style={{ opacity: currentSlideOffset === 0 ? 0.5 : 1 }}
                >
                    <img src={LeftArrow} alt="Previous" />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt="Next" />
                </button>
                <div className={css.article_slide_wrapper}>
                    {Array.isArray(visibleArticles) &&
                        visibleArticles.map((article, index) => (
                            <ArticleCard
                                key={index}
                                article={article}
                                onClick={() =>
                                    navigate(`/blog/detail/${article?.Slug}`)
                                }
                            />
                        ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentSlideOffset}
                count={Math.ceil(
                    articleList.length / getArticleCountPerFrame(breakpoint)
                )}
                onIndicatorClick={onIndicatorClick}
            />
        </PageContainer>
    );
};

export default Blog;
