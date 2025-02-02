import css from './style.module.css';
import ImgBrandLogo from '../../assets/brand_logo.png';
import IcHome from '../../assets/home.png';
import IcMail from '../../assets/mail.png';
import IcFacebook from '../../assets/ic_facebook.png';
import IcInstagram from '../../assets/ic_instagram.png';
import IcX from '../../assets/ic_x.png';
import IcLinkedIn from '../../assets/ic_linkedin.png';
import IcPinterest from '../../assets/ic_pinterest.png';
import IcYoutube from '../../assets/ic_youtube.png';
import IcFacebookMono from '../../assets/ic_facebook_mono.png';
import IcInstagramMono from '../../assets/ic_instagram_mono.png';
import IcXMono from '../../assets/ic_x_mono.png';
import IcLinkedInMono from '../../assets/ic_linkedin_mono.png';
import IcPinterestMono from '../../assets/ic_pinterest_mono.png';
import IcYoutubeMono from '../../assets/ic_youtube_mono.png';

import { HorizontalBorder } from '../spacer/Spacer';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../util/constants';

export const Footer = () => {
    return (
        <div className={css.container}>
            <div className={css.sections_container}>
                <div className={css.section}>
                    <h3 className={css.section_heading}>Links</h3>
                    <ul className={css.links}>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/courses'}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Services</NavLink>
                        </li>
                        <li>
                            <a href={LINKS.SHOP_URL} target={'_blank'}>
                                Divine Store
                            </a>
                        </li>
                        <li>
                            <NavLink to={'/'}>Web Stories</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/spirituality'}>Spirituality</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={css.section}>
                    <img
                        className={css.brand_logo}
                        src={ImgBrandLogo}
                        alt={'Acharya Ganesh Logo'}
                    />
                    <p>
                        Welcome to Acharya Ganesh, your premier destination for
                        all things astrology. We’re dedicated to spreading the
                        profound wisdom of astrology through our comprehensive
                        range of services and online Astrology courses.
                    </p>
                    <div className={css.social_container}>
                        <div>
                            <a href={LINKS.FACEBOOK_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcFacebookMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcFacebook}
                                    alt={''}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.INSTAGRAM_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcInstagramMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcInstagram}
                                    alt={''}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.X_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcXMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcX}
                                    alt={''}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.LINKEDIN_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcLinkedInMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcLinkedIn}
                                    alt={''}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.PINTEREST_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcPinterestMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcPinterest}
                                    alt={''}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.YOUTUBE_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={IcYoutubeMono}
                                    alt={''}
                                />
                                <img
                                    className={css.social_color}
                                    src={IcYoutube}
                                    alt={''}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={css.section}>
                    <h3 className={css.section_heading}>Address</h3>
                    <div className={css.address_detail_container}>
                        <a href={LINKS.ADDRESS_URL} target={'_blank'}>
                            <AddressItem
                                icon={IcHome}
                                desc={
                                    'Hall No. 201 Plot No. 959 Niti Khand 1, Opposite Orange County, Indirapuram Ghaziabad, 201014'
                                }
                            />
                        </a>
                        <a
                            href={'mailto:info@acharyaganesh.com'}
                            target={'_blank'}
                        >
                            <AddressItem
                                icon={IcMail}
                                desc={'info@acharyaganesh.com'}
                            />
                        </a>
                        <a
                            href={'mailto:connect@acharyaganesh.com'}
                            target={'_blank'}
                        >
                            <AddressItem
                                icon={IcMail}
                                desc={'connect@acharyaganesh.com'}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <HorizontalBorder color={'#FFFFFF33'} />
            <p className={css.copyright_text}>
                © All Rights Reserved Acharya Ganesh
            </p>
        </div>
    );
};

const AddressItem = ({ icon, desc }) => {
    return (
        <div className={css.address_item}>
            <img src={icon} alt={'Address icon'} />
            <p>{desc}</p>
        </div>
    );
};
