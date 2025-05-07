import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
import useApp from '../../../../hook/useApp';
export const ServiceSidebar = ({ service }) => {
    const {
        theme: { Images },
    } = useApp();
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={service?.Image || Images.ImgConsultation}
                alt={service?.ImageAlt || 'Consultation poster'}
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
