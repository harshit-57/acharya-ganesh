import css from './style.module.css';
import ImgBlogHeader from '../../../assets/blog_header_bg.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
import Blog from '../../../components/blog/Blog';
import CitationBox from '../../../components/citation-box/CitationBox';
export const MatchMaking = () => {
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
                        <h2 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Find Your Perfect Match with
                        </h2>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Match-Making
                        </h1>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Services by Acharya Ganesh
                        </h1>
                        <p
                            style={{
                                textAlign: 'start',
                                fontSize: '18px',
                            }}
                        >
                            Welcome to Acharya Ganesh, your trusted source for
                            comprehensive match making services to help you find
                            your ideal life partner. Led by the esteemed Acharya
                            Ganesh, our matchmaking services are grounded in the
                            principles of astrology and guided by a deep
                            understanding of compatibility factors. Whether
                            you’re seeking a life partner for marriage or
                            looking to strengthen an existing relationship, our
                            expert matchmakers can assist you in navigating the
                            journey of love and companionship with confidence
                            and clarity.
                        </p>
                    </div>

                    <div className={css.row}>
                        <p
                            style={{
                                border: '2px solid black',
                                borderRadius: '25px',
                                padding: '20px',
                            }}
                        >
                            <h2
                                style={{
                                    textAlign: 'center',
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                }}
                            >
                                Understanding Match Making
                            </h2>
                            Matchmaking, also known as Kundali Milan or
                            horoscope matching, is a traditional practice in
                            Hindu culture that assesses the compatibility
                            between two individuals based on their birth charts
                            (Kundli). By analyzing each person’s chart’s
                            planetary positions and influences, matchmakers can
                            determine compatibility and harmony between
                            prospective partners in various aspects of life,
                            including personality, values, lifestyle, and goals.
                            Matchmaking aims to ensure a harmonious and
                            fulfilling relationship that is conducive to mutual
                            happiness and growth
                        </p>

                        <img
                            style={{ borderRadius: '20px' }}
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2025/01/Match-Making-Service-Page-1.webp?w=1024&ssl=1'
                            }
                            alt="matchmaking"
                        />
                    </div>
                    <div className={css.row}>
                        <p style={{ borderRadius: '25px', padding: '20px' }}>
                            <h1
                                style={{
                                    textAlign: 'center',
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                }}
                            >
                                {' '}
                                Our Matchmaking Services
                            </h1>
                            Personalized Matchmaking Consultations: Our
                            experienced matchmakers offer personalized
                            consultations to assess the compatibility between
                            you and your potential life partner. Through
                            detailed analysis of your birth charts, we provide
                            insights into your relationship’s compatibility
                            factors, strengths, challenges, and potential growth
                            areas. Horoscope Matching: We specialize in
                            horoscope matching, where we analyze the birth
                            charts of both individuals to determine their
                            compatibility across various dimensions, including
                            Guna Milan, Mangal Dosha, Bhakoot Dosha, and more.
                            Our thorough analysis helps you make informed
                            decisions and choose a life partner compatible with
                            you in every aspect.{' '}
                        </p>
                        <p
                            style={{
                                border: '2px solid black',
                                borderRadius: '25px',
                                padding: '20px',
                            }}
                        >
                            <span style={{ fontWeight: '900' }}>
                                Relationship Compatibility Assessment:
                            </span>{' '}
                            Whether you’re in a new relationship or seeking to
                            strengthen an existing one, our matchmakers can
                            assess the compatibility between you and your
                            partner to identify areas of alignment and potential
                            conflict areas. Our insights and recommendations can
                            help you navigate relationship challenges and build
                            a strong foundation for long-lasting love and
                            happiness.
                            <br />
                            <br />
                            <span style={{ fontWeight: '900' }}>
                                Marriage MatchMaking:
                            </span>{' '}
                            For those seeking a life partner for marriage, our
                            matchmaking services provide invaluable guidance in
                            selecting a compatible partner who shares your
                            values, goals, and aspirations. We understand the
                            importance of finding the right life partner, and
                            our matchmakers are dedicated to helping you find
                            your perfect match for a lifetime of happiness
                            together.
                        </p>
                    </div>
                    <div
                        className={css.row}
                        style={{
                            border: '2px solid black',
                            borderRadius: '25px',
                            padding: '20px',
                        }}
                    >
                        <p className={css.row} style={{ fontSize: '18px' }}>
                            <div>
                                <h1
                                    style={{
                                        textAlign: 'center',
                                        color: '#9a5c23',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    Why Choose Acharya Ganesh for Match Making?
                                </h1>
                                <ul>
                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Expertise:
                                        </span>{' '}
                                        Acharya Ganesh brings over years of
                                        experience and profound knowledge in
                                        astrology and matchmaking, ensuring
                                        accurate and insightful consultations
                                        and predictions.
                                    </li>
                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Authenticity:
                                        </span>{' '}
                                        Our matchmaking services are grounded in
                                        authentic Vedic astrology principles and
                                        time-tested techniques, providing
                                        reliable and trustworthy guidance for
                                        your relationship journey.
                                    </li>
                                </ul>
                            </div>
                            <ul>
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Personalized Approach:
                                    </span>{' '}
                                    We understand that every relationship is
                                    unique, and one-size-fits-all solutions may
                                    not be suitable. We offer personalized
                                    consultations and remedies tailored to your
                                    needs and circumstances.
                                </li>
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Confidentiality:
                                    </span>{' '}
                                    We respect your privacy and confidentiality,
                                    ensuring that all information shared during
                                    consultations remains confidential and
                                    protected.
                                </li>
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Support:
                                    </span>{' '}
                                    Our dedicated team of matchmakers is
                                    committed to supporting you every step of
                                    the way, providing ongoing guidance,
                                    support, and encouragement as you navigate
                                    your relationship journey.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div
                        className={css.column}
                        style={{ textAlign: 'center', fontSize: '18px' }}
                    >
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Get Started Today
                        </h1>
                        <p style={{ textAlign: 'start' }}>
                            Discover the power of matchmaking with Acharya
                            Ganesh and embark on a journey towards finding your
                            perfect life partner. Schedule a consultation today
                            and let our expert matchmakers guide you towards a
                            lifetime of love, happiness, and fulfillment.
                        </p>
                    </div>
                    <div
                        className={css.row}
                        style={{
                            border: '2px solid black',
                            borderRadius: '25px',
                            padding: '20px',
                        }}
                    >
                        <p className={css.row} style={{ fontSize: '18px' }}>
                            <div>
                                <h1
                                    style={{
                                        textAlign: 'center',
                                        color: '#9a5c23',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    How to Schedule an Appointment for
                                    Matchmaking Services
                                </h1>
                                <p>
                                    Scheduling an appointment with Acharya
                                    Ganesh for our matchmaking services is
                                    simple and convenient. Follow these steps to
                                    book your appointment and embark on the
                                    journey of finding your perfect life
                                    partner:
                                </p>
                                <br />
                                <br />

                                <ul>
                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Choose Your Service:
                                        </span>{' '}
                                        Browse through our list of matchmaking
                                        services to find the one that best suits
                                        your needs. Whether you’re seeking
                                        personalized matchmaking consultations,
                                        horoscope matching, or relationship
                                        compatibility assessments, we offer
                                        various options to cater to your
                                        requirements.
                                    </li>

                                    <br />

                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Select Appointment Type:
                                        </span>{' '}
                                        Once you’ve identified the service you
                                        wish to schedule, click on the
                                        corresponding service page for more
                                        details. You’ll find information about
                                        the service description, duration, and
                                        pricing here.
                                    </li>

                                    <br />

                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Schedule Appointment:
                                        </span>
                                        Look for the “Schedule Appointment”
                                        button or link on the service page and
                                        click on it to proceed. You will be
                                        directed to our appointment scheduling
                                        system, where you can view the
                                        availability calendar.
                                    </li>

                                    <br />
                                    <li>
                                        <span style={{ fontWeight: '900' }}>
                                            Choose Date and Time:
                                        </span>
                                        Browse the available appointment slots
                                        on the calendar and select a date and
                                        time that best fits your schedule.
                                        Please note that appointment
                                        availability may vary based on the
                                        availability of our matchmakers.
                                    </li>
                                </ul>
                            </div>
                            <ul>
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Provide Contact Information:
                                    </span>
                                    Fill out the appointment scheduling form
                                    with your name, email address, and phone
                                    number. This information is essential to
                                    confirm your appointment and communicate
                                    with you regarding any updates or changes.
                                </li>

                                <br />

                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Confirm Appointment:
                                    </span>{' '}
                                    Review the details of your appointment,
                                    including the date, time, and type of
                                    service selected, to ensure accuracy. Once
                                    satisfied, click the “Confirm Appointment”
                                    button to finalize your booking.
                                </li>

                                <br />

                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Receive Confirmation:
                                    </span>
                                    After confirming your appointment, you’ll
                                    receive a confirmation email containing all
                                    the relevant details, including the date,
                                    time, and location. Depending on the type of
                                    service booked, you may also receive
                                    additional instructions or preparatory
                                    materials.
                                </li>

                                <br />

                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Prepare for Your Appointment:
                                    </span>{' '}
                                    Before your scheduled appointment, take some
                                    time to prepare any questions, concerns, or
                                    specific preferences you’d like to discuss
                                    during your consultation. This will help
                                    ensure a productive and meaningful session
                                    with our matchmakers.
                                </li>

                                <br />

                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Attend Your Appointment:
                                    </span>
                                    On the day of your appointment, log in to
                                    the designated platform or contact us at the
                                    specified time to attend your consultation.
                                    Be punctual and prepared to share relevant
                                    information about yourself and your
                                    relationship goals with our experienced
                                    matchmakers.
                                </li>
                                <br />

                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Follow-Up:
                                    </span>
                                    After your appointment, contact us if you
                                    have further questions or require additional
                                    support. We’re here to assist you every step
                                    of the way and ensure your satisfaction with
                                    our matchmaking services.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div
                        className={css.row}
                        style={{
                            border: '2px solid black',
                            borderRadius: '25px',
                            padding: '20px',
                        }}
                    >
                        <p>
                            <h2
                                style={{
                                    textAlign: 'center',
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                }}
                            >
                                Schedule your appointment with Acharya Ganesh
                            </h2>
                            For matchmaking services today and take the first
                            step towards finding your perfect life partner. Let
                            our expert matchmakers guide you towards a
                            fulfilling and harmonious relationship that lasts a
                            lifetime.
                        </p>

                        <img
                            style={{
                                border: '2px solid black',
                                borderRadius: '25px',
                                padding: '20px',
                                height: 'auto',
                            }}
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/10/IMG_NAV-848x1024-1.webp?resize=300%2C362&ssl=1'
                            }
                            alt="matchmaking"
                        />
                    </div>
                    <Blog />
                    <CitationBox />
                </div>
            </div>
            <Spacer vertical={'20px'} />
            <Footer />
        </PageContainer>
    );
};
