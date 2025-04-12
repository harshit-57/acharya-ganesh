import css from './style.module.css';
import ImgBlogHeader from '../../../assets/blog_header_bg.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
import Blog from '../../../components/blog/Blog';
import CitationBox from '../../../components/citation-box/CitationBox';
export const CareerPrediction = () => {
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
                            Unlock Your Professional Destiny with
                        </h2>
                        <h1 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            Career Predictions
                        </h1>
                        <h2 style={{ color: '#9a5c23', textAlign: 'center' }}>
                            by Acharya Ganesh
                        </h2>
                        <p>
                            Unlock Your Professional Destiny with Career
                            Predictions by Acharya Ganesh Welcome to Acharya
                            Ganesh, your trusted source for insightful career
                            predictions and guidance to help you navigate the
                            complexities of the professional world. Led by the
                            esteemed Acharya Ganesh, our career prediction
                            services are designed to provide clarity, direction,
                            and empowerment as you pursue your professional
                            aspirations. Whether you’re facing career dilemmas,
                            seeking guidance on educational pursuits, or aiming
                            for career advancement, our expert predictions and
                            remedies can help you make informed decisions and
                            achieve success in your chosen field.
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
                                Understanding Career predictions
                            </h2>
                            Career predictions utilize the principles of
                            astrology to analyze the planetary positions and
                            influences in your birth chart (Kundli) to uncover
                            insights into your career prospects, potential
                            challenges, and opportunities for growth. By
                            examining the positions of key planets such as the
                            Sun, Moon, and Mercury in relation to the 10th house
                            (the house of career) and its ruler, our expert
                            astrologers can provide valuable guidance on your
                            professional path
                        </p>

                        <img
                            style={{ borderRadius: '20px' }}
                            src={
                                'https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2025/01/Career-Predictions-Service-Page-1.webp?w=1024&ssl=1'
                            }
                            alt="career prediction"
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
                                Our Carrer Prediction Services
                            </h1>
                            <span style={{ fontWeight: '900' }}>
                                Personalized Career Consultations:
                            </span>{' '}
                            Our experienced astrologers offer personalized
                            career consultations to analyze your birth chart and
                            provide insights into your career prospects,
                            strengths, weaknesses, and timing for career-related
                            events. Whether you’re considering a job change,
                            starting a new business, or seeking guidance on
                            educational pursuits, our consultations offer
                            clarity and direction to help you make informed
                            decisions.
                            <br />
                            <br />
                            <span style={{ fontWeight: '900' }}>
                                Career Path Analysis:
                            </span>{' '}
                            Discover the most suitable career paths and
                            professions based on your astrological profile and
                            personality traits. Our astrologers analyze your
                            birth chart to identify vocational aptitudes,
                            talents, and areas of interest, guiding you towards
                            fulfilling and rewarding career opportunities
                            aligned with your innate potential. Horoscope
                            Matching: We specialize in horoscope matching, where
                            we analyze the birth charts of both individuals to
                            determine their compatibility across various
                            dimensions, including Guna Milan, Mangal Dosha,
                            Bhakoot Dosha, and more. Our thorough analysis helps
                            you make informed decisions and choose a life
                            partner compatible with you in every aspect.{' '}
                        </p>
                        <p
                            style={{
                                border: '2px solid black',
                                borderRadius: '25px',
                                padding: '20px',
                            }}
                        >
                            <span style={{ fontWeight: '900' }}>
                                Job Change and Promotion Predictions:
                            </span>
                            Receive insights into the timing and prospects of
                            job changes, promotions, and career advancements in
                            your professional journey. Our astrologers assess
                            the planetary transits and dasa-bhukti periods to
                            predict favorable periods for career growth and
                            opportunities for advancement in your current role
                            or field.
                            <br />
                            <br />
                            <span style={{ fontWeight: '900' }}>
                                Educational Guidance:
                            </span>
                            Educational Guidance: Gain clarity on educational
                            pursuits, academic achievements, and opportunities
                            for higher studies based on your astrological chart.
                            Whether you’re considering pursuing a degree,
                            certification, or specialized training, our
                            astrologers can provide guidance on the most
                            favorable timing and areas of study to support your
                            educational goals.
                            <br />
                            <br />
                            <span style={{ fontWeight: '900' }}>
                                Remedies for Career Success:
                            </span>
                            Receive personalized remedies and rituals to
                            overcome career-related challenges, enhance
                            professional success, and mitigate obstacles in your
                            career path. From gemstone recommendations and
                            mantra chanting to planetary propitiation and ritual
                            ceremonies, our remedies are tailored to address
                            your specific career concerns and objectives.
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
                        <div className={css.flex_1}>
                            <h1
                                style={{
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                Get Started Today
                            </h1>
                            <h1
                                style={{
                                    color: '#9a5c23',
                                    paddingBottom: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                Acharya Ganesh for Career Predictions ?
                            </h1>

                            <ol style={{ padding: '20px' }}>
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Expertise:
                                    </span>
                                    Acharya Ganesh brings over years of
                                    experience and profound knowledge in
                                    astrology and career guidance, ensuring
                                    accurate and insightful predictions and
                                    remedies.
                                </li>
                                <br />
                                <li>
                                    <span style={{ fontWeight: '900' }}>
                                        Accuracy:
                                    </span>
                                    Our career predictions are based on
                                    authentic Vedic astrology principles and
                                    time-tested techniques, providing you with
                                    reliable and trustworthy guidance for your
                                    professional journey.
                                </li>
                            </ol>
                        </div>
                        <ol>
                            <li>
                                <span style={{ fontWeight: '900' }}>
                                    Empowerment:
                                </span>{' '}
                                We empower you to take control of your career
                                destiny by offering practical solutions,
                                actionable insights, and personalized guidance
                                tailored to your individual needs and
                                circumstances.
                            </li>
                            <br />
                            <li>
                                <span style={{ fontWeight: '900' }}>
                                    Confidentiality:
                                </span>{' '}
                                We respect your privacy and confidentiality,
                                ensuring that all information shared during
                                consultations remains strictly confidential and
                                protected.
                            </li>
                            <br />
                            <li>
                                <span style={{ fontWeight: '900' }}>
                                    Support:
                                </span>{' '}
                                Our dedicated team of astrologers is committed
                                to supporting you every step of the way,
                                providing ongoing guidance, support, and
                                encouragement as you navigate your professional
                                path
                            </li>
                        </ol>
                    </div>
                    <div
                        className={css.column}
                        style={{ textAlign: 'center', fontSize: '18px' }}
                    >
                        <h1 style={{ color: '#9a5c23', paddingBottom: '20px' }}>
                            Get Started Today
                        </h1>
                        <p style={{ textAlign: 'start' }}>
                            Unlock the secrets of your professional destiny with
                            career predictions by Acharya Ganesh. Schedule a
                            consultation today to gain valuable insights,
                            guidance, and remedies to support your career
                            success and fulfillment. Whether you’re at a
                            crossroads in your career or seeking to maximize
                            your potential, we’re here to help you achieve your
                            professional goals with confidence and clarity.
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
                            <div className={css.column}>
                                <h1
                                    style={{
                                        textAlign: 'center',
                                        color: '#9a5c23',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    How to Schedule an Appointment for Career
                                    Predictions
                                </h1>
                                <p>
                                    Scheduling an appointment with Acharya
                                    Ganesh for our Career Predictions is simple
                                    and convenient. Follow these steps to book
                                    your appointment and embark on the journey
                                    of finding your perfect life partner:
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
                            alt="career-prediction-img"
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
