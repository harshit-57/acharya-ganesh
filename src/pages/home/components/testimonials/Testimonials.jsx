import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { TestimonialCard } from './components/testimonial-card/TestimonialCard';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { useState } from 'react';
import { useEffect } from 'react';

import ImgSectionBg from '../../../../assets/testimonial_bg.png';
import { APIHelper } from '../../../../util/APIHelper.js';

const PER_FRAME_TESTIMONIAL_COUNT = 2;

const Testimonial = () => {
    const [testimonialList, setTestimonialList] = useState([]);
    const [visibleTestimonialList, setVisibleTestimonialList] = useState([]);
    const [currrentOffset, setCurrentOffset] = useState(1);

    const getTestimonials = async () => {
        try {
            const response = await APIHelper.getTestimonials();
            setTestimonialList(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getTestimonials();
    }, []);
    useEffect(() => {
        const testmonials = testimonialList.filter(
            (t, i) =>
                currrentOffset * PER_FRAME_TESTIMONIAL_COUNT == i + 1 ||
                currrentOffset * PER_FRAME_TESTIMONIAL_COUNT - 1 == i + 1
        );
        setVisibleTestimonialList(testmonials);
    }, [currrentOffset, testimonialList]);
    return (
        <PageContainer
            style={{ backgroundImage: `url(${ImgSectionBg})` }}
            className={css.container}
        >
            <h2 className={css.section_heading}>
                Star Testimonials: A Look Back
            </h2>
            <div className={css.testimonial_container}>
                {Array.isArray(visibleTestimonialList) &&
                    visibleTestimonialList.map((t, index) => (
                        <TestimonialCard key={index} testimonial={t} />
                    ))}
            </div>
            <IndicatorContainer
                onIndicatorClick={(i) => setCurrentOffset(i + 1)}
                currentIndex={currrentOffset - 1}
                count={Math.round(
                    testimonialList.length / PER_FRAME_TESTIMONIAL_COUNT
                )}
            />
        </PageContainer>
    );
};

export default Testimonial;
