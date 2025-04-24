import css from './style.module.css';
import { useState, useEffect } from 'react';
import { PageContainer } from '../page-container/PageContainer';
import useBreakpoint from 'use-breakpoint';
import { IndicatorContainer } from '../indicator-container/IndicatorContainer';
import LeftArrow from '../../assets/left-arrow.png';
import imageList from '../../data/gallery-images';

const PER_FRAME_IMAGE_COUNT_ULTRA_WIDE = 5;
const PER_FRAME_IMAGE_COUNT_LARGE_DESKTOP = 4;
const PER_FRAME_IMAGE_COUNT_DESKTOP = 3;
const PER_FRAME_IMAGE_COUNT_MOBILE = 1;
const PER_FRAME_IMAGE_COUNT_TABLET = 2;
const BREAKPOINTS = {
    mobile: 0,
    tablet: 768,
    desktop: 1280,
    largeDesktop: 1600,
    ultraWide: 1945,
};

const getImageCountPerFrame = (device) => {
    switch (device) {
        case 'mobile':
            return PER_FRAME_IMAGE_COUNT_MOBILE;
        case 'tablet':
            return PER_FRAME_IMAGE_COUNT_TABLET;
        case 'desktop':
            return PER_FRAME_IMAGE_COUNT_DESKTOP;
        case 'largeDesktop':
            return PER_FRAME_IMAGE_COUNT_LARGE_DESKTOP;
        case 'ultraWide':
            return PER_FRAME_IMAGE_COUNT_ULTRA_WIDE;
        default:
            return PER_FRAME_IMAGE_COUNT_DESKTOP;
    }
};

const Gallery = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const [images, setImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(0);

    useEffect(() => {
        setImages(imageList);
    }, []);

    useEffect(() => {
        if (!images.length) return;
        setVisibleImages(
            images.slice(
                currentSlideOffset * getImageCountPerFrame(breakpoint),
                currentSlideOffset * getImageCountPerFrame(breakpoint) +
                    getImageCountPerFrame(breakpoint)
            )
        );
    }, [images, currentSlideOffset, breakpoint]);

    useEffect(() => {
        const totalSlides = Math.ceil(
            images.length / getImageCountPerFrame(breakpoint)
        );

        const interval = setInterval(() => {
            setCurrentSlideOffset((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [images, breakpoint]);

    const onIndicatorClick = (index) => {
        if (
            index >= 0 &&
            index < Math.ceil(images.length / getImageCountPerFrame(breakpoint))
        ) {
            setCurrentSlideOffset(index);
        }
    };

    const onPrev = () => {
        if (currentSlideOffset > 0) {
            setCurrentSlideOffset(currentSlideOffset - 1);
        } else {
            setCurrentSlideOffset(
                Math.ceil(images.length / getImageCountPerFrame(breakpoint)) - 1
            );
        }
    };

    const onNext = () => {
        if (
            currentSlideOffset <
            Math.ceil(images.length / getImageCountPerFrame(breakpoint)) - 1
        ) {
            setCurrentSlideOffset(currentSlideOffset + 1);
        } else {
            setCurrentSlideOffset(0);
        }
    };

    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>Memories Over The Years</h2>
            <div className={css.gallery_slide_container}>
                <button onClick={onPrev} className={css.prev_button}>
                    <img src={LeftArrow} alt="<" />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt=">" />
                </button>
                <div className={css.gallery_slide_wrapper}>
                    {Array.isArray(visibleImages) &&
                        visibleImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Gallery Image"
                                className={css.gallery_image}
                            />
                        ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentSlideOffset}
                count={Math.ceil(
                    images.length / getImageCountPerFrame(breakpoint)
                )}
                onIndicatorClick={onIndicatorClick}
            />
        </PageContainer>
    );
};

export default Gallery;
