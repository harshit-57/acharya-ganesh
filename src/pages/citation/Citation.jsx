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

const Citation = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 100;

    useEffect(() => {
        fetchCitations(page);
    }, [page]);

    const fetchCitations = async (page) => {
        try {
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
                <h3 className={css.discover_heading}></h3>

                {loading ? (
                    <div className={css.loaderContainer}>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className={css.city_container}>
                            {visibleData.map((citation, index) => (
                                <NavLink
                                    to={`/citation/${citation?.Slug}`}
                                    state={citation}
                                    key={index}
                                >
                                    <div className={css.city_wrapper}>
                                        <a>{citation?.Title}</a>
                                    </div>
                                </NavLink>
                            ))}
                        </div>

                        {hasMore && (
                            <button
                                className={css.showMoreBtn}
                                onClick={handleShowMore}
                            >
                                <img src={ICStar} alt={''} />
                                Show More
                                <img src={ICStar} alt={''} />
                            </button>
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
