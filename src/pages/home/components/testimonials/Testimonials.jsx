import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { TestimonialCard } from './components/testimonial-card/TestimonialCard';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { useState } from 'react';
import { useEffect } from 'react';

import ImgSectionBg from '../../../../assets/testimonial_bg.png';
import { APIHelper } from '../../../../util/APIHelper.js';
import useBreakpoint from 'use-breakpoint';

// const PER_FRAME_TESTIMONIAL_COUNT = 3;
const PER_FRAME_TESTIMONIAL_COUNT_DESKTOP = 3;
const PER_FRAME_TESTIMONIAL_COUNT_MOBILE = 1;
const PER_FRAME_TESTIMONIAL_COUNT_TABLET = 2;
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const getTestimonialCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_TESTIMONIAL_COUNT_MOBILE;
            break;
        case 'tablet':
            return PER_FRAME_TESTIMONIAL_COUNT_TABLET;
            break;
        case 'desktop':
            return PER_FRAME_TESTIMONIAL_COUNT_DESKTOP;
            break;
        default:
            return PER_FRAME_TESTIMONIAL_COUNT_DESKTOP;
    }
};

const Testimonial = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

    const [testimonialList, setTestimonialList] = useState([]);
    const [visibleTestimonialList, setVisibleTestimonialList] = useState([]);
    const [currrentOffset, setCurrentOffset] = useState(1);

    const getTestimonials = async () => {
        try {
            const response = await APIHelper.getTestimonials({ pageSize: 6 });
            setTestimonialList(response?.data?.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getTestimonials();
    }, []);
    useEffect(() => {
        const testimonials = testimonialList.filter((t, i) =>
            Array.from({
                length: getTestimonialCountPerFrame(breakpoint),
            }).some(
                (_, idx) =>
                    currrentOffset * getTestimonialCountPerFrame(breakpoint) -
                        idx ===
                    i + 1
            )
        );
        setVisibleTestimonialList(testimonials);
    }, [currrentOffset, testimonialList, breakpoint]);
    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                Star Testimonials: A Look Back
            </h2>
            <div
                className={css.testimonial_container}
                style={{
                    gridTemplateColumns: `repeat( ${getTestimonialCountPerFrame(
                        breakpoint
                    )}, 1fr)`,
                }}
            >
                {visibleTestimonialList?.map((t, index) => (
                    <TestimonialCard key={index} testimonial={t} />
                ))}
            </div>
            <IndicatorContainer
                onIndicatorClick={(i) => setCurrentOffset(i + 1)}
                currentIndex={currrentOffset - 1}
                count={Math.ceil(
                    testimonialList.length /
                        getTestimonialCountPerFrame(breakpoint)
                )}
            />
        </PageContainer>
    );
};

export default Testimonial;
