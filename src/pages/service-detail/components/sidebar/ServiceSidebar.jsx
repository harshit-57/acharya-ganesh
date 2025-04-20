import css from './style.module.css';
import ImgConsultation from '../../../../assets/consult_with_astrologer.jpg';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
export const ServiceSidebar = ({ service }) => {
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={service?.Image || ImgConsultation}
                alt={'Consultation poster'}
                style={{ cursor: 'pointer' }}
                onClick={() =>
                    service?.Link
                        ? window.open(service?.Link, '_blank')
                        : navigate('/contact')
                }
            />
            <Socials />
            <ContactForm />
            <Shop />
        </div>
    );
};
