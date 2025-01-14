import css from './style.module.css';
import ImgHeaderBg from '../../assets/contact_header_bg.png';
import IcDescription from '../../assets/ic_description.png';
import IcStar from '../../assets/star_primary_dark.png';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { PriceAndPurchaseSection } from './components/price-n-purchase-section/PriceAndPurchase';
import { CourseCard } from './components/course-card/CourseCard';
import ImgCourse1 from '../../assets/course_1.png';

const CourseDetail = () => {
    const course = {
        poster: ImgCourse1,
        label: 'One Day Workshop on Sun & Moon',
        id: '',
        price: 2000,
        discount: 50,
    };
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content}>
                <PriceAndPurchaseSection />
                <div className={css.description_container}>
                    <div className={css.section_label}>
                        <img src={IcDescription} alt={'Description icon'} />
                        <p>Description</p>
                    </div>
                    <div className={css.description}>
                        <div>
                            <h1>Course Content Of Master Class on Gemstones</h1>
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
                        <div>
                            <h1>Course Outcome of Master Class on Gemstones</h1>
                            <p>
                                At the end of the course, participants will be
                                able to have deep knowledge about gemstones
                                including their origin, properties, and
                                application in astrology, healing, and spiritual
                                practices. They will learn the skills to
                                identify and use them practically for
                                compatibility and complete utilization.
                            </p>
                        </div>
                        <div>
                            <h1>
                                Elevate Your Understanding: Astro Vastu Level 2
                                Course with Acharya Ganesh
                            </h1>
                            <p>
                                Welcome to the next level of enlightenment with
                                the Astro Vastu Level 2 Course, curated by the
                                renowned astrologer and expert Hanish Bagga.
                                Building upon the foundational knowledge of
                                Astro Vastu, this advanced course is designed to
                                deepen participants’ understanding of the
                                intricate relationship between astrology and
                                Vastu Shastra. Join us as we explore advanced
                                concepts, practical applications, and
                                transformative insights in the fascinating realm
                                of Astro Vastu.
                            </p>
                        </div>
                        <div>
                            <h1>About the Course</h1>
                            <p>
                                Astro Vastu Level 2 Course is a comprehensive
                                program crafted to provide participants with
                                advanced insights into the integration of
                                astrology and Vastu Shastra. Led by Hanish
                                Bagga, this course delves deeper into the
                                principles, techniques, and applications of
                                Astro Vastu, empowering participants to harness
                                the cosmic energies for harmony, prosperity, and
                                well-being. Whether you’re a practitioner or
                                enthusiast, this course will equip you with the
                                skills and knowledge to navigate the
                                complexities of Astro Vastu with confidence and
                                proficiency.
                            </p>
                        </div>
                        <div>
                            <h1>Course Highlights</h1>
                            <ul>
                                <li>
                                    <img
                                        className={css.bullet_star}
                                        src={IcStar}
                                        alt={'Star icon'}
                                    />
                                    Advanced Concepts: Explore advanced concepts
                                    and methodologies in Astro Vastu, including
                                    planetary influences, directional
                                    alignments, and energy harmonization
                                    techniques.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.related_courses_container}>
                <p className={css.section_heading}>Related Products</p>
                <div className={css.related_product_container}>
                    <CourseCard course={course} />
                    <CourseCard course={course} />
                    <CourseCard course={course} />
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

export default CourseDetail;
