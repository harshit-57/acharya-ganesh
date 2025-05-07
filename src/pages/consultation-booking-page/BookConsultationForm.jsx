import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import css from './style.module.css';
import React, { useState, useRef } from 'react';
import { Footer } from '../../components/footer/Footer';
import FormCompnent from './component/form-component/FormComponent';
import SEO from '../../Seo';
import { useLocation } from 'react-router-dom';
import useApp from '../../hook/useApp';

const FormConsultation = () => {
    const {
        theme: { Images },
    } = useApp();
    const { state } = useLocation();

    const keywords =
        'consultation booking, appointment booking, online booking, astrology booking, numerology booking, kundali matching booking, horoscope reading booking';
    const description =
        'Schedule your consultation with acharyaganesh for astrology, numerology, kundali matching, and horoscope readings. Easy and convenient online booking.';

    return (
        <PageContainer className={css.container}>
            <SEO
                keywords={keywords}
                description={description}
                checkout={true}
            />
            <div
                style={{
                    backgroundImage: `url(${Images.ImgHeaderBgBookConsult})`,
                }}
                className={css.header}
            >
                <TopBar />
            </div>
            <div className={css.bookconsultation}>
                <div className={css.row}>
                    <div className={css.row_info}>
                        <div className={css.row_info_heading}>
                            <h2>Book Your Consultation</h2>
                            <h4>
                                Kindly Fill in your Full Name, Date of Birth,
                                Place of Birth, Time of Birth, AM/PM and Gender.
                            </h4>
                        </div>
                        <div className={css.row_info_content}>
                            <div>
                                <h3>Contact Us</h3>
                                <div className={css.row_info_content_tel}>
                                    <a href="tel:+917300004325">
                                        <span> (+91) 73000 04325</span>,
                                    </a>
                                    <a href="tel:+917300004326">
                                        <span> (+91) 73000 04326</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <div className={css.row_info_content_email}>
                                    <a href="mailto:info@acharyaganesh.com">
                                        <span> info@acharyaganesh.com</span>,
                                    </a>
                                    <a href="mailto:connect@acharyaganesh.com">
                                        <span> connect@acharyaganesh.com</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3>Terms & Conditions:</h3>
                                <h4>
                                    You agree to share information entered on
                                    this page with Acharya Ganesh (owner of this
                                    page) and Razorpay, adhering to applicable
                                    laws.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={css.row_form}>
                        <FormCompnent state={state} />
                    </div>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

export default FormConsultation;
