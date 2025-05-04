import css from './style.module.css';
import { Images } from '../../../../util/constants';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../../../components/contact-form/ContactForm';
import { RecentBlogs } from '../recents/RecentBlog';
import { Socials } from '../../../../components/socials/Socials';
import { Shop } from '../../../../components/shop/Shop';
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
            <RecentBlogs />
            <ContactForm />
            <Shop />
        </div>
    );
};
