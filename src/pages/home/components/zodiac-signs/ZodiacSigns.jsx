import css from './style.module.css';

import { PageContainer } from '../../../../components/page-container/PageContainer';

import Zodiac1 from '../../../../assets/Pisces-01.png';
import Zodiac2 from '../../../../assets/Aquarius-02.png';
import Zodiac3 from '../../../../assets/Capricorn-03.png';
import Zodiac4 from '../../../../assets/Sagittarius-04.png';
import Zodiac5 from '../../../../assets/Scorpio-05.png';
import Zodiac6 from '../../../../assets/Libra-06.png';
import Zodiac7 from '../../../../assets/Virgo-07.png';
import Zodiac8 from '../../../../assets/Leo-08.png';
import Zodiac9 from '../../../../assets/Cancer-09.png';
import Zodiac10 from '../../../../assets/Gemini-10.png';
import Zodiac11 from '../../../../assets/Tauras-11.png';
import Zodiac12 from '../../../../assets/Aries-12.png';
import LeftArrow from '../../../../assets/left-arrow.png';

import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';

import { Spacer } from '../../../../components/spacer/Spacer';
import { useNavigate } from 'react-router-dom';

const ZodiacSignList = [
    {
        img: Zodiac12,
        // link: 'https://acharyaganesh.com/zodiac-signs/aries-zodiac-sign',
        route: 'blog/zodiac-signs/aries-zodiac-sign',
    },
    {
        img: Zodiac11,
        // link: 'https://acharyaganesh.com/zodiac-signs/taurus-zodiac-sign',
        route: 'blog/zodiac-signs/taurus-zodiac-sign',
    },
    {
        img: Zodiac10,
        // link: 'https://acharyaganesh.com/zodiac-signs/gemini-zodiac-sign',
        route: 'blog/zodiac-signs/gemini-zodiac-sign',
    },
    {
        img: Zodiac9,
        // link: 'https://acharyaganesh.com/zodiac-signs/Cancer-zodiac-sign',
        route: 'blog/zodiac-signs/Cancer-zodiac-sign',
    },
    {
        img: Zodiac8,
        // link: 'https://acharyaganesh.com/zodiac-signs/Leo-zodiac-sign',
        route: 'blog/zodiac-signs/Leo-zodiac-sign',
    },
    {
        img: Zodiac7,
        // link: 'https://acharyaganesh.com/zodiac-signs/virgo-zodiac-signs',
        route: 'blog/zodiac-signs/virgo-zodiac-signs',
    },
    {
        img: Zodiac6,
        // link: 'https://acharyaganesh.com/zodiac-signs/Libra-zodiac-sign',
        route: 'blog/zodiac-signs/Libra-zodiac-sign',
    },
    {
        img: Zodiac5,
        // link: 'https://acharyaganesh.com/zodiac-signs/scorpio-zodiac-signs',
        route: 'blog/zodiac-signs/scorpio-zodiac-signs',
    },
    {
        img: Zodiac4,
        // link: 'https://acharyaganesh.com/zodiac-signs/Sagittarius-zodiac-sign',
        route: 'blog/zodiac-signs/Sagittarius-zodiac-sign',
    },
    {
        img: Zodiac3,
        // link: 'https://acharyaganesh.com/zodiac-signs/Capricorn-zodiac-sign',
        route: 'blog/zodiac-signs/Capricorn-zodiac-sign',
    },
    {
        img: Zodiac2,
        // link: 'https://acharyaganesh.com/zodiac-signs/aquarius-zodiac-signs',
        route: 'blog/zodiac-signs/aquarius-zodiac-signs',
    },
    {
        img: Zodiac1,
        link: 'https://acharyaganesh.com/zodiac-signs/Pisces-zodiac-sign',
        route: 'blog/zodiac-signs/Pisces-zodiac-sign',
    },
];

const ZodiacSigns = () => {
    const containerRef = useRef();
    const wrapperRef = useRef();
    const [indicatorCount, setIndicatorCount] = useState(0);
    const [currentOffset, setCurrentOffset] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth;
        const wrapperWidth = wrapperRef.current.scrollWidth;
        setIndicatorCount(Math.ceil(wrapperWidth / containerWidth));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const containerWidth = containerRef.current.offsetWidth;
            const scrollLeft = wrapperRef.current.scrollLeft;
            const currentOffset = Math.floor(
                scrollLeft / (containerWidth * 0.8)
            );
            setCurrentOffset(currentOffset);
        };
        const wrapperElement = wrapperRef.current;
        wrapperElement.addEventListener('scroll', handleScroll);
        return () => {
            wrapperElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onPrev = () => {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollLeft = wrapperRef.current.scrollLeft;
        const offset = Math.floor(scrollLeft / (containerWidth * 0.8));
        setCurrentOffset(offset - 1);
        wrapperRef.current.scrollTo({
            left: (offset - 1) * (containerWidth * 0.9),
            behavior: 'smooth',
        });
    };

    const onNext = () => {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollLeft = wrapperRef.current.scrollLeft;
        const offset = Math.floor(scrollLeft / (containerWidth * 0.8));
        setCurrentOffset(offset + 1);
        wrapperRef.current.scrollTo({
            left: (offset + 1) * (containerWidth * 0.9),
            behavior: 'smooth',
        });
    };

    const openLink = (link) => {
        // window.open(link, '_blank');
        navigate(link);
    };

    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>
                Zodiac Signs : Learn The Names And Symbols
            </h2>
            <p className={css.section_sub_heading}>
                Welcome to a world where the ancient wisdom of the stars
                illuminates the path to understanding ourselves{' '}
            </p>
            <div className={css.slides_container} ref={containerRef}>
                <button
                    onClick={onPrev}
                    className={css.prev_button}
                    disabled={currentOffset <= 0}
                    style={{ opacity: currentOffset <= 0 ? 0.2 : 1 }}
                >
                    <img src={LeftArrow} alt={''} />
                </button>
                <button
                    onClick={onNext}
                    className={css.next_button}
                    disabled={currentOffset >= indicatorCount - 1}
                    style={{
                        opacity: currentOffset >= indicatorCount - 1 ? 0.2 : 1,
                    }}
                >
                    <img src={LeftArrow} alt={''} />
                </button>
                <div className={css.slides_wrapper} ref={wrapperRef}>
                    {Array.isArray(ZodiacSignList) &&
                        ZodiacSignList.map((z, i) => (
                            <img
                                key={i}
                                src={z.img}
                                alt={'Zodiac image card'}
                                onClick={() => openLink(z.route)}
                            />
                        ))}
                </div>
            </div>
            <Spacer vertical={'48px'} />
            <IndicatorContainer
                currentIndex={currentOffset}
                count={indicatorCount}
                onIndicatorClick={(index) => {
                    const containerWidth = containerRef.current.offsetWidth;
                    wrapperRef.current.scrollTo({
                        left: index * (containerWidth * 0.9),
                        behavior: 'smooth',
                    });
                }}
            />
        </PageContainer>
    );
};

export default ZodiacSigns;
