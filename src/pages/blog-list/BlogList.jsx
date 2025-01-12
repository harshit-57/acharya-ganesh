import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { BlogCardSmall } from './components/blog-card/BlogCardSmall';

import ImgBlogHeader from '../../assets/blog_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';

const BlogList = () => {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgBlogHeader})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Blog</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>{category.toUpperCase()} Blog</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
                <BlogCardSmall className={css.blog_card} />
            </div>
            <div className={css.page_number_container}>
                {[...Array(3)].map((number, index) => (
                    <p
                        style={{
                            backgroundColor:
                                index + 1 == currentPage
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => {}}
                    >
                        {index + 1}
                    </p>
                ))}
                <p>...</p>
                <p onClick={() => {}}>10</p>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default BlogList;
