import css from './style.module.css';

import { PageContainer } from '../../../../components/page-container/PageContainer';

import Zodiac1 from '../../../../assets/zodiac_1.png';
import Zodiac2 from '../../../../assets/zodiac_2.png';
import Zodiac3 from '../../../../assets/zodiac_3.png';
import Zodiac4 from '../../../../assets/zodiac_4.png';
import Zodiac5 from '../../../../assets/zodiac_5.png';
import Zodiac6 from '../../../../assets/zodiac_6.png';
import Zodiac7 from '../../../../assets/zodiac_7.png';
import Zodiac8 from '../../../../assets/zodiac_8.png';
import Zodiac9 from '../../../../assets/zodiac_9.png';
import Zodiac10 from '../../../../assets/zodiac_10.png';
import Zodiac11 from '../../../../assets/zodiac_11.png';
import Zodiac12 from '../../../../assets/zodiac_12.png';

import IcStar from '../../../../assets/star_rounded.png';

import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

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
                    <img src={Zodiac1} alt={'Zodiac image card'} />
                    <img src={Zodiac2} alt={'Zodiac image card'} />
                    <img src={Zodiac3} alt={'Zodiac image card'} />
                    <img src={Zodiac4} alt={'Zodiac image card'} />
                    <img src={Zodiac5} alt={'Zodiac image card'} />
                    <img src={Zodiac6} alt={'Zodiac image card'} />
                    <img src={Zodiac7} alt={'Zodiac image card'} />
                    <img src={Zodiac8} alt={'Zodiac image card'} />
                    <img src={Zodiac9} alt={'Zodiac image card'} />
                    <img src={Zodiac10} alt={'Zodiac image card'} />
                    <img src={Zodiac11} alt={'Zodiac image card'} />
                    <img src={Zodiac12} alt={'Zodiac image card'} />
                </div>
            </div>
            <div className={css.indicator_container}>
                {[...Array(indicatorCount)].map((c, i) => (
                    <img src={IcStar} alt={'Star icon'} />
                ))}
            </div>
        </PageContainer>
    );
};

export default ZodiacSigns;
