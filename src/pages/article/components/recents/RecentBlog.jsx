import css from './style.module.css';
import ImgPlaceholderThumbnail from '../../../../assets/recent_blog_thumbnail_placeholder.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../../../util/APIHelper';
export const RecentBlogs = () => {
    const navigate = useNavigate();
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            const response = await APIHelper.getBlogs({
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
            <h3>Recent Blogs</h3>
            {articleList &&
                articleList.map((article, index) => (
                    <div
                        onClick={() =>
                            navigate(
                                `/${
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
                            src={article?.Image || ImgPlaceholderThumbnail}
                            alt={''}
                        />
                        <p>{article?.Title}</p>
                    </div>
                ))}
        </div>
    );
};
