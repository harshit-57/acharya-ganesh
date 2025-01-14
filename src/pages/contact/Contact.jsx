import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import IcChevronIcon from '../../assets/chevron-down.png';

import ImgHeaderBg from '../../assets/contact_header_bg.png';
import IcGlobe from '../../assets/globe.png';
import IcPin from '../../assets/location_pin.png';
import IcPhone from '../../assets/contact.png';
import IcEnvelope from '../../assets/envelope.png';
import ImgContactFormBg from '../../assets/contact_form_bg.png';
import ImgDiscoverDelhi from '../../assets/discover_delhi.png';
import ImgDiscoverKolkata from '../../assets/discover_kolkata.png';
import ImgDiscoverMumbai from '../../assets/discover_mumbai.png';
import ImgDiscoverBanglore from '../../assets/discover_banglore.png';
import ImgDiscoverChennai from '../../assets/discover_chennai.png';
import ImgDiscoverHydrabad from '../../assets/discover_hydrabad.png';
import ImgDiscoverPune from '../../assets/discover_pune.png';
import ImgDiscoverAhemdabad from '../../assets/discover_ahemdabad.png';
import { Spacer } from '../../components/spacer/Spacer';
import { InputField } from '../../components/input-field/InputField';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
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
            </Helmet>
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
                            <ContactInfo icon={IcPin} title={'Email Us'}>
                                Hall No. 201 Plot No. 959 Niti Khand 1, Opposite
                                Orange County, Indirapuram Ghaziabad, 201014
                            </ContactInfo>
                            <ContactInfo icon={IcPhone} title={'Contact Us'}>
                                (+91) 73000 04325, (+91) 73000 04326
                            </ContactInfo>
                            <ContactInfo icon={IcEnvelope} title={'Email Us'}>
                                info@acharyaganesh.com,
                                connect@acharyaganesh.com
                            </ContactInfo>
                        </div>
                    </div>
                    <div className={css.column}>
                        <div
                            style={{
                                backgroundImage: `url(${ImgContactFormBg})`,
                            }}
                            className={css.contact_form}
                        >
                            <div className={css.input_wrapper}>
                                <InputField
                                    className={css.input}
                                    placeholder={'Name'}
                                />
                                <InputField
                                    className={css.input}
                                    placeholder={'Email'}
                                />
                            </div>
                            <div className={css.input_wrapper}>
                                <InputField
                                    className={css.input}
                                    placeholder={'Phone No'}
                                />
                                <InputField
                                    className={css.input}
                                    placeholder={'services'}
                                />
                            </div>
                            <div className={css.input_wrapper}>
                                <textarea
                                    name={'note'}
                                    placeholder={
                                        'Please Write Any Note Here...'
                                    }
                                ></textarea>
                            </div>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div
                    className={[css.row, css.discover_cities_container].join(
                        ' '
                    )}
                >
                    <h3 className={css.discover_heading}>
                        Discover Best Astrologers in your City
                    </h3>
                    <div className={css.city_container}>
                        <img
                            src={ImgDiscoverDelhi}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverDelhi}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverMumbai}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverBanglore}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverChennai}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverHydrabad}
                            alt={'Discover city icon'}
                        />
                        <img src={ImgDiscoverPune} alt={'Discover city icon'} />
                        <img
                            src={ImgDiscoverKolkata}
                            alt={'Discover city icon'}
                        />
                        <img
                            src={ImgDiscoverAhemdabad}
                            alt={'Discover city icon'}
                        />
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
