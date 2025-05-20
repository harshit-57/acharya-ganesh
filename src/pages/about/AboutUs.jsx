import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcChevronIcon from '../../assets/chevron-down.png';
import IcStar from '../../assets/star_primary_dark.png';

import ImgHeaderBg from '../../assets/about_header_bg.png';
import ImgHanish from '../../assets/about_image.jpg';
import ImgStatsBg from '../../assets/about_stats_bg.jpg';
import ImgConsultationPoster from '../../assets/consultation_call_website.jpg';
import { Spacer } from '../../components/spacer/Spacer';
import imageList from '../../data/gallery-images';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
import Gallery from '../../components/gallery/Gallery';
import SEO from '../../Seo';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    const [images, setImages] = useState([]);
    const [readMore, setReadMore] = useState('Read More');
    const keywords =
        'about us, our story, who we are, about acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology';
    const description =
        'Learn about acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Discover our mission, team, and how we can guide you on your spiritual journey.';
    const title = 'Acharya Ganesh Astrology Academy | About Us';

    useEffect(() => setImages(imageList), []);
    return (
        <PageContainer>
            <SEO keywords={keywords} description={description} title={title} />
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
                                <img src={IcChevronIcon} alt={'>'} />
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
                                We have forgotten that we have been gifted the
                                ability to consciously choose the direction of
                                our life. However, Acharya Ganesh helps you to
                                tap into your power through Astro Vastu. The
                                wide range of services provided are aimed to
                                relive you of your problems and to help you
                                reach your desires. Our Astrologers truly wish
                                to see you succeed and do everything in their
                                ability to help you. Our supportive team
                                provides prompt service so they are always ready
                                to assist you on any matter that may be
                                troublesome to you.
                            </p>
                            {/* {readMore === 'Read More' && (
                                <span
                                    className={css.read_more_link}
                                    onClick={() => setReadMore('Read Less')}
                                >
                                    {readMore}
                                </span>
                            )}
                            {readMore === 'Read Less' && ( */}
                            <p>
                                If you hold a desire to learn Astrology then we
                                also offer various teaching materials on
                                different areas. There are courses available
                                suited for both Beginners and Masters at
                                Astrology and Vastu. Moreover, our supportive
                                Teachers can be reached outside of work hours to
                                assist you with any difficulties you may
                                encounter during your studies. If you are keen
                                on becoming an esteemed student of Acharya
                                Ganesh then our courses and contact details can
                                be found on our page.
                            </p>
                            {/* )}
                            {readMore === 'Read Less' && (
                                <span
                                    className={css.read_more_link}
                                    onClick={() => setReadMore('Read More')}
                                >
                                    {readMore}
                                </span>
                            )} */}
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
                                {/* We are committed to transforming lives by
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
                                discover and realize their fullest capabilities. */}
                                Our Senior Astrologer, Hanish Bagga is the
                                Founder and Director of Acharya Ganesh. He has
                                dedicated over a decade of his life to studying
                                and has obtained a deep understanding of
                                Astrology, Vastu and related fields. He now
                                shares his knowledge through Acharya Ganesh.
                                Hanish Bagga previously had a successful
                                Corporate Career however, he decided to quit it
                                in order to pursue Astrology which has led him
                                to be the Founder of Acharya Ganesh. He is very
                                keen on sharing his knowledge and providing
                                guidance to individuals.
                                <Spacer vertical={'10px'} />
                                Hanish Bagga’s upbringing in Rajasthan has
                                caused him to develop tremendous respect towards
                                ancient wisdom and the cosmic influences that
                                surround us. His respect strengthened his
                                passion for Astrology and now he aims to
                                transform people’s lives through the forgotten
                                science of Astro Vastu.
                                <Spacer vertical={'10px'} />
                                Hanish Bagga specialised in Astro Vastu which
                                combines Astrology with Lal Kitab. This is a
                                unique approach which provides highly useful
                                remedies and accurate predictions.
                            </p>
                        </div>
                        <div className={css.column}>
                            <h3 className={css.heading}>Vision</h3>
                            <div className={css.bullet_container}>
                                <Bullet>
                                    Assisting you to realise your Untapped
                                    Potential.
                                </Bullet>
                                <Bullet>
                                    Transforming your life through ancient
                                    Astrology and Modern insights.{' '}
                                </Bullet>
                                <Bullet>
                                    Providing guidance on how to achieve Your
                                    Dreams and Desires.{' '}
                                </Bullet>
                                <Bullet>
                                    Reliving you of any burdens or issues you
                                    may have.{' '}
                                </Bullet>
                                <Bullet>
                                    Helping you to realise the practical
                                    benefits of ancient wisdom through Astro
                                    Vastu.{' '}
                                </Bullet>
                                <Bullet>
                                    Receive a one-on-one consultation with the
                                    Senior Astrologer Hanish Bagga.{' '}
                                </Bullet>
                                <Bullet>
                                    Remedies to solve your problems about Love,
                                    Education, Career and more.{' '}
                                </Bullet>
                                <Bullet>
                                    Guiding you on your spiritual journey about
                                    which Poojas and Deities will be auspicious
                                    for you.{' '}
                                </Bullet>
                                <Bullet>
                                    A detailed Astrological analysis of your
                                    Strengths and Problems you are likely to
                                    encounter.{' '}
                                </Bullet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.content_wrapper}>
                <Gallery />
            </div>
            <div className={css.content_wrapper}>
                <div className={css.content_container}>
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
                        {/* <div className={css.column}> */}
                        <Link
                            to={'/contact'}
                            className={css.consultation_poster}
                        >
                            <img
                                src={ImgConsultationPoster}
                                alt={'Consultation poster'}
                            />
                        </Link>
                        {/* </div> */}
                    </div>
                    <div className={css.row}>
                        <div className={css.column}>
                            <h3 className={css.heading}>
                                How can I support you
                            </h3>
                            <p className={css.desc}>
                                At Acharya Ganesh, your well-being, needs and
                                personal growth are our core focus since we aim
                                to help you realise how easily you are able to
                                transform your life through Astrology. A Private
                                Consultation at Acharya Ganesh with our
                                experienced Astrologers is all it takes for you
                                to become free of your worries and take control
                                of your life. Since you will witness immediate
                                change once remedies, we advise you are followed
                                through.
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
