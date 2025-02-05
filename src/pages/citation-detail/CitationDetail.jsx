import React from 'react';
import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { HorizontalBorder, Spacer } from '../../components/spacer/Spacer';
import CitationBanner from '../../assets/citation-banner.png';
import ImgConsultation from '../../assets/consultation_poster.jpg';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import ContactForm from '../../components/contact-form/ContactForm.jsx';

const CitationDetail = () => {
    const { slug, location } = useParams();

    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${CitationBanner})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>
                            Consult With The Best Vastu Consultant in Kolkata
                        </h3>
                        <div className={css.stats_container}>
                            <p>
                                15+{' '}
                                <span>
                                    Years of <br /> experience
                                </span>
                            </p>
                            <p>
                                6k+{' '}
                                <span>
                                    Graduated
                                    <br /> Students
                                </span>
                            </p>
                            <p>
                                30k+{' '}
                                <span>
                                    Call
                                    <br /> Consultation
                                </span>
                            </p>
                        </div>
                        <PrimaryButton className={css.consult_button}>
                            Consult Hanish Bagga TOday
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.citation_detail_container}>
                    <div className={css.citation_detail_wrapper}>
                        <div className={`html-content`}>
                            <h1>
                                <strong>
                                    Best Vastu Consultant in Kolkata
                                </strong>
                            </h1>
                            <p>
                                <span>
                                    Vastu is a study of architecture that for
                                    the most part focuses on the directions of a
                                    Residential or Commercial space along with
                                    joining each of the five natural elements to
                                    make a friendly setting/air assisting the
                                    tenants with having harmony, satisfaction,
                                    and sufficiency of health or wellbeing.
                                </span>
                            </p>
                            <p>
                                <span>A </span>
                                <b>Vastu Consultant</b>
                                <span> examines the current </span>
                                <span>
                                    {' '}
                                    Vastu for a Home or commercial place and
                                    suggests significant{' '}
                                </span>
                                <b>Vastu Shastra Consultant</b>
                                <span>
                                    {' '}
                                    to mollify all Vastu-related imbalances in
                                    the place. A definitive reason behind the
                                    utilization of{' '}
                                    <a href="/services/astro-vastu">
                                        <strong>Vastu</strong>
                                    </a>{' '}
                                    Principles is to create valuable benefits
                                    that go for the inhabitants of a Vastu
                                    Shastra home or owner/business of a
                                    commercial place.
                                </span>
                            </p>
                            <p>
                                <span>
                                    The son of Vishwakarma, Mamuni Mayan
                                    invented{' '}
                                </span>
                                <b>Vastu Shastra</b>
                                <span>
                                    . It is the reported piece of Vastu Vidya.
                                    Vastu Vidya information is an assortment of
                                    methods of reasoning and theories that are
                                    very flexible. Ancient Vastu Shastra belief
                                    systems include those for the planning and
                                    design of temples, houses, workplaces,
                                    cities, urban communities, gardens, streets,
                                    shops, and other public places.
                                </span>
                            </p>
                            <h1>
                                <b>Top Vastu Consultant in Kolkata</b>
                            </h1>
                            <p>
                                <span>
                                    Kolkata is a city of joy for its deep
                                    encapsulation of culture, love, secret,
                                    respect, and most certainly some astonishing
                                    sweet delicacies. Kolkata, as it is
                                    currently referred to, is a city that
                                    maintains an ideal juxtaposition between the
                                    old world and the modern one.
                                </span>
                            </p>
                            <p>
                                <span>
                                    Hanish Bagga is one of the most famous and{' '}
                                </span>
                                <b>Best</b> <b>Vastu Consultants in Kolkata</b>
                                <span>
                                    {' '}
                                    to solve any Vastu-related question for
                                    Home, Office, Processing plant, and so on.
                                    If a property is constructed under the top
                                    of the five elements, this makes the design
                                    a place of harmony, thriving, and serenity.
                                </span>
                            </p>
                            <p>
                                <span>
                                    These multitudes of issues are perhaps a
                                    result of specific explicit Vastu faults.
                                    There are simple solutions for correcting
                                    those faults, which require no demolition.
                                </span>
                            </p>
                            <h3>
                                <b>
                                    Some of the common problems faced due to
                                    Vastu imbalance:
                                </b>
                            </h3>
                            <ul>
                                <li>
                                    <span></span>
                                    <span>
                                        <b>Financial: </b>
                                    </span>
                                    Absence of orders, problems at work, low
                                    income, no opportunities, debts, staleness,
                                    payments stuck, and so on.
                                </li>
                                <li>
                                    <span></span>
                                    <b>Marital Discord</b>
                                    <span>
                                        : Issues with a spouse, petty arguments,
                                        turmoil, stress, bluntness.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Family Issues</b>
                                    <span>
                                        : Issues with in-laws, children,
                                        companions, family politics, and
                                        arguments.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Children’s Studies</b>
                                    <span>
                                        : Absence of concentration, low grades,
                                        bad behavior and no interest in studies.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Physical Health</b>
                                    <span>
                                        : Low immunity, illness, serious
                                        illness.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Mental Health</b>
                                    <span>
                                        : Melancholy, tension, low moods,
                                        dormancy, lack of certainty.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Fruitfulness and Progeny</b>
                                    <span>
                                        : Problem in conceiving, miscarriages.
                                    </span>
                                </li>
                                <li>
                                    <span></span>
                                    <b>Government</b>
                                    <span>
                                        : Property disputes, legal cases,
                                        harassment.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                <span>
                                    These multitudes of issues are perhaps a
                                    result of specific explicit Vastu faults.
                                    There are simple solutions for correcting
                                    those faults, which require no demolition.
                                </span>
                            </p>
                            <h1>
                                <b>Vastu Tips for Home:</b>
                            </h1>
                            <ul>
                                <li>
                                    <span>
                                        The main door should continuously be in
                                        the north heading which is viewed as
                                        propitious.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        The bedroom and bed should be in the
                                        southwest direction and stay away from
                                        the mirror or television to face your
                                        bed.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Pooja room is a spot for meditation and
                                        harmony for you, so it should be in the
                                        east or northeast heading of your home
                                        which is perfect for spiritual pursuits.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        The kitchen is amazing when kept in the
                                        southeast direction.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Try not to put your stove close to the
                                        water sink. Your kitchen should not face
                                        any washroom either, and guarantee it
                                        never shares a typical wall with it.
                                        Decisively place your refrigerator in
                                        the south-west direction of your kitchen
                                        space.
                                    </span>
                                </li>
                                <li>
                                    <span>To consult Hanish Bagga, </span>
                                    <b>Vastu Expert</b>
                                    <span>
                                        , just contact his team at{' '}
                                        <strong>
                                            +91 7300004325, 7300004326
                                        </strong>
                                        , or fill in your details at{' '}
                                        <a href="https://acharyaganesh.com/">
                                            <strong>
                                                www.acharyaganesh.com.
                                            </strong>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={css.faq_section}>
                            <h1>
                                <strong>
                                    FAQs about Best Vastu Consultant in Kolkata:
                                </strong>
                            </h1>
                            <div class="faq-item">
                                <button class="faq-question">
                                    Q1. How do I find a reliable Vastu
                                    consultant in Kolkata?
                                    <span class="plus">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>
                                        Look for experienced consultants with
                                        good reviews, proper certifications, and
                                        a proven track record in Kolkata.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question">
                                    Q2. What services are included in a Vastu
                                    consultation in Kolkata?
                                    <span class="plus">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>
                                        Services typically include site
                                        inspection, detailed analysis,
                                        recommendations, and follow-up guidance.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question">
                                    Q3. How much does a Vastu consultation cost
                                    in Kolkata?
                                    <span class="plus">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>
                                        Consultation fees vary based on property
                                        size and type of service required.
                                        Contact for detailed pricing.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question">
                                    Q4. What should I expect during a Vastu
                                    consultation in Kolkata?
                                    <span class="plus">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>
                                        Expect a thorough property assessment,
                                        energy flow analysis, and detailed
                                        recommendations for improvements.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question">
                                    Q5. How can I book a Vastu consultation in
                                    Kolkata?
                                    <span class="plus">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>
                                        Contact us through our website, phone,
                                        or email to schedule a consultation at
                                        your convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.sidebar_container}>
                        <img
                            src={ImgConsultation}
                            alt={'Consultation poster'}
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default CitationDetail;
