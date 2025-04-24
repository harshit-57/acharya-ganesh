import css from './style.module.css';
import { LINKS } from '../../util/constants';
import { Images } from '../../../../util/constants';
export const Socials = () => {
    return (
        <div className={css.container}>
            <h3>Follow Us</h3>
            <div className={css.social_container}>
                <div>
                    <a href={LINKS.FACEBOOK_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.default.IcFacebookMono}
                            alt={''}
                        />
                        <img
                            className={css.social_color}
                            src={Images.default.IcFacebook}
                            alt={''}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.INSTAGRAM_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.default.IcInstagramMono}
                            alt={''}
                        />
                        <img
                            className={css.social_color}
                            src={Images.default.IcInstagram}
                            alt={''}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.X_URL} target={'_blank'}>
                        <img className={css.social} src={Images.default.IcXMono} alt={''} />
                        <img className={css.social_color} src={Images.default.IcX} alt={''} />
                    </a>
                </div>
                <div>
                    <a href={LINKS.LINKEDIN_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.default.IcLinkedInMono}
                            alt={''}
                        />
                        <img
                            className={css.social_color}
                            src={Images.default.IcLinkedIn}
                            alt={''}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.PINTEREST_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.default.IcPinterestMono}
                            alt={''}
                        />
                        <img
                            className={css.social_color}
                            src={Images.default.IcPinterest}
                            alt={''}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.YOUTUBE_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.default.IcYoutubeMono}
                            alt={''}
                        />
                        <img
                            className={css.social_color}
                            src={Images.default.IcYoutube}
                            alt={''}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
