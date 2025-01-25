import css from './style.module.css';
import ImgThumbnail from '../../../../assets/blog_thumbnail_janmashtami.jpg';
import IcFacebook from '../../../../assets/ic_facebook_mono.png';
import IcInstagram from '../../../../assets/ic_instagram_mono.png';
import IcX from '../../../../assets/ic_x_mono.png';
import IcPinterest from '../../../../assets/ic_pinterest_mono.png';
export const TitleInformation = ({ blog }) => {
    return (
        <div className={css.container}>
            <img
                className={css.thumbnail}
                src={blog?.Image}
                alt={'Thumbnail'}
            />
            <div className={css.title_container}>
                <div className={css.category_container}>
                    <p className={css.category}>Festival</p>
                </div>
                <h1 className={css.title}>{blog?.Title}</h1>
                <div className={css.timestamp_container}>
                    <p className={css.timestamp}>
                        30th November, <br /> 2024
                    </p>
                    <div className={css.vertical_border}></div>
                    <p className={css.read_time}>
                        15 mins <br /> read
                    </p>
                </div>
                <div className={css.socials_container}>
                    <div className={css.social_button_wrapper}>
                        <img src={IcFacebook} alt={'Social icon'} />
                    </div>
                    <div className={css.social_button_wrapper}>
                        <img src={IcInstagram} alt={'Social icon'} />
                    </div>
                    <div className={css.social_button_wrapper}>
                        <img src={IcX} alt={'Social icon'} />
                    </div>
                    <div className={css.social_button_wrapper}>
                        <img src={IcPinterest} alt={'Social icon'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
