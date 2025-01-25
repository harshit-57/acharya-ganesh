import css from './style.module.css';
import ImgConsultation from '../../../../assets/consultation_poster_2.jpg';
import { InputField } from '../../../../components/input-field/InputField';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
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
            const response = await APIHelper.getBlogs({ page: 1, pageSize: 3 });
            setArticleList(response.data?.data);
        } catch (e) {}
    };
    return (
        <div className={css.container}>
            <img src={ImgConsultation} alt={'Consultation poster'} />
            <div className={css.recent_container}>
                <h3>Recent Blogs</h3>
                {articleList &&
                    articleList.map((article, index) => (
                        <div
                            onClick={() =>
                                navigate(
                                    `/blog/${article?.CategorySlug}/${article?.Slug}`
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
            <div className={css.contact_form_container}>
                <h3>Contact Us</h3>
                <InputField className={css.input} placeholder={'Name'} />
                <InputField className={css.input} placeholder={'Email'} />
                <InputField className={css.input} placeholder={'Phone No'} />
                <InputField className={css.input} placeholder={'Services'} />
                <textarea
                    className={css.input}
                    name={'note'}
                    placeholder={'Please Write Any Note Here...'}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};
