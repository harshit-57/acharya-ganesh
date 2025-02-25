import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcChevronIcon from '../../assets/chevron-down.png';
import ImgHeaderBg from '../../assets/contact_page_banner.jpg';
import IcGlobe from '../../assets/globe.png';
import IcPin from '../../assets/location_pin.png';
import IcPhone from '../../assets/contact.png';
import IcEnvelope from '../../assets/envelope.png';
import { Spacer } from '../../components/spacer/Spacer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
import MainContactForm from '../../components/main-contact-form/Contact';
import SEO from '../../Seo';
const Contact = () => {
    const keywords = "contact us, get in touch, customer support, astrology contact, numerology contact, spiritual guidance contact, kundali contact, horoscope contact";
    const description = "Contact with acharyaganesh for astrology, numerology, kundali matching, and daily horoscopes. We're here to help you on your spiritual journey.";
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description}/>
            {/* <Helmet>
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
                    href="https://courses.acharyaganesh.com/contactus"
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
            </Helmet> */}
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Contact</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>Contact</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.content_container}>
                <div className={css.row}>
                    <div className={css.column}>
                        <h2>Get in touch</h2>
                        <p>
                            If you have any questions, just reach out to us and
                            we’ll respond as soon as we can.
                        </p>
                        <Spacer vertical={'36px'} />
                        <div className={css.contact_info_container}>
                            <ContactInfo
                                icon={IcGlobe}
                                title={'Any Questions?'}
                            >
                                You can always send us a message or email.
                            </ContactInfo>
                            <a
                                href={`https://maps.google.com/?q=${'Hall No. 201 Plot No. 959 Niti Khand 1, Opposite Orange County, Indirapuram Ghaziabad, 201014'}`}
                            >
                                <ContactInfo icon={IcPin} title={'Address'}>
                                    Hall No. 201 Plot No. 959 Niti Khand 1,
                                    Opposite Orange County, Indirapuram
                                    Ghaziabad, 201014
                                </ContactInfo>
                            </a>
                            <ContactInfo icon={IcPhone} title={'Contact Us'}>
                                <a href="tel:+917300004325">
                                    <span> (+91) 73000 04325</span>,
                                </a>
                                <a href="tel:+917300004326">
                                    <span> (+91) 73000 04326</span>
                                </a>
                            </ContactInfo>
                            <ContactInfo icon={IcEnvelope} title={'Email Us'}>
                                <a href="mailto:info@acharyaganesh.com">
                                    <span> info@acharyaganesh.com</span>,
                                </a>
                                <a href="mailto:connect@acharyaganesh.com">
                                    <span> connect@acharyaganesh.com</span>
                                </a>
                            </ContactInfo>
                        </div>
                    </div>
                    <div className={css.column}>
                        <MainContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

const ContactInfo = ({ icon, title, description, children }) => {
    return (
        <div className={css.contact_info_row}>
            <img src={icon} alt={'Contact info icon'} />
            <div className={css.contact_info}>
                <h3>{title}</h3>
                <p>{description || children}</p>
            </div>
        </div>
    );
};

export default Contact;
