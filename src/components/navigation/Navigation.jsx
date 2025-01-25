import css from './style.module.css';

import menus from '../../data/menu-list';
import MenuButton from './components/menu-button/MenuButton';
import { useState } from 'react';
import { useEffect } from 'react';
import IcXCircle from '../../assets/x-circle.png';
import { useNav } from '../../hook/useNav';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState([]);
    const { showNav, setShowNav } = useNav();
    useEffect(() => setMenuList(menus), []);
    const handleNavigate = (route) => {
        navigate(route);
        setShowNav(false);
    };
    return (
        <>
            {showNav && (
                <div className={css.mobile_menu_popup}>
                    <div className={css.heading_wrapper}>
                        <p>Menu</p>
                        <img
                            src={IcXCircle}
                            onClick={() => setShowNav(false)}
                            alt={'Close icon'}
                        />
                    </div>
                    <ul>
                        {menus &&
                            menuList.map((m, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleNavigate(m?.route)}
                                >
                                    {m.title}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
            <div className={css.container}>
                {menus &&
                    menuList.map((m, index) => (
                        <MenuButton key={index} menu={m} />
                    ))}
            </div>
        </>
    );
};
