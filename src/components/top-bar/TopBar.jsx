import { Link } from 'react-router-dom';
import css from './style.module.css';

import { Images, CONTACT_INFO, LINKS } from '../../util/constants';
import { useNav } from '../../hook/useNav';

export const TopBar = () => {
    const { showNav, setShowNav } = useNav();
    return (
        <div className={css.container}>
            <img
                className={css.menu_icon}
                src={Images.default.IcMenu}
                alt={'menu'}
                onClick={() => setShowNav(true)}
            />
            <Link to="/">
                <img className={css.logo} src={Images.default.Logo} />
            </Link>
            <div className={css.info_n_action_button_container}>
                <a href={`tel:${CONTACT_INFO.NUMBER_ALT_1}`}>
                    <ContactLabel icon={Images.default.IcPhone}>
                        {CONTACT_INFO.NUMBER_ALT_1}
                    </ContactLabel>
                </a>
                <a href={`tel:${CONTACT_INFO.NUMBER_ALT_2}`}>
                    <ContactLabel icon={Images.default.IcPhone}>
                        {CONTACT_INFO.NUMBER_ALT_2}
                    </ContactLabel>
                </a>
                <a target={'_blank'} href={LINKS.COURSES_LINK}>
                    <ActionButton icon={Images.default.IcUser}>
                        Log in
                    </ActionButton>
                </a>
            </div>
        </div>
    );
};

export const ContactLabel = ({ icon, className, children }) => {
    return (
        <div className={[className, css.contact_label].join(' ')}>
            {icon && <img src={icon} alt={`contact`} />}
            <p>{children}</p>
        </div>
    );
};

export const ActionButton = ({ icon, className, onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className={[className, css.action_button].join(' ')}
        >
            {icon && <img src={icon} alt={`log in`} />}
            <p>{children}</p>
        </div>
    );
};
