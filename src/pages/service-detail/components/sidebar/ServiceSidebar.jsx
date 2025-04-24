import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
import { Images } from '../../../../util/constants';
export const ServiceSidebar = ({ service }) => {
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={service?.Image || Images.default.ImgConsultation}
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
