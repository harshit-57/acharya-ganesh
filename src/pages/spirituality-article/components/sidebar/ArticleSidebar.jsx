import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { RecentSpirituality } from '../recents/RecentSpirituality';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
import useApp from '../../../../hook/useApp';
export const ArticleSidebar = () => {
    const {
        theme: { Images },
    } = useApp();
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <img
                src={Images.ImgConsultation}
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
