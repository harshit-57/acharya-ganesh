import css from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../../../util/APIHelper';
import { Images } from '../../../../util/constants';
export const RecentSpirituality = () => {
    const navigate = useNavigate();
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        getSpirituality();
    }, []);

    const getSpirituality = async () => {
        try {
            const response = await APIHelper.getSpiritualities({
                page: 1,
                pageSize: 3,
                status: 1,
                active: 1,
            });
            setArticleList(response.data?.data);
        } catch (e) {}
    };
    return (
        <div className={css.recent_container}>
            <h3>Recent Spirituality</h3>
            {articleList &&
                articleList.map((article, index) => (
                    <div
                        onClick={() =>
                            navigate(
                                `/spirituality/${
                                    article?.Categories?.length
                                        ? article?.Categories[0]?.CategorySlug
                                        : '-'
                                }/${article?.Slug}`
                            )
                        }
                        key={index}
                        className={css.recent_blog}
                    >
                        <img
                            src={article?.Image || Images.default.ImgPlaceholderThumbnail}
                            alt={''}
                        />
                        <p>{article?.Title}</p>
                    </div>
                ))}
        </div>
    );
};
