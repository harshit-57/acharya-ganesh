import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import TopBar from '../home/components/hero/components/top-bar/TopBar';
import Navigation from '../home/components/hero/components/navigation/Navigation';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';
import { BlogCardSmall } from './components/blog-card/BlogCardSmall';
const BlogList = () => {
    const { category } = useParams();
    return (
        <PageContainer className={css.container}>
            <div
                // style={{ backgroundImage: `url(${ImgBlogHeader})` }}
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
                            <span>Festival Blog</span>
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
            <Footer />
        </PageContainer>
    );
};

export default BlogList;
