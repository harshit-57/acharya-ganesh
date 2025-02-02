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

const Citation = () => {
    return (
        <div className={[css.row, css.discover_cities_container].join(' ')}>
            <h3 className={css.discover_heading}>
                Discover Best Astrologers in your City
            </h3>
            <div className={css.city_container}>
                <img src={ImgDiscoverDelhi} alt={'Discover city icon'} />
                <img src={ImgDiscoverDelhi} alt={'Discover city icon'} />
                <img src={ImgDiscoverMumbai} alt={'Discover city icon'} />
                <img src={ImgDiscoverBanglore} alt={'Discover city icon'} />
                <img src={ImgDiscoverChennai} alt={'Discover city icon'} />
                <img src={ImgDiscoverHydrabad} alt={'Discover city icon'} />
                <img src={ImgDiscoverPune} alt={'Discover city icon'} />
                <img src={ImgDiscoverKolkata} alt={'Discover city icon'} />
                <img src={ImgDiscoverAhemdabad} alt={'Discover city icon'} />
            </div>
        </div>
    );
};

export default Citation;
