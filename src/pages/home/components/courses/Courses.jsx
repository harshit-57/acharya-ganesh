import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { CourseCard } from './components/course-card/CourseCard';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

import LeftArrow from '../../../../assets/left-arrow.png';

import coursesData from '../../../../data/courses-list';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Courses = () => {
    const coursesWrapperRef = useRef();
    const [coursesList, setCoursesList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideOffsetFactor, setSlideOffsetFactor] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        setCoursesList(coursesData);
    }, []);

    useEffect(() => {
        setCurrentCategory(coursesList[currentIndex]);
    }, [currentIndex, coursesList]);

    const onPrev = () => {
        coursesWrapperRef.current?.scrollBy(-285, 0);
    }

    const onNext = () => {
        coursesWrapperRef.current?.scrollBy(285, 0);
    }

    return (
        <PageContainer
            // style={{ backgroundImage: `url(${ImgCourseBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>{currentCategory?.heading}</h2>
            <div className={css.course_slide_container}>
                <button onClick={onPrev} className={css.prev_button}>
                    <img src={LeftArrow} alt={''} />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt={''} />
                </button>
                <div ref={coursesWrapperRef} className={css.course_slide_wrapper}>
                    {Array.isArray(currentCategory?.courses) &&
                        currentCategory?.courses.map((c, index) => (
                            <CourseCard key={index} course={c} />
                        ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentIndex}
                count={coursesList.length}
                onIndicatorClick={(i) => setCurrentIndex(i)}
            />
        </PageContainer>
    );
};

export default Courses;
