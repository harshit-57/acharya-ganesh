import css from './style.module.css';
import { useParams } from 'react-router-dom';
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
const Article = () => {
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
            <TitleInformation />
            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.article_container}>
                    <TableOfContent />
                    <div className={css.article_wrapper}>
                        <div className={css.article}>
                            <h1>Introduction to Lakshmi Puja</h1>
                            <p>
                                As the festive season approaches, millions of
                                Hindus around the world eagerly anticipate one
                                of the most auspicious celebrations in their
                                calendar – Lakshmi Puja. In 2025, this vibrant
                                festival will once again bring families and
                                communities together to honor Goddess Lakshmi,
                                the divine embodiment of wealth, prosperity, and
                                good fortune. Whether you’re a seasoned
                                celebrant or new to this tradition, this
                                comprehensive guide will walk you through
                                everything you need to know about Lakshmi Puja
                                2025.
                            </p>
                            <h3>Cleaning and Decorating</h3>
                            <p>
                                In 2025, Lakshmi Puja is expected to fall in
                                early November. However, the exact date may vary
                                depending on the lunar calendar and regional
                                traditions. It’s always a good idea to consult a
                                local Hindu calendar or temple for the precise
                                date in your area.
                            </p>
                            <ul>
                                <li>
                                    <img
                                        className={css.bullet_star}
                                        src={IcStar}
                                        alt={'Star icon'}
                                    />
                                    Start by decluttering your living spaces
                                </li>
                            </ul>
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
