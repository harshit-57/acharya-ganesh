import css from './style.module.css';
import ImgBlogHeader from '../../../assets/blog_header_bg.png';
import { PageContainer } from '../../../components/page-container/PageContainer';
import { Spacer } from '../../../components/spacer/Spacer';
import { TopBar } from '../../../components/top-bar/TopBar';
import { Navigation } from '../../../components/navigation/Navigation';
import { Footer } from '../../../components/footer/Footer';
export const HealthAstrology = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgBlogHeader})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content_container}></div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};
