import React, { useState, useEffect } from 'react';
import css from './style.module.css';
import CitationBanner from '../../assets/citation-banner.png';
import IcChevronIcon from '../../assets/chevron-down.png';
import { NavLink } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { HorizontalBorder, Spacer } from '../../components/spacer/Spacer';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import ICStar from '../../assets/Star 4.png';
import Loader from './component/loading-animation/loader';
import SEO from '../../Seo';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';

const Citation = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 24;

    useEffect(() => {
        fetchCitations(page);
    }, [page]);

    const fetchCitations = async (page) => {
        try {
            setLoading(true);
            const res = await APIHelper.getCitations({
                page,
                pageSize,
                status: 1,
            });
            const newData = res.data.data;

            if (!newData || newData.length === 0) {
                setHasMore(false);
                return;
            }
            setVisibleData((prevVisibleData) => [...data, ...newData]);
            setData((prevData) => [...visibleData, ...newData]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching citations:', error);
            setError('Failed to load citations');
            setLoading(false);
        }
    };

    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const keywords = data.map((e) => e.Slug).join(', ');

    const description =
        'Explore our citations and references for astrology, numerology, kundali matching, and daily horoscopes. Trusted sources for accurate and reliable information.';

    const title = 'Acharya Ganesh Astrology Academy - Citation';
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} title={title} />
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
                                <img src={IcChevronIcon} alt={'>'} />
                            </span>{' '}
                            <span> Citations</span>
                        </p>
                    </div>
                </div>
            </div>

            <HorizontalBorder color={'#cebeb1'} />

            <div className={[css.row, css.discover_cities_container].join(' ')}>
                <h3 className={css.discover_heading}></h3>

                {loading && !visibleData?.length ? (
                    <div className={css.loaderContainer}>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className={css.city_container}>
                            {visibleData.map((citation, index) => (
                                <NavLink
                                    to={`/locations/${citation?.Slug}`}
                                    state={citation}
                                    key={index}
                                >
                                    <div className={css.city_wrapper}>
                                        <a>{citation?.Title}</a>
                                    </div>
                                </NavLink>
                            ))}
                        </div>

                        {loading && (
                            <div className={css.loaderContainer}>
                                <Loader />
                            </div>
                        )}

                        {hasMore && (
                            // <button
                            //     className={css.showMoreBtn}
                            //     onClick={handleShowMore}
                            // >
                            //     <img src={ICStar} alt={'*'} />
                            //     Show More
                            //     <img src={ICStar} alt={'*'} />
                            // </button>
                            <PrimaryButton
                                className={css.show_more_button}
                                onClick={handleShowMore}
                            >
                                Show More
                            </PrimaryButton>
                        )}
                    </>
                )}
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default Citation;
