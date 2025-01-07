import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import TopBar from '../home/components/hero/components/top-bar/TopBar';
import Navigation from '../home/components/hero/components/navigation/Navigation';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import IcChevronIcon from '../../assets/chevron-down.png';

import ImgHeaderBg from '../../assets/courses_header_bg.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useState } from 'react';
import { CourseCard } from './components/course-card/CourseCard';

const CoursesList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Courses</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>Courses</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
                <CourseCard className={css.blog_card} />
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

export default CoursesList;
