import css from './style.module.css';
import ImgBlogHeader from '../../../assets/blog_header_bg.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
export const Astrology = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgBlogHeader})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content_container}>
                <div className={css.content_wrapper}>
                    <div className={css.column}>
                        <h4 style={{ color: '#fcbf50', textAlign: 'center' }}>
                            Discover the
                        </h4>
                        <h1 style={{ color: '#FCBF50', textAlign: 'center' }}>
                            Celestial Guidance | Astrology
                        </h1>
                        <h4 style={{ color: '#fcbf50', textAlign: 'center' }}>
                            Services at Acharya Ganesh
                        </h4>
                        <p style={{ textAlign: 'center' }}>
                            Welcome to Acharya Ganesh, your premier destination
                            for exploring the mystical realms of astrology and
                            uncovering the secrets of the cosmos. Our astrology
                            services are designed to offer profound insights
                            into your life’s journey, empowering you with the
                            wisdom to navigate your path with clarity and
                            purpose. Dive into our world, where ancient wisdom
                            meets modern understanding, and discover how the
                            stars and planets align to influence your destiny.
                        </p>
                    </div>
                    <div className={css.row}>
                        <p>
                            <h4
                                style={{
                                    color: '#fcbf50',
                                    textAlign: 'center',
                                }}
                            >
                                Our Philosophy | Astrology as a Path to
                                Enlightenment
                            </h4>
                            At Acharya Ganesh, we believe astrology is more than
                            predicting future events; it’s a tool for
                            self-discovery and personal growth. Founded by the
                            astrologer Hanish Bagga, a visionary in the field
                            with over a decade of experience, we bring a deep
                            understanding of the cosmic forces and their impact
                            on human life. Our approach combines the timeless
                            knowledge of Vedic astrology with practical
                            solutions, offering a unique blend of spiritual
                            insight and actionable advice.
                        </p>

                        <p>
                            <h4
                                style={{
                                    color: '#fcbf50',
                                    textAlign: 'center',
                                }}
                            >
                                How Does Astro-Vastu Work?
                            </h4>
                            We at Acharya Ganesh adopt a non-invasive approach
                            to harmonize your space. By understanding your date
                            of birth, time, and place of birth, a detailed
                            analysis is conducted to uncover the unique aspects
                            of your life and personality. Based on this
                            analysis, specific remedies and adjustments are
                            recommended without major structural changes. The
                            solutions may include strategically placing
                            paintings, vases, stones, artifacts, or color
                            changes in certain areas of your space. These
                            remedies are aimed at neutralizing negative energies
                            and enhancing positive vibrations. Structural
                            changes are only suggested in rare cases, ensuring
                            that your comfort and convenience remain paramount.
                        </p>
                    </div>
                    <div className={css.column}>
                        <h4
                            style={{
                                color: '#fcbf50',
                                textAlign: 'center',
                            }}
                        >
                            Personalized Astrology
                        </h4>
                        <h4
                            style={{
                                color: '#fcbf50',
                                textAlign: 'center',
                            }}
                        >
                            Consultations
                        </h4>
                        <h4
                            style={{
                                color: '#fcbf50',
                                textAlign: 'center',
                            }}
                        >
                            Understanding Your Cosmic Blueprint
                        </h4>
                        <p style={{ textAlign: 'center' }}>
                            Our personalized consultations are at the heart of
                            what we do. Hanish Bagga and our team of expert
                            astrologers offer one-on-one sessions that delve
                            deep into your birth chart, a cosmic snapshot of the
                            sky at the moment of your birth. This chart serves
                            as your guide to understanding your strengths,
                            challenges, and the various aspects of your life—be
                            it career, relationships, health, or personal
                            growth.
                        </p>
                        <h4
                            style={{
                                color: '#fcbf50',
                                textAlign: 'center',
                            }}
                        >
                            Perfect Solutions for Your Unique Journey
                        </h4>
                        <p style={{ textAlign: 'center' }}>
                            Each consultation perfectly meets your needs,
                            providing customized remedies, including Lal Kitab
                            solutions, gemstone recommendations, and Vastu tips
                            to enhance positive energy. Our aim is to forecast
                            events and empower you with the knowledge to create
                            a life of balance, happiness, and fulfillment.
                        </p>
                        <h4
                            style={{
                                color: '#fcbf50',
                                textAlign: 'center',
                            }}
                        >
                            Courses and Workshops | Learning the Celestial
                        </h4>
                    </div>
                    <div className={css.row}>
                        <p>
                            <h4
                                style={{
                                    color: '#fcbf50',
                                    textAlign: 'center',
                                }}
                            >
                                Beginner to Advanced Learning
                            </h4>
                            Whether you’re new to astrology or seeking to deepen
                            your knowledge, Acharya Ganesh offers a range of
                            courses and workshops designed to suit all levels.
                            Our curriculum covers the fundamentals of Vedic
                            astrology, Lal Kitab remedies, and advanced
                            predictive techniques. Under the guidance of Hanish
                            Bagga, you’ll be on board a journey of learning that
                            illuminates the path to becoming a skilled
                            astrologer yourself.
                            <h4
                                style={{
                                    color: '#fcbf50',
                                    textAlign: 'center',
                                }}
                            >
                                Perfect Solutions for Your Unique Journey
                            </h4>
                            Each consultation perfectly meets your needs,
                            providing customized remedies, including Lal Kitab
                            solutions, gemstone recommendations, and Vastu tips
                            to enhance positive energy. Our aim is to forecast
                            events and empower you with the knowledge to create
                            a life of balance, happiness, and fulfillment.
                        </p>
                        <img
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2025/01/Celestial-Guidance-Service-Page-1-1.webp?resize=600%2C600&ssl=1'
                            }
                            alt={''}
                        />
                    </div>
                    <div className={css.column}></div>
                    <div className={css.row}>
                        <p>
                            Understanding Your Cosmic Blueprint Our personalized
                            consultations are at the heart of what we do. Hanish
                            Bagga and our team of expert astrologers offer
                            one-on-one sessions that delve deep into your birth
                            chart, a cosmic snapshot of the sky at the moment of
                            your birth. This chart serves as your guide to
                            understanding your strengths, challenges, and the
                            various aspects of your life—be it career,
                            relationships, health, or personal growth.
                        </p>
                        <p>
                            Perfect Solutions for Your Unique Journey Each
                            consultation perfectly meets your needs, providing
                            customized remedies, including Lal Kitab solutions,
                            gemstone recommendations, and Vastu tips to enhance
                            positive energy. Our aim is to forecast events and
                            empower you with the knowledge to create a life of
                            balance, happiness, and fulfillment.
                        </p>
                    </div>
                </div>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};
