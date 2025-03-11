import css from './style.module.css';
import { LINKS } from '../../util/constants';
import IcFacebook from '../../../../assets/ic_facebook.png';
import IcInstagram from '../../../../assets/ic_instagram.png';
import IcX from '../../../../assets/ic_x.png';
import IcLinkedIn from '../../../../assets/ic_linkedin.png';
import IcPinterest from '../../../../assets/ic_pinterest.png';
import IcYoutube from '../../../../assets/ic_youtube.png';
import IcFacebookMono from '../../../../assets/ic_facebook_mono.png';
import IcInstagramMono from '../../../../assets/ic_instagram_mono.png';
import IcXMono from '../../../../assets/ic_x_mono.png';
import IcLinkedInMono from '../../../../assets/ic_linkedin_mono.png';
import IcPinterestMono from '../../../../assets/ic_pinterest_mono.png';
import IcYoutubeMono from '../../../../assets/ic_youtube_mono.png';
export const Socials = () => {
    return (
        <div className={css.container}>
            <h3>Follow Us</h3>
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
                        <img className={css.social} src={IcXMono} alt={''} />
                        <img className={css.social_color} src={IcX} alt={''} />
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
    );
};
