import css from './style.module.css';
import { useState, useEffect } from 'react';

import LeftArrow from '../../../../assets/left-arrow.png';
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

import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from 'use-breakpoint';

const ZodiacSignList = [
    {
        img: Zodiac12,
        route: 'zodiac-signs/aries-zodiac-sign',
        name: 'Aries',
        description:
            'Aries, the first zodiac sign. It is a bold and adventurous. Mars ruled ‘Aries’.  Symbolized by the Ram, Aries individuals are brave, confident, and driven, relentlessly pursuing goals with passion.',
    },
    {
        img: Zodiac11,
        route: 'zodiac-signs/taurus-zodiac-sign',
        name: 'Taurus',
        description:
            'Taurus, the second zodiac sign. They are grounded, patient, and practical. Venus ruled ‘Taurus’.  Symbolized by the bull, ‘Taurus’ individuals are reliable, responsible, loyal, and persistent towards their goals.',
    },
    {
        img: Zodiac10,
        route: 'zodiac-signs/gemini-zodiac-sign',
        name: 'Gemini',
        description:
            'Gemini, the third zodiac sign. They are curious and versatile. Mercury ruled ‘Gemini’.  Symbolized by the twins, ‘Gemini’ individuals are sociable, enthusiastic, and intelligent.',
    },
    {
        img: Zodiac9,
        route: 'zodiac-signs/cancer-zodiac-sign',
        name: 'Cancer',
        description:
            'Cancer, the fourth zodiac sign. They are sensitive and sentimental. Moon ruled ‘Cancer’.  Symbolized by the crab, ‘Cancer’ individuals are energetic, adaptable, and protective.',
    },
    {
        img: Zodiac8,
        route: 'zodiac-signs/leo-zodiac-sign',
        name: 'Leo',
        description:
            'Leo, the fifth zodiac sign. They possess a deep sense of duty and honor. Sun ruled ‘Leo’.  Symbolized by the lion, ‘Leo’ individuals are vital, authoritative, and self-expressive.',
    },
    {
        img: Zodiac7,
        route: 'zodiac-signs/virgo-zodiac-signs',
        name: 'Virgo',
        description:
            'Virgo, the sixth zodiac sign. They are practical and attentive to detail. Mercury ruled ‘Virgo’.  Symbolized by the maiden holding a sheaf of wheat, ‘Virgo’ individuals are sharp, eloquent, and have analytical skills.',
    },
    {
        img: Zodiac6,
        route: 'zodiac-signs/libra-zodiac-sign',
        name: 'Libra',
        description:
            'Libra, the seventh zodiac sign. They are creative and diplomatic. Venus ruled ‘Libra’.  Symbolized by the scales of justice, ‘Libra’ individuals are capable of handling hindrances with grace.',
    },
    {
        img: Zodiac5,
        route: 'zodiac-signs/scorpio-zodiac-signs',
        name: 'Scorpio',
        description:
            'Scorpio, the eighth zodiac sign. They are passionate and mysterious. Mars ruled ‘Scorpio’.  Symbolized by the scorpion, ‘Scorpio’ individuals are steady, tenacious, and goal-oriented way of living.',
    },
    {
        img: Zodiac4,
        route: 'zodiac-signs/sagittarius-zodiac-sign',
        name: 'Sagittarius',
        description:
            'Sagittarius, the ninth zodiac sign. They are wise and like exploration. Jupiter ruled ‘Sagittarius’.  Symbolized by the archer, ‘Sagittarius’ individuals are dynamic and enthusiastic, and driven by inspiration.',
    },
    {
        img: Zodiac3,
        route: 'zodiac-signs/capricorn-zodiac-sign',
        name: 'Capricorn',
        description:
            'Capricorn, the tenth zodiac sign. They are the epitome of responsibility and perseverance. Saturn ruled ‘Capricorn’.  Symbolized by the sea-goat, ‘Capricorn’ individuals are pragmatic, hardworking, and look serious in nature.',
    },
    {
        img: Zodiac2,
        route: 'zodiac-signs/aquarius-zodiac-signs',
        name: 'Aquarius',
        description:
            'Aquarius, the eleventh zodiac sign. They do selfless services and live a conscious life. Saturn ruled ‘Aquarius’.  Symbolized by the water-bearer, ‘Aquarius’ individuals are introspective, focused, and disciplined.',
    },
    {
        img: Zodiac1,
        route: 'zodiac-signs/pisces-zodiac-sign',
        name: 'Pisces',
        description:
            'Pisces, the eleventh zodiac sign. They often live between dreams and reality. Jupiter ruled ‘Pisces’. Symbolized by the two-fish, ‘Pisces’ individuals are compassionate, harmonious, and empathetic.',
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
                    <img src={LeftArrow} alt="<" />
                </button>
                <button onClick={onNext} className={css.next_button}>
                    <img src={LeftArrow} alt=">" />
                </button>
                <div className={css.zodiac_slide_wrapper}>
                    {visibleZodiacs.map((z, index) => (
                        <div
                            key={index}
                            className={css.zodiac_card}
                            onClick={() => openLink(z.route)}
                        >
                            <img src={z.img} alt={z.name} />
                            <p className={css.zodiac_desc}>{z.description}</p>
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
