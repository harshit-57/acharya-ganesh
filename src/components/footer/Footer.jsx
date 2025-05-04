import css from './style.module.css';
import { HorizontalBorder } from '../spacer/Spacer';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../util/constants';
import { Images } from '../../util/constants';

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
                            <NavLink to={'/about-us'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/course'}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'}>Services</NavLink>
                        </li>
                        <li>
                            <a href={LINKS.SHOP_URL} target={'_blank'}>
                                Divine Store
                            </a>
                        </li>
                        <li>
                            <NavLink to={'/web-stories'}>Web Stories</NavLink>
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
                        src={Images.default.ImgBrandLogo}
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
                                    src={Images.default.IcFacebookMono}
                                    alt={'fb'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcFacebook}
                                    alt={'fb'}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.INSTAGRAM_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={Images.default.IcInstagramMono}
                                    alt={'insta'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcInstagram}
                                    alt={'insta'}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.X_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={Images.default.IcXMono}
                                    alt={'x'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcX}
                                    alt={'x'}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.LINKEDIN_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={Images.default.IcLinkedInMono}
                                    alt={'linkedin'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcLinkedIn}
                                    alt={'linkedin'}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.PINTEREST_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={Images.default.IcPinterestMono}
                                    alt={'pinterest'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcPinterest}
                                    alt={'pinterest'}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={LINKS.YOUTUBE_URL} target={'_blank'}>
                                <img
                                    className={css.social}
                                    src={Images.default.IcYoutubeMono}
                                    alt={'youtube'}
                                />
                                <img
                                    className={css.social_color}
                                    src={Images.default.IcYoutube}
                                    alt={'youtube'}
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
                                icon={Images.default.IcHome}
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
                                icon={Images.default.IcMail}
                                desc={'info@acharyaganesh.com'}
                            />
                        </a>
                        <a
                            href={'mailto:connect@acharyaganesh.com'}
                            target={'_blank'}
                        >
                            <AddressItem
                                icon={Images.default.IcMail}
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
            <img src={icon} alt={'Address'} />
            <p>{desc}</p>
        </div>
    );
};
