import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { RecentSpirituality } from '../recents/RecentSpirituality';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
import { Images } from '../../../../util/constants';
export const ArticleSidebar = () => {
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={Images.default.ImgConsultation}
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
