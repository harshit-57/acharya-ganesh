import css from './style.module.css';
import IcFacebook from '../../../../assets/ic_facebook_mono.png';
import IcInstagram from '../../../../assets/ic_instagram_mono.png';
import IcX from '../../../../assets/ic_x_mono.png';
import IcPinterest from '../../../../assets/ic_pinterest_mono.png';
import { useEffect, useMemo, useState } from 'react';
import { getDaySuffix, getReadingTime } from '../../../../util/helper';
import { htmlToText } from 'html-to-text';
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

    const readingTime = useMemo(
        () => getReadingTime(article?.Description),
        [article]
    );

    const url = window?.location?.origin + window?.location?.pathname || '';

    return (
        <div className={css.container}>
            {article?.Image && (
                <img
                    className={css.thumbnail}
                    src={article?.Image}
                    alt={
                        article?.ImageAlt ||
                        article?.Title?.slice(0, 10) ||
                        'spirituality'
                    }
                />
            )}
            <div className={css.title_container}>
                <div className={css.category_container}>
                    <p className={css.category}>
                        {article?.Categories?.map((c) => c?.CategoryName)?.join(
                            ', '
                        )}
                    </p>
                </div>
                <h1 className={css.title}>{htmlToText(article?.Title)}</h1>
                <div className={css.timestamp_container}>
                    <p className={css.timestamp}>
                        {timestamp} <br />
                        {year}
                    </p>
                    <div className={css.vertical_border}></div>
                    <p className={css.read_time}>
                        {readingTime > 1 ? readingTime + ' mins' : '1 min'}
                        <br /> read
                    </p>
                </div>
                <div className={css.socials_container}>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}/&quote=${htmlToText(
                            article?.Title
                        )}`}
                        target={'_blank'}
                    >
                        <div className={css.social_button_wrapper}>
                            <img src={IcFacebook} alt={'fb'} />
                        </div>
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${htmlToText(
                            article?.Title
                        )}&url=${url}`}
                        target={'_blank'}
                    >
                        <div className={css.social_button_wrapper}>
                            <img src={IcInstagram} alt={'insta'} />
                        </div>
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                        target={'_blank'}
                    >
                        <div className={css.social_button_wrapper}>
                            <img src={IcX} alt={'x'} />
                        </div>
                    </a>
                    <a
                        href={`https://www.pinterest.com/pin/create/button/?url=${url}&media=${article?.Image}?fit=1024,576&ssl=1&description=${article?.Title}`}
                        target={'_blank'}
                    >
                        <div className={css.social_button_wrapper}>
                            <img src={IcPinterest} alt={'pinterest'} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
