import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import css from './style.module.css';
import ImgHeaderBg from '../../assets/book_consultation_header.png';
import HanishImg from '../../assets/book_consultation_hanish_bagga.png';
import { Footer } from '../../components/footer/Footer';
import Testimonial from '../home/components/testimonials/Testimonials';
import { Spacer } from '../../components/spacer/Spacer';
import BookingSteps from './components/step-consultation/StepsConsultation';
import WhyChooseUs from './components/why-choose-us/WhyChoose';
import FAQSection from './components/faq-section/FaqSection';
import { InputField } from '../../components/input-field/InputField';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import GetInTouchBg from '../../assets/book_consultatio_form.png';
import MainContactForm from '../../components/main-contact-form/Contact';
import SEO from '../../Seo';
import { Navigation } from '../../components/navigation/Navigation';

const BookConsultation = () => {
    const description =
        'Book a personalized consultation with acharyaganesh for astrology, numerology, kundali matching, and horoscope readings. Get expert guidance tailored to your needs.';
    const keywords =
        'book consultation, schedule appointment, online consultation, astrology consultation, numerology consultation, kundali matching, horoscope reading, vedic astrology consultation';
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} />
            <div
                // style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <img src={ImgHeaderBg} alt="header" className={css.headerImg} />
                <TopBar />
                <div className={css.navigation}>
                    <Navigation />
                </div>
            </div>

            <div className={css.WhyChooseUs}>
                <WhyChooseUs />
            </div>
            <div className={css.BookingSteps}>
                <BookingSteps />
            </div>
            <div className={css.Hanish_info}>
                <div className={css.row}>
                    <div className={css.about_description_container}>
                        <h2>Hanish Bagga</h2>
                        <Spacer vertical={'4px'} />
                        <h4>Founder & Director at Acharya Ganesh</h4>
                        <Spacer vertical={'24px'} />
                        <p>
                            I’m Hanish Bagga, an astrologer with over 17 years
                            of experience and 40,000+ consultations worldwide.
                            My approach blends deep astrological insight with a
                            genuine commitment to helping you align with your
                            true purpose.
                            <br />
                            <br />
                            I believe astrology is not just about predicting the
                            future—it’s about empowering you to make informed,
                            confident decisions. Whether you’re seeking clarity
                            in your career, relationships, or life path, I
                            provide personalized guidance tailored to your
                            unique journey.
                            <br />
                            <br />
                            Let’s unlock the potential the stars have in store
                            for you, and create the life you’re meant to lead.
                        </p>
                    </div>
                    <img
                        className={css.person_image}
                        src={HanishImg}
                        alt={'Hanish Bagga image'}
                    />
                </div>
            </div>

            <div className={css.faqsection}>
                <FAQSection />
            </div>
            <div className={css.getintouch}>
                <div className={css.getintouch_container}>
                    <div className={css.getintouch_heading}>Get In Touch</div>
                    <div className={css.getintouch_row}>
                        <div className={css.row_info}>
                            <div className={css.row_info_heading}>
                                Unsure About Booking? Let Us Help You Make the
                                Right Choice!
                            </div>
                            <div className={css.row_info_heading1}>
                                We’ll provide all the necessary info and ensure
                                you’re fully confident in your decision.
                            </div>
                            <div className={css.row_info_heading2}>
                                Kindly provide the required details, and our
                                dedicated team will respond with the most
                                suitable service tailored to your needs within
                                24 hours.
                            </div>
                        </div>
                        {/* <div className={css.rowform}>
                            <div
                                style={{ backgroundImage: `url(${GetInTouchBg})` }}
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
                        </div> */}
                        <MainContactForm />
                    </div>
                </div>
            </div>
            <div className={css.testimonial}>
                <Testimonial />
            </div>

            <Footer />
        </PageContainer>
    );
};

export default BookConsultation;
