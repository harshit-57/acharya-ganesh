import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { ArticleCard } from './components/ArticleCard';
import ImgSectionbg from '../../../../assets/blog_section_bg.png';
import articlesData from '../../../../data/blog-article-list';
import { useState } from 'react';
import { useEffect } from 'react';
import { APIHelper } from '../../../../util/APIHelper';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
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
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionbg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                Discover the Cosmos on Our Blog
            </h2>
            <div className={css.articles_container}>
                {Array.isArray(articleList) &&
                    articleList?.map((article, index) => (
                        <ArticleCard
                            key={index}
                            article={article}
                            onClick={() =>
                                navigate(
                                    `/blog/${article?.CategorySlug}/${article?.Slug}`
                                )
                            }
                        />
                    ))}
            </div>
        </PageContainer>
    );
};

export default Blog;
