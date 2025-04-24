import { Link } from 'react-router-dom';
import css from './style.module.css';

import { Images } from '../../util/constants';
import { useNav } from '../../hook/useNav';

const NUMBER_ALT_1 = '+91 73000-04325';
const NUMBER_ALT_2 = '+91 73000-04326';
const COURSES_LINK = 'https://courses.acharyaganesh.com/';

export const TopBar = () => {
    const { showNav, setShowNav } = useNav();
    return (
        <div className={css.container}>
            <img
                className={css.menu_icon}
                src={Images.default.IcMenu}
                onClick={() => setShowNav(true)}
            />
            <Link to="/"><img className={css.logo} src={Images.default.Logo} /></Link>
            <div className={css.info_n_action_button_container}>
                <a href={`tel:${NUMBER_ALT_1}`}>
                    <ContactLabel icon={Images.default.IcPhone}>{NUMBER_ALT_1}</ContactLabel>
                </a>
                <a href={`tel:${NUMBER_ALT_1}`}>
                    <ContactLabel icon={Images.default.IcPhone}>{NUMBER_ALT_2}</ContactLabel>
                </a>
                <a target={'_blank'} href={COURSES_LINK}>
                    <ActionButton icon={Images.default.IcUser}>Log in</ActionButton>
                </a>
            </div>
        </div>
    );
};

const ContactLabel = ({ icon, className, children }) => {
    return (
        <div className={[className, css.contact_label].join(' ')}>
            {icon && <img src={icon} alt={`${children} icon`} />}
            <p>{children}</p>
        </div>
    );
};

const ActionButton = ({ icon, className, onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className={[className, css.action_button].join(' ')}
        >
            {icon && <img src={icon} alt={`${children} icon`} />}
            <p>{children}</p>
        </div>
    );
};
