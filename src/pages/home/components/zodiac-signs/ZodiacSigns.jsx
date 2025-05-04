import css from './style.module.css';
import { useState, useEffect } from 'react';

import { Images } from '../../../../util/constants';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from 'use-breakpoint';

const ZodiacSignList = [
    {
        img: Images.default.Zodiac12,
        route: 'zodiac-signs/aries-zodiac-sign',
        name: 'Aries',
    },
    {
        img: Images.default.Zodiac11,
        route: 'zodiac-signs/taurus-zodiac-sign',
        name: 'Taurus',
    },
    {
        img: Images.default.Zodiac10,
        route: 'zodiac-signs/gemini-zodiac-sign',
        name: 'Gemini',
    },
    {
        img: Images.default.Zodiac9,
        route: 'zodiac-signs/cancer-zodiac-sign',
        name: 'Cancer',
    },
    {
        img: Images.default.Zodiac8,
        route: 'zodiac-signs/leo-zodiac-sign',
        name: 'Leo',
    },
    {
        img: Images.default.Zodiac7,
        route: 'zodiac-signs/virgo-zodiac-signs',
        name: 'Virgo',
    },
    {
        img: Images.default.Zodiac6,
        route: 'zodiac-signs/libra-zodiac-sign',
        name: 'Libra',
    },
    {
        img: Images.default.Zodiac5,
        route: 'zodiac-signs/scorpio-zodiac-signs',
        name: 'Scorpio',
    },
    {
        img: Images.default.Zodiac4,
        route: 'zodiac-signs/sagittarius-zodiac-sign',
        name: 'Sagittarius',
    },
    {
        img: Images.default.Zodiac3,
        route: 'zodiac-signs/capricorn-zodiac-sign',
        name: 'Capricorn',
    },
    {
        img: Images.default.Zodiac2,
        route: 'zodiac-signs/aquarius-zodiac-signs',
        name: 'Aquarius',
    },
    {
        img: Images.default.Zodiac1,
        route: 'zodiac-signs/pisces-zodiac-sign',
        name: 'Pisces',
    },
];

const PER_FRAME_ZODIAC_COUNT = {
    ultraWide: 5,
    largeDesktop: 4,
    desktop: 3,
    tablet: 2,
    mobile: 1,
};

const BREAKPOINTS = {
    mobile: 0,
    tablet: 765,
    desktop: 1024,
    largeDesktop: 1280,
    ultraWide: 1720,
};

const ZodiacSigns = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const [visibleZodiacs, setVisibleZodiacs] = useState([]);
    const [currentSlideOffset, setCurrentSlideOffset] = useState(0);
    const navigate = useNavigate();

    const getZodiacCountPerFrame = () =>
        PER_FRAME_ZODIAC_COUNT[breakpoint] || PER_FRAME_ZODIAC_COUNT.desktop;

    useEffect(() => {
        const zodiacsPerFrame = getZodiacCountPerFrame();
        const totalSlides = Math.ceil(ZodiacSignList.length / zodiacsPerFrame);
        const startIndex = currentSlideOffset * zodiacsPerFrame;
        const remainingZodiacs = ZodiacSignList.length - startIndex;

        let newVisibleZodiacs = [];

        if (remainingZodiacs >= zodiacsPerFrame) {
            newVisibleZodiacs = ZodiacSignList.slice(
                startIndex,
                startIndex + zodiacsPerFrame
            );
        } else if (
            currentSlideOffset === totalSlides - 1 &&
            remainingZodiacs > 0
        ) {
            newVisibleZodiacs = [
                ...ZodiacSignList.slice(
                    startIndex,
                    startIndex + remainingZodiacs
                ),
                ...ZodiacSignList.slice(0, zodiacsPerFrame - remainingZodiacs),
            ];
        }

        setVisibleZodiacs(newVisibleZodiacs);
    }, [currentSlideOffset, breakpoint]);

    useEffect(() => {
        const totalSlides = Math.ceil(
            ZodiacSignList.length / getZodiacCountPerFrame()
        );
        const interval = setInterval(() => {
            setCurrentSlideOffset((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [breakpoint]);

    const onPrev = () => {
        if (currentSlideOffset > 0) {
            setCurrentSlideOffset(currentSlideOffset - 1);
        } else {
            setCurrentSlideOffset(
                Math.ceil(ZodiacSignList.length / getZodiacCountPerFrame()) - 1
            );
        }
    };

    const onNext = () => {
        const totalSlides = Math.ceil(
            ZodiacSignList.length / getZodiacCountPerFrame()
        );
        if (currentSlideOffset < totalSlides - 1) {
            setCurrentSlideOffset(currentSlideOffset + 1);
        } else {
            setCurrentSlideOffset(0);
        }
    };

    const onIndicatorClick = (index) => {
        if (
            index > -1 &&
            index < Math.ceil(ZodiacSignList.length / getZodiacCountPerFrame())
        ) {
            setCurrentSlideOffset(index);
        }
    };

    const openLink = (route) => {
        navigate(`/${route}`);
    };

    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>
                Zodiac Signs: Learn The Names And Symbols
            </h2>
            <p className={css.section_sub_heading}>
                Welcome to a world where the ancient wisdom of the stars
                illuminates the path to understanding ourselves
            </p>
            <div className={css.zodiac_slide_container}>
                <button onClick={onPrev} className={css.prev_button}>
                    <img src={Images.default.LeftArrow} alt="<" />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={Images.default.LeftArrow} alt=">" />
                </button>
                <div className={css.zodiac_slide_wrapper}>
                    {visibleZodiacs.map((z, index) => (
                        <div
                            key={index}
                            className={css.zodiac_card}
                            onClick={() => openLink(z.route)}
                        >
                            <img src={z.img} alt={z.name} />
                        </div>
                    ))}
                </div>
            </div>
            <IndicatorContainer
                currentIndex={currentSlideOffset}
                count={Math.ceil(
                    ZodiacSignList.length / getZodiacCountPerFrame()
                )}
                onIndicatorClick={onIndicatorClick}
            />
        </PageContainer>
    );
};

export default ZodiacSigns;
