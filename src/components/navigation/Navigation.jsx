import css from './style.module.css';
import { Images } from '../../util/constants';
import menus from '../../data/menu-list';
import MenuButton from './components/menu-button/MenuButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNav } from '../../hook/useNav';
import { NavLink, useNavigate } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper.js';

export const Navigation = () => {
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState([]);
    const { showNav, setShowNav } = useNav();
    const [blogCategories, setBlogCategories] = useState([]);
    const [spiritualityCategories, setSpiritualityCategories] = useState([]);
    const [services, setServices] = useState([]);

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
        const serviceSubMenuTempList = [];
        services.forEach((service) => {
            serviceSubMenuTempList.push({
                route: `/service/${service?.Slug}`,
                id: service?.Id,
                title: service?.Name,
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
            } else if (menu.route === '/services') {
                let updatedMenu = {
                    ...menu,
                    subMenus: serviceSubMenuTempList,
                };
                return updatedMenu;
            } else return menu;
        });

        setMenuList(updatedMenus);
    }, [blogCategories, spiritualityCategories, services]);

    const getBlogCategories = async () => {
        try {
            const response = await APIHelper.getBlogCategories({
                active: true,
            });
            setBlogCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const getSpiritualityCategories = async () => {
        try {
            const response = await APIHelper.getSpiritualityCategories({
                active: true,
            });
            setSpiritualityCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getServices = async () => {
        try {
            const response = await APIHelper.getServices({
                active: true,
                isActive: true,
            });
            setServices(response?.data?.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!(menus && Array.isArray(menus))) return;
        getBlogCategories();
        getSpiritualityCategories();
        getServices();
        setMenuList(menus);
    }, []);

    return (
        <>
            {showNav && (
                <div className={css.mobile_menu_popup}>
                    <div className={css.heading_wrapper}>
                        <p>Menu</p>
                        <img
                            src={Images.default.IcXCircle}
                            onClick={() => setShowNav(false)}
                            alt={'Close icon'}
                        />
                    </div>
                    <ul>
                        {menus &&
                            menuList.map((m, index) => (
                                <NavLink
                                    key={index}
                                    to={m?.link ? m?.link : m.route}
                                    onClick={() => setShowNav(false)}
                                    className={css.menu_button}
                                >
                                    {m.title}
                                </NavLink>
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
