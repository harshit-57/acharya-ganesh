import React, { useEffect } from 'react';
import css from './style.module.css';
import ImgDiscoverDelhi from '../../assets/discover_delhi.png';
import ImgDiscoverKolkata from '../../assets/discover_kolkata.png';
import ImgDiscoverMumbai from '../../assets/discover_mumbai.png';
import ImgDiscoverBanglore from '../../assets/discover_banglore.png';
import ImgDiscoverChennai from '../../assets/discover_chennai.png';
import ImgDiscoverHydrabad from '../../assets/discover_hydrabad.png';
import ImgDiscoverPune from '../../assets/discover_pune.png';
import ImgDiscoverAhemdabad from '../../assets/discover_ahemdabad.png';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from '../primary-button/PrimaryButton';
import citationList from '../../data/citation-list';
import { APIHelper } from '../../util/APIHelper';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = {
    mobile: 0,
    tablet: 768,
    desktop: 1255,
    largeDesktop: 1570,
    ultraWide: 1920,
    ultraWide2: 2270,
};

const PER_FRAME_CITATION_COUNT_ULTRA_WIDE2 = 6;
const PER_FRAME_CITATION_COUNT_ULTRA_WIDE = 10;
const PER_FRAME_CITATION_COUNT_LARGE_DESKTOP = 8;
const PER_FRAME_CITATION_COUNT_DESKTOP = 9;
const PER_FRAME_CITATION_COUNT_TABLET = 6;
const PER_FRAME_CITATION_COUNT_MOBILE = 5;

const CitationBox = ({ breakpoints }) => {
    const { breakpoint } = useBreakpoint(breakpoints || BREAKPOINTS, 'desktop');

    const getCitationCountPerFrame = (device) => {
        switch (device) {
            case 'mobile':
                return PER_FRAME_CITATION_COUNT_MOBILE;
            case 'tablet':
                return PER_FRAME_CITATION_COUNT_TABLET;
            case 'desktop':
                return PER_FRAME_CITATION_COUNT_DESKTOP;
            case 'largeDesktop':
                return PER_FRAME_CITATION_COUNT_LARGE_DESKTOP;
            case 'ultraWide':
                return PER_FRAME_CITATION_COUNT_ULTRA_WIDE;
            case 'ultraWide2':
                return PER_FRAME_CITATION_COUNT_ULTRA_WIDE2;
            default:
                return PER_FRAME_CITATION_COUNT_ULTRA_WIDE; // Fallback to desktop
        }
    };

    const pageSize = getCitationCountPerFrame(breakpoint);

    const [citations, setCitations] = React.useState([]);

    useEffect(() => {
        fetchCitations();
    }, [pageSize]);

    const fetchCitations = async (page) => {
        try {
            const res = await APIHelper.getCitations({
                pageSize,
                status: 1,
            });
            setCitations(res.data?.data || []);
        } catch (error) {
            console.error('Error fetching citations:', error);
        }
    };
    return (
        <div className={[css.row, css.discover_cities_container].join(' ')}>
            <h3 className={css.discover_heading}>
                Discover Best Astrologers in your City
            </h3>
            <div className={css.city_container}>
                {citations?.map((citation, index) => (
                    <div key={index} className={css.city_wrapper}>
                        <NavLink
                            className={'content-two-line'}
                            to={`/locations/${citation?.Slug}`}
                            state={citation}
                        >
                            {citation?.Title}
                        </NavLink>
                    </div>
                ))}
            </div>
            <NavLink to={'/citation'}>
                <PrimaryButton className={css.show_more_button}>
                    Show More
                </PrimaryButton>
            </NavLink>
        </div>
    );
};

export default CitationBox;
