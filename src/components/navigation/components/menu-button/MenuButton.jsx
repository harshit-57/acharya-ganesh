import css from './style.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import ChevronDown from '../../../../assets/chevron-down.png';

const MenuButton = ({ menu, className }) => {
    const subMenus = menu.subMenus;
    const subMenuAvailable = subMenus && subMenus.length > 0;

    const navigate = useNavigate();

    const onNavigate = (e, route) => {
        if (e.currentTarget === e.target) navigate(route);
    };

    return (
        <div className={css.menu_button_container}>
            <NavLink
                to={menu.route}
                id={menu.id}
                onClick={() => console.log('parent')}
                className={[className, css.menu_button].join(' ')}
            >
                <p>{menu.title}</p>
                {subMenuAvailable && <img src={ChevronDown} alt="Down arrow" />}
            </NavLink>

            {subMenuAvailable && (
                <div className={css.submenu_wrapper}>
                    <div className={css.submenu_container}>
                        {subMenus.map((subMenu, index) => (
                            <NavLink
                                to={subMenu.route}
                                key={index}
                                id={subMenu.id}
                                onClick={(e) => onNavigate(e, subMenu.route)}
                            >
                                {subMenu.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuButton;
