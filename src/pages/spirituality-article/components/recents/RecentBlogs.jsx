import css from './style.module.css';
import ImgConsultation from '../../../../assets/consultation_poster_2.jpg';
import { InputField } from '../../../../components/input-field/InputField';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import ImgPlaceholderThumbnail from '../../../../assets/recent_blog_thumbnail_placeholder.jpg';
import ContactForm from '../../../../components/contact-form/ContactForm';
export const RecentBlogs = () => {
    return (
        <div className={css.container}>
            <img src={ImgConsultation} alt={'Consultation poster'} />
            <div className={css.recent_container}>
                <h3>Recent Blogs</h3>
                <div className={css.recent_blog}>
                    <img src={ImgPlaceholderThumbnail} alt={''} />
                    <p>
                        Cosmic EQ: The Shocking Truth About Your Moon Sign and
                        Emotional Mastery
                    </p>
                </div>
                <div className={css.recent_blog}>
                    <img src={ImgPlaceholderThumbnail} alt={''} />
                    <p>
                        Cosmic EQ: The Shocking Truth About Your Moon Sign and
                        Emotional Mastery
                    </p>
                </div>
                <div className={css.recent_blog}>
                    <img src={ImgPlaceholderThumbnail} alt={''} />
                    <p>
                        Cosmic EQ: The Shocking Truth About Your Moon Sign and
                        Emotional Mastery
                    </p>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};
