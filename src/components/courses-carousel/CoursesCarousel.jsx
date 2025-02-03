import css from './style.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

import ImgSectionBg from '../../assets/course_section_bg.png';

import LeftArrow from '../../assets/left-arrow.png';

// import coursesData from '../../data/courses-list';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import { PageContainer } from '../page-container/PageContainer';
import { CourseCard } from './components/course-card/CourseCard';
import useBreakpoint from 'use-breakpoint';
import { APIHelper } from '../../util/APIHelper';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from '../primary-button/PrimaryButton';
const PER_FRAME_COURSE_COUNT_DESKTOP = 4;
const PER_FRAME_COURSE_COUNT_MOBILE = 1;
const PER_FRAME_COURSE_COUNT_TABLET = 2;
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const getCourseCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_COURSE_COUNT_MOBILE;
            break;
        case 'tablet':
            return PER_FRAME_COURSE_COUNT_TABLET;
            break;
        case 'desktop':
            return PER_FRAME_COURSE_COUNT_DESKTOP;
            break;
        default:
            return PER_FRAME_COURSE_COUNT_DESKTOP;
    }
};

export const CoursesCarousel = () => {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
    );
    // const [courseDetailList, setCourseDetailList] = useState([]);
    const [courses, setCourses] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(1);

    useEffect(() => {
        // setCourseDetailList(coursesData);
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await APIHelper.getCourses({
                page: 1,
                pageSize: 10,
                category: 'upcoming,live-class,uncategorized,course',
            });
            setCourses(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!courses?.length) return;
        setVisibleCourses(
            courses.slice(
                currentSlideOffset * getCourseCountPerFrame(breakpoint),
                currentSlideOffset * getCourseCountPerFrame(breakpoint) +
                    getCourseCountPerFrame(breakpoint)
            )
        );
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
        // setCurrentSlideOffset(1);
        if (
            index > -1 &&
            index <
                Math.ceil(courses.length / getCourseCountPerFrame(breakpoint))
        )
            setCurrentSlideOffset(index);
    };

    const onPrev = () => {
        if (currentSlideOffset > 0)
            setCurrentSlideOffset(currentSlideOffset - 1);
    };

    const onNext = () => {
        if (
            currentSlideOffset <
            Math.ceil(courses.length / getCourseCountPerFrame(breakpoint)) - 1
        )
            setCurrentSlideOffset(currentSlideOffset + 1);
        else setCurrentSlideOffset(0);
    };

    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                {'Explore Our Upcoming & Live Courses'}
            </h2>
            <div className={css.course_slide_container}>
                <button
                    onClick={onPrev}
                    className={css.prev_button}
                    disabled={currentSlideOffset == 0}
                    style={{
                        opacity: currentSlideOffset == 0 ? 0.5 : 1,
                    }}
                >
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
                currentIndex={currentSlideOffset}
                count={Math.ceil(
                    courses.length / getCourseCountPerFrame(breakpoint)
                )}
                onIndicatorClick={onIndicatorClick}
            />
            <NavLink to={'/courses'} className={css.show_more_button}>
                <PrimaryButton className={css.show_more_button}>
                    Show All
                </PrimaryButton>
            </NavLink>
        </PageContainer>
    );
};
