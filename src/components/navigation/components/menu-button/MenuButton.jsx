import css from './style.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ChevronDown from '../../../../assets/chevron-down.png';
import { useState } from 'react';

const MenuButton = ({ menu, className }) => {
    const subMenus = menu.subMenus;
    const subMenuAvailable = subMenus && subMenus.length > 0;

    const navigate = useNavigate();
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState(false);

    const onNavigate = (e, route) => {
        if (e.currentTarget === e.target) {
            if (
                location.pathname?.includes('services/') &&
                route?.includes('services/')
            )
                window.open(route, '_self');
            else navigate(route, { replace: true });
        }
    };

    return (
        <div
            className={css.menu_button_container}
            onMouseEnter={(e) => {
                setOpenMenus(true);
            }}
            onMouseLeave={(e) => {
                setOpenMenus(false);
            }}
        >
            <NavLink
                to={menu?.link ? menu?.link : menu.route}
                id={menu.id}
                className={[className, css.menu_button].join(' ')}
            >
                <p>{menu.title}</p>
                {subMenuAvailable && <img src={ChevronDown} alt="down" />}
            </NavLink>
            {subMenuAvailable && openMenus && (
                <div className={css.submenu_wrapper}>
                    <div className={css.submenu_container}>
                        {subMenus.map((subMenu, index) => (
                            <div
                                key={index}
                                onMouseEnter={(e) => {
                                    setOpenSubMenus(subMenu.id);
                                }}
                                onMouseLeave={(e) => {
                                    setOpenSubMenus(null);
                                }}
                            >
                                <NavLink
                                    to={subMenu.route}
                                    key={index}
                                    id={subMenu.id}
                                    onClick={(e) => {
                                        onNavigate(e, subMenu.route);
                                        setOpenMenus(false);
                                    }}
                                    className={css.submenu_item}
                                >
                                    {subMenu.title}

                                    {subMenu?.subMenus &&
                                        subMenu?.subMenus.length > 0 && (
                                            <img
                                                src={ChevronDown}
                                                alt="Down"
                                                className={
                                                    css.submenu_item_arrow
                                                }
                                            />
                                        )}
                                </NavLink>
                                {openSubMenus == subMenu.id &&
                                subMenu?.subMenus?.length ? (
                                    subMenu?.subMenus?.map(
                                        (subSubMenu, index) => (
                                            <NavLink
                                                to={subSubMenu.route}
                                                key={index}
                                                id={subSubMenu.id}
                                                onClick={(e) => {
                                                    onNavigate(
                                                        e,
                                                        subSubMenu.route
                                                    );
                                                    setOpenMenus(false);
                                                }}
                                                className={css.subsubmenu_item}
                                            >
                                                - {subSubMenu.title}
                                            </NavLink>
                                        )
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuButton;
