import css from './style.module.css';
import { LINKS } from '../../util/constants';
import useApp from '../../../../hook/useApp';
export const Socials = () => {
    const {
        theme: { Images },
    } = useApp();
    return (
        <div className={css.container}>
            <h3>Follow Us</h3>
            <div className={css.social_container}>
                <div>
                    <a href={LINKS.FACEBOOK_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcFacebookMono}
                            alt={'fb'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcFacebook}
                            alt={'fb'}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.INSTAGRAM_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcInstagramMono}
                            alt={'insta'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcInstagram}
                            alt={'insta'}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.X_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcXMono}
                            alt={'x'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcX}
                            alt={'x'}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.LINKEDIN_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcLinkedInMono}
                            alt={'linkedin'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcLinkedIn}
                            alt={'linkedin'}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.PINTEREST_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcPinterestMono}
                            alt={'pinterest'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcPinterest}
                            alt={'pinterest'}
                        />
                    </a>
                </div>
                <div>
                    <a href={LINKS.YOUTUBE_URL} target={'_blank'}>
                        <img
                            className={css.social}
                            src={Images.IcYoutubeMono}
                            alt={'youtube'}
                        />
                        <img
                            className={css.social_color}
                            src={Images.IcYoutube}
                            alt={'youtube'}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
