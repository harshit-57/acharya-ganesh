import css from './style.module.css';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import ImgHeaderBg from '../../assets/blog_header_bg.png';

import { HorizontalBorder } from '../../components/spacer/Spacer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
import { TitleInformation } from './components/title-info/TitleInformation';
import { Footer } from '../../components/footer/Footer';
import { TableOfContent } from './components/table-of-content/TableOfContent';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import SEO from '../../Seo';
import { ArticleSidebar } from './components/sidebar/ArticleSidebar';
const SArticle = () => {
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
            const response = await APIHelper.getSpiritualities({
                slug: slug,
                status: 1,
                active: 1,
            });
            setArticle(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };

    const keywords = article?.Tags?.map((e) => e.TagName).join(', ');
    const description = article?.Tags;
    const title = article?.Meta_SiteName;
    const metaTitle = article?.Meta_Title;
    return (
        <PageContainer className={css.container}>
            <SEO
                keywords={keywords}
                description={description}
                title={title}
                metaTitle={metaTitle}
            />
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
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

export default SArticle;
