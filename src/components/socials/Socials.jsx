import css from './style.module.css';
import { Images, LINKS } from '../../util/constants';

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
    );
};
