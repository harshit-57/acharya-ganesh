import css from './style.module.css';
import { useLocation, useParams } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import ImgHeaderBg from '../../assets/blog_header_bg.png';

import { HorizontalBorder } from '../../components/spacer/Spacer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
import { TitleInformation } from './components/title-info/TitleInformation';
import { Footer } from '../../components/footer/Footer';
import { TableOfContent } from './components/table-of-content/TableOfContent';
import { RecentBlogs } from './components/recents/RecentBlogs';
import IcStar from '../../assets/star_primary_dark.png';
import parse from 'html-react-parser';
const Article = () => {
    const { state: blog } = useLocation();
    const { id } = useParams();
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <TitleInformation blog={blog} />
            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.article_container}>
                    <TableOfContent />
                    <div className={css.article_wrapper}>
                        <div className={css.article}>
                            {parse(blog?.Description || '')}
                        </div>
                    </div>
                    <RecentBlogs />
                </div>
                <CoursesCarousel />
            </div>
            <Footer />
        </PageContainer>
    );
};

export default Article;
