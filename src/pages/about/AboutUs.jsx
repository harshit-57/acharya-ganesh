import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcChevronIcon from '../../assets/chevron-down.png';
import IcStar from '../../assets/star_primary_dark.png';

import ImgHeaderBg from '../../assets/about_header_bg.png';
import ImgHanish from '../../assets/hanish.jpg';
import ImgStatsBg from '../../assets/about_stats_bg.jpg';
import ImgConsultationPoster from '../../assets/consultation_poster.jpg';
import { Spacer } from '../../components/spacer/Spacer';
import imageList from '../../data/gallery-images';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
import Gallery from '../../components/gallery/Gallery';
const AboutUs = () => {
    const [images, setImages] = useState([]);
    const [readMore, setReadMore] = useState('Read More');

    useEffect(() => setImages(imageList), []);
    return (
        <PageContainer>
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
                    href="https://courses.acharyaganesh.com/aboutus"
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
                        <h3>About Us</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>About us</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.content_wrapper}>
                <div className={css.content_container}>
                    <div className={css.row}>
                        <img
                            className={css.person_image}
                            src={ImgHanish}
                            alt={'Hanish Bagga image'}
                        />
                        <div className={css.about_description_container}>
                            <h2>Hanish Bagga</h2>
                            <Spacer vertical={'4px'} />
                            <h4>Founder & Director at Acharya Ganesh</h4>
                            <Spacer vertical={'24px'} />
                            <p>
                                Astrologer Hanish Bagga, the esteemed founder
                                and director of Acharya Ganesh, is celebrated
                                for his innovative work in astrology, Vastu, and
                                related fields. With over a decade of
                                experience, Jyotish Hanish Bagga transitioned
                                from a successful corporate career to pursue his
                                passion in astrology, driven by a deeper
                                calling. Originating from Rajasthan, his
                                upbringing infused him with a respect for
                                ancient wisdom and cosmic influences, which he
                                applies in guiding individuals toward
                                enlightenment and growth.
                            </p>
                            {readMore === 'Read More' && (
                                <span
                                    className={css.read_more_link}
                                    onClick={() => setReadMore('Read Less')}
                                >
                                    {readMore}
                                </span>
                            )}
                            {readMore === 'Read Less' && (
                                <p>
                                    Specializing in Astro Vastu, he adeptly
                                    combines Vedic astrology with Lal Kitab
                                    remedies to enhance life’s prosperity and
                                    happiness. As an educator, Astrologer Hanish
                                    Bagga is dedicated to sharing his knowledge,
                                    offering courses for all levels, and
                                    initiating a free Lal Kitab astrology course
                                    to give back to the community.
                                </p>
                            )}
                            {readMore === 'Read Less' && (
                                <span
                                    className={css.read_more_link}
                                    onClick={() => setReadMore('Read More')}
                                >
                                    {readMore}
                                </span>
                            )}
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ImgStatsBg})` }}
                        className={css.stats_container}
                    >
                        <p>
                            15+{' '}
                            <span>
                                Years of <br /> experience
                            </span>
                        </p>
                        <p>
                            3 Lac+{' '}
                            <span>
                                Lives <br /> Touched
                            </span>
                        </p>
                        <p>
                            4.9{' '}
                            <span>
                                Google <br /> Rating
                            </span>
                        </p>
                    </div>
                    <div className={css.row}>
                        <div className={css.column}>
                            <h3 className={css.heading}>Mission</h3>
                            <p className={css.desc}>
                                We are committed to transforming lives by
                                merging the timeless insights of ancient wisdom
                                with contemporary understanding. Our approach is
                                centered on empowering individuals to unlock
                                their true potential, bridging the gap between
                                historical knowledge and modern-day
                                applications. Through this unique combination,
                                we offer support and guidance for personal
                                transformation, helping people navigate the
                                complexities of life with a balanced
                                perspective. By integrating the old with the
                                new, we provide a pathway for individuals to
                                discover and realize their fullest capabilities.
                            </p>
                        </div>
                        <div className={css.column}>
                            <h3 className={css.heading}>Vision</h3>
                            <div className={css.bullet_container}>
                                <Bullet>
                                    Assisting everyone in realizing their full
                                    potential.
                                </Bullet>
                                <Bullet>
                                    Facilitating transformation through a blend
                                    of ancient and modern insights.
                                </Bullet>
                                <Bullet>
                                    Unlocking capabilities and transforming
                                    lives.
                                </Bullet>
                                <Bullet>
                                    Supporting individuals in achieving their
                                    true potential.
                                </Bullet>
                                <Bullet>
                                    Helping each person transform, one step at a
                                    time.
                                </Bullet>
                                <Bullet>
                                    Aiding everyone in becoming their best
                                    selves.
                                </Bullet>
                                <Bullet>
                                    Committed to uplifting lives and enhancing
                                    the human spirit.
                                </Bullet>
                                <Bullet>
                                    Focusing on individual improvement while
                                    uplifting society.
                                </Bullet>
                                <Bullet>
                                    Providing support on your journey to become
                                    the best version of yourself.
                                </Bullet>
                                <Bullet>
                                    Guiding you with timeless wisdom for the
                                    modern era.
                                </Bullet>
                            </div>
                        </div>
                    </div>
                    {/* <div className={css.gallery_container}>
                        <h2 className={css.section_heading}>
                            Memories Over The Years
                        </h2>
                        <div className={css.gallery_grid}>
                            {Array.isArray(images) &&
                                images.map((img, index) => (
                                    <img key={index} src={img} alt="" />
                                ))}
                        </div>
                    </div> */}
                    <Gallery />
                    <div className={css.row}>
                        <div
                            className={[css.column, css.card_primary_bg].join(
                                ' '
                            )}
                        >
                            <h3 className={css.heading}>
                                Book For Consultation Call
                            </h3>
                            <div className={css.bullet_container}>
                                <Bullet>
                                    Talk one-to-one with Astrologer Hanish Bagga
                                </Bullet>
                                <Bullet>
                                    Solutions to all your life problems
                                    including marriage, love, education, career,
                                    and everything.
                                </Bullet>
                                <Bullet>
                                    Guidance on your spiritual journey as to
                                    what poojas and deities will be auspicious
                                    for you.
                                </Bullet>
                                <Bullet>
                                    A thorough astrological analysis of your
                                    life problems.
                                </Bullet>
                                <Bullet>
                                    An understanding of where you have gone
                                    wrong and how to do it right.
                                </Bullet>
                            </div>
                        </div>
                        <div className={css.column}>
                            <img
                                className={css.consultation_poster}
                                src={ImgConsultationPoster}
                                alt={'Consultation poster'}
                            />
                        </div>
                    </div>
                    <div className={css.row}>
                        <div className={css.column}>
                            <h3 className={css.heading}>
                                How can I support you
                            </h3>
                            <p className={css.desc}>
                                At Acharya Ganesh, your well-being, needs, and
                                personal growth are our core focus. Our main
                                goal is to assist in your transformation
                                journey, enabling you to reach your highest
                                potential. By consulting with Acharya Ganesh and
                                following the recommended remedies, you’ll
                                notice significant, measurable changes in your
                                life.
                            </p>
                        </div>
                        <div className={css.column}>
                            <p className={css.desc}>
                                Reach out to Acharya Ganesh today and discover
                                the positive impact he can bring into your life
                                through:
                            </p>
                            <div className={css.bullet_container}>
                                <Bullet>
                                    Profound understanding of a wide range of
                                    subjects.
                                </Bullet>
                                <Bullet>
                                    Comprehensive expertise and professional
                                    knowledge.
                                </Bullet>
                                <Bullet>
                                    Remedies that are effective, practical,
                                    affordable, and quick to show results.
                                </Bullet>
                                <Bullet>
                                    Holistic solutions and a practical approach
                                    for all-round wellness.
                                </Bullet>
                                <Bullet>
                                    Real, measurable, and significant
                                    improvements in your life.
                                </Bullet>
                                <Bullet>
                                    Unwavering support throughout your personal
                                    transformation journey.
                                </Bullet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

const Bullet = ({ children }) => {
    return (
        <div className={css.bullet}>
            <img src={IcStar} alt={'Star icon'} />
            <p>{children}</p>
        </div>
    );
};

export default AboutUs;
