import { PageContainer } from "../../components/page-container/PageContainer";
import { TopBar } from "../../components/top-bar/TopBar";
import css from "./style.module.css";
import ImgHeaderBg from '../../assets/book_consultation_header.png';
import React, { useState, useRef } from 'react';
import { Footer } from "../../components/footer/Footer";
import FormCompnent from "./component/form-component/FormComponent";

  



const FormConsultation = () => {

    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />

            </div>
            <div className={css.bookconsultation}>
                <div className={css.row}>
                    <div className={css.row_info}>
                        <div className={css.row_info_heading}>
                            <h2>Book Your Consultation</h2>
                            <h4>Kindly Fill in your Full Name, Date of Birth, Place of Birth, Time of Birth, AM/PM and Gender.</h4>
                        </div>
                        <div className={css.row_info_content}>
                            <div>
                                <h3>Contact Us</h3>
                                <h4>(+91) 73000 04325, (+91) 73000 04326</h4>
                            </div>
                            <div>
                                <h3>Contact Us</h3>
                                <h4>(+91) 73000 04325, (+91) 73000 04326</h4>
                            </div>
                            <div>
                                <h3>Terms & Conditions:</h3>
                                <h4>You agree to share information entered on this page with Acharya Ganesh (owner of this page) and Razorpay, adhering to applicable laws.</h4>
                            </div>
                        </div>
                    </div>
                    <div className={css.row_form}>
                    <FormCompnent/>
                    </div>
                    
                </div>
            </div>
            <Footer />

        </PageContainer>
    )
}

export default FormConsultation;