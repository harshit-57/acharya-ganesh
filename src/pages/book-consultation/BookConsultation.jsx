
import { PageContainer } from "../../components/page-container/PageContainer";
import { TopBar } from "../../components/top-bar/TopBar";
import css from './style.module.css';
import ImgHeaderBg from '../../assets/book_consultation_header.png';
import HanishImg from '../../assets/book_consultation_hanish_bagga.png';
import { Footer } from "../../components/footer/Footer";
import Testimonial from "../home/components/testimonials/Testimonials";
import { Spacer } from "../../components/spacer/Spacer";
import BookingSteps from "./components/get-in-touch/GetTouch";
import WhyChooseUs from "./components/why-choose-us/WhyChoose";
import FAQSection from "./components/faq-section/FaqSection";
import { InputField } from "../../components/input-field/InputField";
import { PrimaryButton } from "../../components/primary-button/PrimaryButton";
import GetInTouchBg from '../../assets/book_consultatio_form.png';


const BookConsultation = () => {

    return (


        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />

            </div>

            <div className={css.WhyChooseUs}>
                <WhyChooseUs />
            </div>
            <BookingSteps />
            <div className={css.Hanish_info}>
                <div className={css.row}>
                    <div className={css.about_description_container}>
                        <h2>Hanish Bagga</h2>
                        <Spacer vertical={'4px'} />
                        <h4>Founder & Director at Acharya Ganesh</h4>
                        <Spacer vertical={'24px'} />
                        <p>
                            Astrologer Hanish Bagga, the esteemed founder
                            and director of Acharya Ganesh, is celebrated
                            for his innovative work in astrology, Vastu, and
                            related fields. With over a decade of
                            experience, Jyotish Hanish Bagga transitioned
                            from a successful corporate career to pursue his
                            passion in astrology, driven by a deeper
                            calling. Originating from Rajasthan, his
                            upbringing infused him with a respect for
                            ancient wisdom and cosmic influences, which he
                            applies in guiding individuals toward
                            enlightenment and growth. Specializing in Astro
                            Vastu, he adeptly combines Vedic astrology with
                            Lal Kitab remedies to enhance life’s prosperity
                            and happiness. As an educator, Astrologer Hanish
                            Bagga is dedicated to sharing his knowledge,
                            offering courses for all levels, and initiating
                            a free Lal Kitab astrology course to give back
                            to the community.
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

                    <div className={css.getintouch_heading}>
                        Get In Touch
                    </div>
                    <div className={css.getintouch_row}>
                        <div className={css.row_info}>
                            <div className={css.row_info_heading}>
                            Unsure About Booking? Let Us Help You Make the Right Choice!
                            </div>
                            <div className={css.row_info_heading1}>
                            We’ll provide all the necessary info and ensure you’re fully confident in your decision.
                            </div>
                            <div className={css.row_info_heading2}> 
                            Kindly provide the required details, and our dedicated team will respond with the most suitable service tailored to your needs within 24 hours.
                            </div>
                        </div>
                        <div className={css.rowform}>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.testimonial}>
                <Testimonial />
            </div>

            <Footer />

        </PageContainer>
    )
}

export default BookConsultation;