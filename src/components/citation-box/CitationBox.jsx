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

const CitationBox = () => {
    const [citations, setCitations] = React.useState([]);

    useEffect(() => {
        fetchCitations();
    }, []);

    const fetchCitations = async (page) => {
        try {
            const res = await APIHelper.getCitations({
                pageSize: 6,
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
                {citations?.map((citation) => (
                    <div className={css.city_wrapper}>
                        <NavLink
                            to={`/citation/${citation?.Slug}`}
                            state={citation}
                        >
                            <a>{citation?.Title}</a>
                        </NavLink>
                    </div>
                ))}
            </div>
            <NavLink to={'/citation'}>
                <PrimaryButton className={css.show_more_button}>
                    Show All
                </PrimaryButton>
            </NavLink>
        </div>
    );
};

export default CitationBox;
