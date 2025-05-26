import React, { useEffect, useState } from 'react';
import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { HorizontalBorder, Spacer } from '../../components/spacer/Spacer';
import CitationBanner from '../../assets/citation-banner.png';
import ImgConsultation from '../../assets/consultation_poster.jpg';
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import ContactForm from '../../components/contact-form/ContactForm.jsx';
import ArrowCircle from '../../assets/arrow_circle.png';
import Blog from '../../components/blog/Blog.jsx';
import parse from 'html-react-parser';
import { APIHelper } from '../../util/APIHelper.js';
import { htmlToText } from 'html-to-text';
import SEO from '../../Seo.jsx';
import Loader from '../../components/loader/Loader.jsx';

const CitationDetail = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [citation, setCitation] = useState(null);
    useEffect(() => {
        if (searchParams?.get('preview')) {
            setCitation(state?.data);
            return;
        }
        getCitation();
    }, [slug]);

    const getCitation = async () => {
        try {
            const response = await APIHelper.getCitations({
                slug: slug,
                status: 1,
            });

            if (!response?.data?.data?.length) {
                navigate('/citation');
            }
            setCitation(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };

    // const faqList = [
    //     {
    //         question: `How do I find a reliable ${citation?.type || '-'} in ${
    //             citation?.location
    //         }?`,
    //         answer: ` Look for experienced consultants with good reviews, proper certifications, and a proven track record in ${citation?.location}.`,
    //     },
    //     {
    //         question: `What services are included in a ${
    //             citation?.type || '-'
    //         } in ${citation?.location}?`,
    //         answer: `Services typically include site inspection, detailed analysis, recommendations, and follow-up guidance.`,
    //     },
    //     {
    //         question: `How much does a ${citation?.type || '-'} cost in ${
    //             citation?.location
    //         }?`,
    //         answer: ` Consultation fees vary based on property size and type of service required. Contact for detailed pricing.`,
    //     },
    //     {
    //         question: `What should I expect during a ${
    //             citation?.type || '-'
    //         } in ${citation?.location}?`,
    //         answer: ` Expect a thorough property assessment, energy flow analysis, and detailed recommendations for improvements.`,
    //     },
    //     {
    //         question: `How can I book a ${citation?.type || '-'} in ${
    //             citation?.location
    //         }?`,
    //         answer: `Contact us through our website, phone, or email to schedule a consultation at your convenience.`,
    //     },
    // ];

    const keywords = citation?.Focus_Keyphrase
        ? `${citation?.Focus_Keyphrase}, ${citation?.Slug}`
        : citation?.Slug;
    const description = `View detailed citations and references for ${keywords} at acharya-ganesh. Trusted and verified sources for astrology, numerology, and spiritual guidance.`;
    const title = citation?.Meta_SteName;
    const metaTitle = citation?.Meta_Title;

    if (!citation) return <Loader style={{ position: 'fixed' }} />;

    return (
        <PageContainer className={css.container}>
            <SEO
                keywords={keywords}
                description={description}
                title={title}
                metaTitle={metaTitle}
            />
            <div
                style={{ backgroundImage: `url(${CitationBanner})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>{htmlToText(citation?.Title || ' ')}</h3>
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
                        <PrimaryButton
                            className={css.consult_button}
                            onClick={() => {
                                navigate('/book-consultation#consult');
                            }}
                        >
                            Consult Hanish Bagga TOday
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.citation_detail_container}>
                    <div className={css.citation_detail_wrapper}>
                        <div className="html-content">
                            {parse(citation?.Description || '')}
                        </div>
                        {/* <div className={`html-content`}>
                        //     <h1>
                        //         <strong>
                        //             Best {citation?.type || '-'} in{' '}
                        //             {citation?.location}
                        //         </strong>
                        //     </h1>
                        //     <p>
                        //         <span>
                        //             {' '}
                        //             {citation?.type || '-'} is a study of
                        //             architecture that for the most part focuses
                        //             on the directions of a Residential or
                        //             Commercial space along with joining each of
                        //             the five natural elements to make a friendly
                        //             setting/air assisting the tenants with
                        //             having harmony, satisfaction, and
                        //             sufficiency of health or wellbeing.
                        //         </span>
                        //     </p>
                        //     <p>
                        //         <span>A </span>
                        //         <b> {citation?.type || '-'} </b>
                        //         <span> examines the current </span>
                        //         <span>
                        //             {' '}
                        //             {citation?.type || '-'} for a Home or
                        //             commercial place and suggests significant{' '}
                        //         </span>
                        //         <b>
                        //             {' '}
                        //             {citation?.type || '-'} Shastra Consultant
                        //         </b>
                        //         <span>
                        //             {' '}
                        //             to mollify all Vastu-related imbalances in
                        //             the place. A definitive reason behind the
                        //             utilization of{' '}
                        //             <a href="/services/astro-vastu">
                        //                 <strong>Vastu</strong>
                        //             </a>{' '}
                        //             Principles is to create valuable benefits
                        //             that go for the inhabitants of a Vastu
                        //             Shastra home or owner/business of a
                        //             commercial place.
                        //         </span>
                        //     </p>
                        //     <p>
                        //         <span>
                        //             The son of Vishwakarma, Mamuni Mayan
                        //             invented{' '}
                        //         </span>
                        //         <b> {citation?.type || '-'} Shastra</b>
                        //         <span>
                        //             . It is the reported piece of{' '}
                        //             {citation?.type || '-'} Vidya.{' '}
                        //             {citation?.type || '-'} Vidya information is
                        //             an assortment of methods of reasoning and
                        //             theories that are very flexible. Ancient{' '}
                        //             {citation?.type || '-'} Shastra belief
                        //             systems include those for the planning and
                        //             design of temples, houses, workplaces,
                        //             cities, urban communities, gardens, streets,
                        //             shops, and other public places.
                        //         </span>
                        //     </p>
                        //     <h1>
                        //         <b>
                        //             Top {citation?.type || '-'} in{' '}
                        //             {citation?.location}
                        //         </b>
                        //     </h1>
                        //     <p>
                        //         <span>
                        //             {' '}
                        //             {citation?.location} is a city of joy for
                        //             its deep encapsulation of culture, love,
                        //             secret, respect, and most certainly some
                        //             astonishing sweet delicacies.{' '}
                        //             {citation?.location}, as it is currently
                        //             referred to, is a city that maintains an
                        //             ideal juxtaposition between the old world
                        //             and the modern one.
                        //         </span>
                        //     </p>
                        //     <p>
                        //         <span>
                        //             Hanish Bagga is one of the most famous and{' '}
                        //         </span>
                        //         <b>Best</b>{' '}
                        //         <b>
                        //             {' '}
                        //             {citation?.type || '-'}s in{' '}
                        //             {citation?.location}
                        //         </b>
                        //         <span>
                        //             {' '}
                        //             to solve any Vastu-related question for
                        //             Home, Office, Processing plant, and so on.
                        //             If a property is constructed under the top
                        //             of the five elements, this makes the design
                        //             a place of harmony, thriving, and serenity.
                        //         </span>
                        //     </p>
                        //     <p>
                        //         <span>
                        //             These multitudes of issues are perhaps a
                        //             result of specific explicit{' '}
                        //             {citation?.type || '-'} faults. There are
                        //             simple solutions for correcting those
                        //             faults, which require no demolition.
                        //         </span>
                        //     </p>
                        //     <h3>
                        //         <b>
                        //             Some of the common problems faced due to{' '}
                        //             {citation?.type || '-'} imbalance:
                        //         </b>
                        //     </h3>
                        //     <ul>
                        //         <li>
                        //             <span></span>
                        //             <span>
                        //                 <b>Financial: </b>
                        //             </span>
                        //             Absence of orders, problems at work, low
                        //             income, no opportunities, debts, staleness,
                        //             payments stuck, and so on.
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Marital Discord</b>
                        //             <span>
                        //                 : Issues with a spouse, petty arguments,
                        //                 turmoil, stress, bluntness.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Family Issues</b>
                        //             <span>
                        //                 : Issues with in-laws, children,
                        //                 companions, family politics, and
                        //                 arguments.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Children’s Studies</b>
                        //             <span>
                        //                 : Absence of concentration, low grades,
                        //                 bad behavior and no interest in studies.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Physical Health</b>
                        //             <span>
                        //                 : Low immunity, illness, serious
                        //                 illness.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Mental Health</b>
                        //             <span>
                        //                 : Melancholy, tension, low moods,
                        //                 dormancy, lack of certainty.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Fruitfulness and Progeny</b>
                        //             <span>
                        //                 : Problem in conceiving, miscarriages.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span></span>
                        //             <b>Government</b>
                        //             <span>
                        //                 : Property disputes, legal cases,
                        //                 harassment.
                        //             </span>
                        //         </li>
                        //     </ul>
                        //     <p>
                        //         <span>
                        //             These multitudes of issues are perhaps a
                        //             result of specific explicit{' '}
                        //             {citation?.type || '-'} faults. There are
                        //             simple solutions for correcting those
                        //             faults, which require no demolition.
                        //         </span>
                        //     </p>
                        //     <h1>
                        //         <b> {citation?.type || '-'} Tips for Home:</b>
                        //     </h1>
                        //     <ul>
                        //         <li>
                        //             <span>
                        //                 The main door should continuously be in
                        //                 the north heading which is viewed as
                        //                 propitious.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 The bedroom and bed should be in the
                        //                 southwest direction and stay away from
                        //                 the mirror or television to face your
                        //                 bed.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 Pooja room is a spot for meditation and
                        //                 harmony for you, so it should be in the
                        //                 east or northeast heading of your home
                        //                 which is perfect for spiritual pursuits.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 The kitchen is amazing when kept in the
                        //                 southeast direction.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>
                        //                 Try not to put your stove close to the
                        //                 water sink. Your kitchen should not face
                        //                 any washroom either, and guarantee it
                        //                 never shares a typical wall with it.
                        //                 Decisively place your refrigerator in
                        //                 the south-west direction of your kitchen
                        //                 space.
                        //             </span>
                        //         </li>
                        //         <li>
                        //             <span>To consult Hanish Bagga, </span>
                        //             <b> {citation?.type || '-'} Expert</b>
                        //             <span>
                        //                 , just contact his team at{' '}
                        //                 <a href="tel:+917300004325">
                        //                     <strong>+91 7300004325</strong>
                        //                 </a>
                        //                 ,{' '}
                        //                 <a href="tel:+917300004326">
                        //                     <strong>+91 7300004326</strong>
                        //                 </a>
                        //                 , or fill in your details at{' '}
                        //                 <a href="https://acharyaganesh.com/">
                        //                     <strong>
                        //                         www.acharyaganesh.com.
                        //                     </strong>
                        //                 </a>
                        //             </span>
                        //         </li>
                        //     </ul>
                        // </div>
                        // <div className={css.faq_section}>
                        //     <h1>
                        //         <strong>
                        //             FAQs about Best {citation?.type || '-'} in{' '}
                        //             {citation?.location}:
                        //         </strong>
                        //     </h1>

                        //     {faqList?.map((faq, i) => (
                        //         <div className={css.faq_item}>
                        //             <button
                        //                 className={css.faq_question}
                        //                 onClick={() =>
                        //                     showFaq == i
                        //                         ? setShowFaq(null)
                        //                         : setShowFaq(i)
                        //                 }
                        //             >
                        //                 <p>
                        //                     Q{i + 1}. {faq?.question}
                        //                 </p>
                        //                 <span className={css.collapse}>
                        //                     <img src={ArrowCircle} alt="+" />
                        //                 </span>
                        //             </button>
                        //             {showFaq == i && (
                        //                 <div className={css.faq_answer}>
                        //                     <p>{faq?.answer}</p>
                        //                 </div>
                        //             )}
                        //         </div>
                        //     ))}
                        </div>} */}
                    </div>
                    <div className={css.sidebar_container}>
                        <img
                            src={ImgConsultation}
                            alt={'Consultation poster'}
                        />
                        <ContactForm />
                    </div>
                </div>
                <Blog />
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default CitationDetail;
