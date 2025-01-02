import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { ArticleCard } from './components/ArticleCard';

import articlesData from '../../../../data/blog-article-list';
import { useState } from 'react';
import { useEffect } from 'react';

const Blog = () => {
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        setArticleList(articlesData);
    }, []);
    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>
                Discover the Cosmos on Our Blog
            </h2>
            <div className={css.articles_container}>
                {Array.isArray(articleList) &&
                    articleList?.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
            </div>
        </PageContainer>
    );
};

export default Blog;
