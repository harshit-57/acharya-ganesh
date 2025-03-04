import css from './style.module.css';
import ImgConsultation from '../../../../assets/consult_with_astrologer.jpg';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { RecentSpirituality } from '../recents/RecentSpirituality';
import { Socials } from '../socials/Socials';
import { Shop } from '../shop/Shop';
export const ArticleSidebar = () => {
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={ImgConsultation}
                alt={'Consultation poster'}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/contact')}
            />
            <Socials />
            <RecentSpirituality />
            <ContactForm />
            <Shop />
        </div>
    );
};
