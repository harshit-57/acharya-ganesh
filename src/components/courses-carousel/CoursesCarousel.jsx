import css from './style.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

import ImgSectionBg from '../../assets/course_section_bg.png';

import LeftArrow from '../../assets/left-arrow.png';

import coursesData from '../../data/courses-list';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import { PageContainer } from '../page-container/PageContainer';
import { isIndexUnderOffset } from '../../util/IndexUnderOffset';
import { CourseCard } from './components/course-card/CourseCard';
import useBreakpoint from 'use-breakpoint';
const PER_FRAME_COURSE_COUNT_DESKTOP = 4;
const PER_FRAME_COURSE_COUNT_MOBILE = 1;
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const getCourseCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_COURSE_COUNT_MOBILE;
            break;
        case 'desktop':
        default:
            return PER_FRAME_COURSE_COUNT_DESKTOP;
    }
};

export const CoursesCarousel = () => {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
    );
    const [courseDetailList, setCourseDetailList] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(1);

    useEffect(() => {
        setCourseDetailList(coursesData);
    }, []);

    useEffect(() => {
        if (!courseDetailList || !courseDetailList[currentIndex]) return;
        const courses = courseDetailList[currentIndex]?.courses?.filter(
            (c, i) =>
                isIndexUnderOffset(
                    currentSlideOffset,
                    getCourseCountPerFrame(breakpoint),
                    i
                )
        );
        setVisibleCourses(courses);
    }, [courseDetailList, currentSlideOffset, currentIndex, breakpoint]);

    const onIndicatorClick = (index) => {
        setCurrentSlideOffset(1);
        setCurrentIndex(index);
    };

    const onPrev = () => {
        if (currentSlideOffset > 1)
            setCurrentSlideOffset(currentSlideOffset - 1);
    };

    const onNext = () => {
        if (
            currentSlideOffset <
            Math.ceil(
                courseDetailList[currentIndex].courses.length /
                    getCourseCountPerFrame(breakpoint)
            )
        )
            setCurrentSlideOffset(currentSlideOffset + 1);
    };

    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                {courseDetailList[currentIndex]?.heading}
            </h2>
            <div className={css.course_slide_container}>
                <button onClick={onPrev} className={css.prev_button}>
                    <img src={LeftArrow} alt={''} />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt={''} />
                </button>
                <div className={css.course_slide_wrapper}>
                    {Array.isArray(visibleCourses) &&
                        visibleCourses?.map((c, index) => (
                            <CourseCard key={index} course={c} />
                        ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentIndex}
                count={courseDetailList.length}
                onIndicatorClick={onIndicatorClick}
            />
        </PageContainer>
    );
};
