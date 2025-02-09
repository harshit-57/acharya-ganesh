import React from 'react';
import css from './style.module.css';
import CitationBanner from '../../assets/citation-banner.png';
import IcChevronIcon from '../../assets/chevron-down.png';
import { NavLink } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { HorizontalBorder, Spacer } from '../../components/spacer/Spacer';
import { Footer } from '../../components/footer/Footer';
import citationList from '../../data/citation-list';

const Citation = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${CitationBanner})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Citations</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span> Citations</span>
                        </p>
                    </div>
                </div>
            </div>

            <HorizontalBorder color={'#cebeb1'} />
            <div className={[css.row, css.discover_cities_container].join(' ')}>
                {/* <h3 className={css.discover_heading}>
                    Discover Best Astrologers in your City
                </h3> */}
                <div className={css.city_container}>
                    {citationList?.map((citation) => (
                        <div className={css.city_wrapper}>
                            <NavLink
                                to={`/citation/${citation?.route}`}
                                state={citation}
                            >
                                <a>{citation?.name}</a>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default Citation;
