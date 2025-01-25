import css from './style.module.css';
import ImgThumbnail from '../../../../assets/blog_thumbnail_janmashtami.jpg';
import IcFacebook from '../../../../assets/ic_facebook_mono.png';
import IcInstagram from '../../../../assets/ic_instagram_mono.png';
import IcX from '../../../../assets/ic_x_mono.png';
import IcPinterest from '../../../../assets/ic_pinterest_mono.png';
import { useEffect, useState } from 'react';
import { getDaySuffix } from '../../../../util/GetDaySuffix';
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
export const TitleInformation = ({ article }) => {
    const [timestamp, setTimeStamp] = useState();
    const [year, setYear] = useState();
    useEffect(() => {
        const date = new Date(article?.PublishedOn);
        const day = date.getDate();
        setTimeStamp(`${day}${getDaySuffix(day)} ${months[date.getMonth()]}`);
        setYear(date.getFullYear() - 1);
    }, [article]);
    return (
        <div className={css.container}>
            <img
                className={css.thumbnail}
                src={article?.Image}
                alt={'Thumbnail'}
            />
            <div className={css.title_container}>
                <div className={css.category_container}>
                    <p className={css.category}>{article?.CategoryName}</p>
                </div>
                <h1 className={css.title}>{article?.Title}</h1>
                <div className={css.timestamp_container}>
                    <p className={css.timestamp}>
                        {timestamp} <br />
                        {year}
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
