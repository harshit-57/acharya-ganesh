import React from 'react';
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

const Citation = () => {
    return (
        <div className={[css.row, css.discover_cities_container].join(' ')}>
            <h3 className={css.discover_heading}>
                Discover Best Astrologers in your City
            </h3>
            <div className={css.city_container}>
                <NavLink to={`/citation/best-astrologers-in-delhi/delhi`}>
                    <img src={ImgDiscoverDelhi} alt={'Discover city icon'} />
                </NavLink>
                <NavLink to={`/citation/best-astrologers-in-mumbai/mumbai`}>
                    <img src={ImgDiscoverMumbai} alt={'Discover city icon'} />
                </NavLink>

                <NavLink to={`/citation/best-astrologers-in-banglore/banglore`}>
                    <img src={ImgDiscoverBanglore} alt={'Discover city icon'} />
                </NavLink>
                <NavLink to={`/citation/best-astrologers-in-chennai/chennai`}>
                    <img src={ImgDiscoverChennai} alt={'Discover city icon'} />
                </NavLink>
                <NavLink to={`/citation/best-astrologers-in-hydrabad/hydrabad`}>
                    <img src={ImgDiscoverHydrabad} alt={'Discover city icon'} />
                </NavLink>
                <NavLink to={`/citation/best-astrologers-in-pune/pune`}>
                    <img src={ImgDiscoverPune} alt={'Discover city icon'} />
                </NavLink>
                <NavLink
                    to={`/citation/best-astrologers-in-ahemdabad/ahemdabad`}
                >
                    <img
                        src={ImgDiscoverAhemdabad}
                        alt={'Discover city icon'}
                    />
                </NavLink>
                <NavLink to={`/citation/best-astrologers-in-kolkata/kolkata`}>
                    <img src={ImgDiscoverKolkata} alt={'Discover city icon'} />
                </NavLink>
            </div>
        </div>
    );
};

export default Citation;
