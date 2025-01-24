import css from './style.module.css';

import menus from '../../data/menu-list';
import MenuButton from './components/menu-button/MenuButton';
import { useState } from 'react';
import { useEffect } from 'react';
import IcXCircle from '../../assets/x-circle.png';

export const Navigation = () => {
    const [menuList, setMenuList] = useState([]);
    const [showMobileNav, setShowMobileNav] = useState(false);
    useEffect(() => setMenuList(menus), []);
    return (
        <>
            {showMobileNav && (
                <div className={css.mobile_menu_popup}>
                    <div className={css.heading_wrapper}>
                        <p>Menu</p>
                        <img
                            src={IcXCircle}
                            onClick={() => setShowMobileNav(false)}
                            alt={'Close icon'}
                        />
                    </div>
                    <ul>
                        {menus &&
                            menuList.map((m, index) => (
                                <li key={index}>{m.title}</li>
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
