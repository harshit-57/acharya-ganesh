import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { TestimonialCard } from './components/testimonial-card/TestimonialCard';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { useState } from 'react';
import { useEffect } from 'react';

import ImgSectionBg from '../../../../assets/testimonial_bg.png';

const testimonialData = [
    {
        id: '',
        name: '1Sanjeev Choudhary',
        rating: 5,
        review: 'I was skeptical at first, but after my consultation with this astrologer, I’m a true believer. Their detailed analysis and personal advice has been a game-changer.',
    },
    {
        id: '',
        name: '2Kritika Srivastava',
        rating: 5,
        review: 'Hanish Sir is an expert in his field and possess great knowledge. He is an astrologer with a clear vision and understands other persons requirements to give an appropriate solution. He explains the complex concepts of astrology very easily to others. I highly recommend him to others.',
    },
    {
        id: '',
        name: '3Sanjeev Choudhary',
        rating: 5,
        review: 'Hanish Sir is an expert in his field and possess great knowledge. He is an astrologer with a clear vision and understands other persons requirements to give an appropriate solution. He explains the complex concepts of astrology very easily to others. I highly recommend him to others.',
    },
    {
        id: '',
        name: '4Sanjeev Choudhary',
        rating: 5,
        review: 'Hanish Sir is an expert in his field and possess great knowledge. He is an astrologer with a clear vision and understands other persons requirements to give an appropriate solution. He explains the complex concepts of astrology very easily to others. I highly recommend him to others.',
    },
];

const PER_FRAME_TESTIMONIAL_COUNT = 2;

const Testimonial = () => {
    const [testimonialList, setTestimonialList] = useState([]);
    const [visibleTestimonialList, setVisibleTestimonialList] = useState([]);
    const [currrentOffset, setCurrentOffset] = useState(1);
    useEffect(() => {
        setTestimonialList(testimonialData);
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
