import css from './style.module.css';

import menus from '../../data/menu-list';
import MenuButton from './components/menu-button/MenuButton';
import { useState } from 'react';
import { useEffect } from 'react';
import IcXCircle from '../../assets/x-circle.png';
import { useNav } from '../../hook/useNav';
import { useNavigate } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper.js';
export const Navigation = () => {
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState([]);
    const { showNav, setShowNav } = useNav();
    const [blogCategories, setBlogCategories] = useState([]);
    const [spiritualityCategories, setSpiritualityCategories] = useState([]);

    useEffect(() => {
        const blogSubMenuTempList = [];
        blogCategories.forEach((category) => {
            blogSubMenuTempList.push({
                route: `/blog/${category?.Slug}`,
                id: category?.Id,
                title: category?.Name,
                subMenus: null,
            });
        });
        const spiritualitySubMenuTempList = [];
        spiritualityCategories.forEach((category) => {
            spiritualitySubMenuTempList.push({
                route: `/spirituality/${category?.Slug}`,
                id: category?.Id,
                title: category?.Name,
                subMenus: null,
            });
        });
        const updatedMenus = menus.map((menu, index) => {
            if (menu.route === '/blog') {
                let updatedMenu = {
                    ...menu,
                    subMenus: blogSubMenuTempList,
                };
                return updatedMenu;
            } else if (menu.route === '/spirituality') {
                let updatedMenu = {
                    ...menu,
                    subMenus: spiritualitySubMenuTempList,
                };
                return updatedMenu;
            } else return menu;
        });
        setMenuList(updatedMenus);
    }, [blogCategories]);

    const getBlogCategories = async () => {
        try {
            const response = await APIHelper.getBlogCategories();
            setBlogCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const getSpiritualityCategories = async () => {
        try {
            const response = await APIHelper.getSpiritualityCategories();
            setSpiritualityCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!(menus && Array.isArray(menus))) return;
        getBlogCategories();
        getSpiritualityCategories();
        setMenuList(menus);
    }, []);

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
