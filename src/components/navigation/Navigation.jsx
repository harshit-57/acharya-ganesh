import css from './style.module.css';

import menus from '../../data/menu-list';
import MenuButton from './components/menu-button/MenuButton';
import { useState } from 'react';
import { useEffect } from 'react';

export const Navigation = () => {
    const [menuList, setMenuList] = useState([]);
    useEffect(() => setMenuList(menus), []);
    return (
        <div className={css.container}>
            {menus &&
                menuList.map((m, index) => <MenuButton key={index} menu={m} />)}
        </div>
    );
};
