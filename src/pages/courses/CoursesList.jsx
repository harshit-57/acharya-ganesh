import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcChevronIcon from '../../assets/chevron-down.png';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import ImgHeaderBg from '../../assets/courses_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useState } from 'react';
import { CourseCard } from './components/course-card/CourseCard';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';

const CoursesList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <PageContainer className={css.container}>
            <Helmet>
                <script>var orgCountry = "IN";</script>
                <title>Acharya Ganesh Astrology Academy</title>
                <meta
                    name="keywords"
                    content="astrology, horoscope, cosmic, Learn astrology, online astrology, online astro"
                />
                <meta
                    name="description"
                    content="Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!"
                />
                <meta name="google-site-verification" content="" />

                <link
                    rel="canonical"
                    href="https://courses.acharyaganesh.com/s/store"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Acharya Ganesh Astrology Academy"
                />
                <meta
                    property="og:description"
                    content="Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!"
                />
                <meta
                    property="og:image"
                    content="https://courses.acharyaganesh.com/logo.png?v=3"
                />
                <meta name="google" content="notranslate" />

                <link
                    rel="canonical"
                    href="https://courses.acharyaganesh.com/"
                />

                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
            </Helmet>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Courses</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>Courses</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
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
                        onClick={() => {}}
                    >
                        {index + 1}
                    </p>
                ))}
                <p>...</p>
                <p onClick={() => {}}>10</p>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default CoursesList;
