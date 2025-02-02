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

import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';

import { Spacer } from '../../../../components/spacer/Spacer';

const ZodiacSignList = [
    {
        img: Zodiac1,
        link: 'https://acharyaganesh.com/zodiac-signs/Pisces-zodiac-sign',
    },
    {
        img: Zodiac2,
        link: 'https://acharyaganesh.com/zodiac-signs/aquarius-zodiac-signs',
    },
    {
        img: Zodiac3,
        link: 'https://acharyaganesh.com/zodiac-signs/Capricorn-zodiac-sign',
    },
    {
        img: Zodiac4,
        link: 'https://acharyaganesh.com/zodiac-signs/Sagittarius-zodiac-sign',
    },
    {
        img: Zodiac5,
        link: 'https://acharyaganesh.com/zodiac-signs/scorpio-zodiac-signs',
    },
    {
        img: Zodiac6,
        link: 'https://acharyaganesh.com/zodiac-signs/Libra-zodiac-sign',
    },
    {
        img: Zodiac7,
        link: 'https://acharyaganesh.com/zodiac-signs/virgo-zodiac-signs',
    },
    {
        img: Zodiac8,
        link: 'https://acharyaganesh.com/zodiac-signs/Leo-zodiac-sign',
    },
    {
        img: Zodiac9,
        link: 'https://acharyaganesh.com/zodiac-signs/Cancer-zodiac-sign',
    },
    {
        img: Zodiac10,
        link: 'https://acharyaganesh.com/zodiac-signs/gemini-zodiac-sign',
    },
    {
        img: Zodiac11,
        link: ' https://acharyaganesh.com/zodiac-signs/taurus-zodiac-sign',
    },
    {
        img: Zodiac12,
        link: 'https://acharyaganesh.com/zodiac-signs/aries-zodiac-sign',
    },
];

const ZodiacSigns = () => {
    const containerRef = useRef();
    const wrapperRef = useRef();
    const [indicatorCount, setIndicatorCount] = useState(0);

    useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth;
        const wrapperWidth = wrapperRef.current.scrollWidth;
        setIndicatorCount(Math.ceil(wrapperWidth / containerWidth));
    }, []);

    useScrollPosition(
        ({ currPos }) => {},
        [],
        false,
        false,
        undefined,
        wrapperRef
    );

    const openLink = (link) => {
        window.open(link, '_blank');
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
                <div className={css.slides_wrapper} ref={wrapperRef}>
                    {Array.isArray(ZodiacSignList) &&
                        ZodiacSignList.map((z, i) => (
                            <img
                                key={i}
                                src={z.img}
                                alt={'Zodiac image card'}
                                onClick={() => openLink(z.link)}
                            />
                        ))}
                </div>
            </div>
            <Spacer vertical={'48px'} />
            <IndicatorContainer count={indicatorCount} currentIndex={0} />
        </PageContainer>
    );
};

export default ZodiacSigns;
