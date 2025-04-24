import css from './style.module.css';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Images } from '../../util/constants';
import { HorizontalBorder } from '../../components/spacer/Spacer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
import { TitleInformation } from './components/title-info/TitleInformation';
import { Footer } from '../../components/footer/Footer';
import { TableOfContent } from './components/table-of-content/TableOfContent';
import { ArticleSidebar } from './components/sidebar/ArticleSidebar';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import SEO from '../../Seo';

const Article = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        if (searchParams?.get('preview')) {
            setArticle(state?.data);
            return;
        }
        getArticle();
    }, [slug]);
    const getArticle = async () => {
        try {
            const response = await APIHelper.getBlogs({
                slug: slug,
                status: 1,
                active: 1,
            });
            setArticle(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };
    const getArticleTags = async () => {
        try {
            const response = await APIHelper.getBlogTags({
                status: 1,
            });
            setBlogsTags(response.data);
        } catch (e) {
        } finally {
        }
    };
    const keywords = article?.Tags?.map((e) => e.TagName).join(', ');
    const description =
        'Explore in-depth articles on astrology, numerology, kundali matching, and daily horoscopes. Get expert insights and tips to enhance your spiritual and personal growth.';
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} />
            <div
                style={{ backgroundImage: `url(${Images.default.ImgHeaderBgAlt})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <TitleInformation article={article} />
            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.article_container}>
                    <div>
                        <TableOfContent article={article} />
                        <div className={css.article_wrapper}>
                            <div className={`html-content`}>
                                {parse(article?.Description || '')}
                            </div>
                        </div>
                    </div>
                    <ArticleSidebar />
                </div>
                <CoursesCarousel />
            </div>
            <Footer />
        </PageContainer>
    );
};

export default Article;
