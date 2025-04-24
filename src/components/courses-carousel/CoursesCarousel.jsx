import css from './style.module.css';
import { useState, useEffect } from 'react';
import ImgSectionBg from '../../assets/course_section_bg.png';
import LeftArrow from '../../assets/left-arrow.png';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import { PageContainer } from '../page-container/PageContainer';
import { CourseCard } from './components/course-card/CourseCard';
import useBreakpoint from 'use-breakpoint';
import { APIHelper } from '../../util/APIHelper';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from '../primary-button/PrimaryButton';
const PER_FRAME_COURSE_COUNT_ULTRA_WIDE = 5;
const PER_FRAME_COURSE_COUNT_LARGE_DESKTOP = 4;
const PER_FRAME_COURSE_COUNT_DESKTOP = 3;
const PER_FRAME_COURSE_COUNT_MOBILE = 1;
const PER_FRAME_COURSE_COUNT_TABLET = 2;
const BREAKPOINTS = {
    mobile: 0,
    tablet: 768,
    desktop: 1280,
    largeDesktop: 1600,
    ultraWide: 1945,
};

const getCourseCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_COURSE_COUNT_MOBILE;
        case 'tablet':
            return PER_FRAME_COURSE_COUNT_TABLET;
        case 'desktop':
            return PER_FRAME_COURSE_COUNT_DESKTOP;
        case 'largeDesktop':
            return PER_FRAME_COURSE_COUNT_LARGE_DESKTOP;
        case 'ultraWide':
            return PER_FRAME_COURSE_COUNT_ULTRA_WIDE;
        default:
            return PER_FRAME_COURSE_COUNT_DESKTOP;
    }
};

export const CoursesCarousel = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const [courses, setCourses] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(0);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await APIHelper.getCourses({
                page: 1,
                pageSize: 10,
                status: 1,
                active: 1,
                category: 'upcoming,live-class,uncategorized,course',
            });
            setCourses(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!courses?.length) return;

        const coursesPerFrame = getCourseCountPerFrame(breakpoint);
        const totalSlides = Math.ceil(courses.length / coursesPerFrame);
        const startIndex = currentSlideOffset * coursesPerFrame;
        const remainingCourses = courses.length - startIndex;

        let newVisibleCourses = [];

        if (remainingCourses >= coursesPerFrame) {
            newVisibleCourses = courses.slice(
                startIndex,
                startIndex + coursesPerFrame
            );
        } else if (
            currentSlideOffset === totalSlides - 1 &&
            remainingCourses > 0
        ) {
            newVisibleCourses = [
                ...courses.slice(startIndex, startIndex + remainingCourses), // Remaining courses
                ...courses.slice(0, coursesPerFrame - remainingCourses), // Wrap around to start
            ];
        }

        setVisibleCourses(newVisibleCourses);
    }, [courses, currentSlideOffset, breakpoint]);

    useEffect(() => {
        const totalSlides = Math.ceil(
            courses.length / getCourseCountPerFrame(breakpoint)
        );
        const interval = setInterval(() => {
            setCurrentSlideOffset((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [courses, breakpoint]);

    const onIndicatorClick = (index) => {
        if (
            index > -1 &&
            index <
                Math.ceil(courses.length / getCourseCountPerFrame(breakpoint))
        ) {
            setCurrentSlideOffset(index);
        }
    };

    const onPrev = () => {
        if (currentSlideOffset > 0) {
            setCurrentSlideOffset(currentSlideOffset - 1);
        } else {
            setCurrentSlideOffset(
                Math.ceil(courses.length / getCourseCountPerFrame(breakpoint)) -
                    1
            );
        }
    };

    const onNext = () => {
        const totalSlides = Math.ceil(
            courses.length / getCourseCountPerFrame(breakpoint)
        );
        if (currentSlideOffset < totalSlides - 1) {
            setCurrentSlideOffset(currentSlideOffset + 1);
        } else {
            setCurrentSlideOffset(0);
        }
    };

    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                {'Explore Our Recent Courses'}
            </h2>
            <div className={css.course_slide_container}>
                <button onClick={onPrev} className={css.prev_button}>
                    <img src={LeftArrow} alt={'<'} />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt={'>'} />
                </button>
                <div className={css.course_slide_wrapper}>
                    {Array.isArray(visibleCourses) &&
                        visibleCourses.map((c, index) => (
                            <CourseCard key={index} course={c} />
                        ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentSlideOffset}
                count={Math.ceil(
                    courses.length / getCourseCountPerFrame(breakpoint)
                )}
                onIndicatorClick={onIndicatorClick}
            />
            <NavLink to={'/courses'}>
                <PrimaryButton className={css.show_more_button}>
                    Show All
                </PrimaryButton>
            </NavLink>
        </PageContainer>
    );
};
