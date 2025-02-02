import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import IcChevronIcon from '../../assets/chevron-down.png';

import ImgHeaderBg from '../../assets/contact_main_bg.png';
import IcGlobe from '../../assets/globe.png';
import IcPin from '../../assets/location_pin.png';
import IcPhone from '../../assets/contact.png';
import IcEnvelope from '../../assets/envelope.png';
import ImgContactFormBg from '../../assets/contact_form_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { InputField } from '../../components/input-field/InputField';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [errorData, setErrorData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrorData({ ...errorData, [name]: '' });
        setFormData({ ...formData, [name]: value });
    };

    const handleValidation = () => {
        let error = false;
        const errors = {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        };

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            error = true;
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            error = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
            error = true;
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
            error = true;
        }
        if (!formData.service.trim()) {
            errors.service = 'Service is required';
            error = true;
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            error = true;
        }
        setErrorData(errors);
        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!handleValidation()) {
            try {
                const response = await APIHelper.createLead({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                });
                if (response?.data?.success) {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                    setErrorData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                    alert('Form submitted successfully!');
                } else {
                    alert('Error submitting form. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting in form:', error);
            }
        }
        setIsLoading(false);
    };

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
                        <div
                            style={{
                                backgroundImage: `url(${ImgContactFormBg})`,
                            }}
                            className={css.contact_form}
                        >
                            <div className={css.input_wrapper}>
                                <InputField
                                    value={formData.name}
                                    className={css.input}
                                    placeholder={'Name'}
                                    type={'text'}
                                    name={'name'}
                                    onchange={handleChange}
                                    error={errorData.name}
                                />
                                <InputField
                                    value={formData.email}
                                    className={css.input}
                                    placeholder={'Email'}
                                    type={'email'}
                                    name={'email'}
                                    onchange={handleChange}
                                    error={errorData.email}
                                />
                            </div>
                            <div className={css.input_wrapper}>
                                <InputField
                                    value={formData.phone}
                                    className={css.input}
                                    placeholder={'Phone No'}
                                    type={'text'}
                                    name={'phone'}
                                    onchange={handleChange}
                                    error={errorData.phone}
                                />
                                {/* <InputField
                                    className={css.input}
                                    placeholder={'services'}
                                /> */}
                                <div className={css.input_container}>
                                    <select
                                        className={css.select}
                                        name={'service'}
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={
                                            formData.service
                                                ? {}
                                                : {
                                                      color: '#b5afa8',
                                                  }
                                        }
                                    >
                                        <option value={''}>
                                            Select Service
                                        </option>
                                        <option value="Astrology">
                                            Astrology
                                        </option>
                                        <option value="Vastu">Vastu</option>
                                        <option value="Astro-Vastu">
                                            Astro-Vastu
                                        </option>
                                        <option value="Consultation">
                                            Consultation
                                        </option>
                                        <option value="Courses">Courses</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errorData.service && (
                                        <p className={css.error}>
                                            {errorData.service}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={css.input_wrapper}>
                                <div className={css.input_container}>
                                    <textarea
                                        name={'message'}
                                        placeholder={
                                            'Please Write Any Note Here...'
                                        }
                                        onChange={handleChange}
                                    ></textarea>
                                    {errorData.message && (
                                        <p className={css.error}>
                                            {errorData.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <PrimaryButton onClick={handleSubmit}>
                                Submit
                            </PrimaryButton>
                        </div>
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
