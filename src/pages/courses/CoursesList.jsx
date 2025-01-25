import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcChevronIcon from '../../assets/chevron-down.png';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import ImgHeaderBg from '../../assets/courses_header_bg.png';
import ICSearchMd from '../../assets/search-md.png';
import ICFilter from '../../assets/filter-lines.png';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { CourseCard } from './components/course-card/CourseCard';
import { Footer } from '../../components/footer/Footer';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
const COURSE_PER_PAGE = 8;
const CoursesList = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterDropDown, setShowFilterDropDown] = useState(false);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('pr.PublishedOn');

    useEffect(() => {
        fetchCourses();
    }, [currentPage, searchQuery, sortBy, order]);
    const handleSortingFilter = (p1, p2) => {
        setOrder(p1);
        setSortBy(p2);
        setShowFilterDropDown(false);
    };

    const fetchCourses = async () => {
        try {
            setLoading(true);
            let response;
            if (searchQuery && searchQuery?.length >= 3) {
                response = await APIHelper.getCourses({
                    page: currentPage,
                    pageSize: COURSE_PER_PAGE,
                    search: searchQuery,
                    sort: order,
                    sortBy: sortBy,
                });
            } else {
                response = await APIHelper.getCourses({
                    page: currentPage,
                    pageSize: COURSE_PER_PAGE,
                    sort: order,
                    sortBy: sortBy,
                });
            }
            setCourses(response.data?.data);
            const totalPage = Math.round(
                (response.data?.total || 1) / COURSE_PER_PAGE
            );
            setPageCount(totalPage);
            setLoading(false);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    };
    return (
        <PageContainer className={css.container}>
            <Helmet>
                <script>var orgCountry = "IN";</script>
                <title>Acharya Ganesh Astrology Academy</title>
                <meta
                    name="keywords"
                    content="astrology, horoscope, cosmic, Learn astrology, online astrology, online astro"
                />
                <meta
                    name="description"
                    content="Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!"
                />
                <meta name="google-site-verification" content="" />

                <link
                    rel="canonical"
                    href="https://courses.acharyaganesh.com/s/store"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Acharya Ganesh Astrology Academy"
                />
                <meta
                    property="og:description"
                    content="Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!"
                />
                <meta
                    property="og:image"
                    content="https://courses.acharyaganesh.com/logo.png?v=3"
                />
                <meta name="google" content="notranslate" />

                <link
                    rel="canonical"
                    href="https://courses.acharyaganesh.com/"
                />

                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
            </Helmet>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Courses</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>Courses</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.filter_container}>
                <div className={css.filter_item_wrapper}>
                    <div>
                        <img src={ICSearchMd} alt={'Search icon'} />
                        <input
                            type={'text'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target?.value)}
                            placeholder={'Search'}
                        />
                    </div>
                </div>
                <div className={css.filter_item_wrapper}>
                    <p>
                        Showing {(currentPage - 1) * COURSE_PER_PAGE + 1}-
                        {currentPage * COURSE_PER_PAGE} of{' '}
                        {pageCount * COURSE_PER_PAGE} Results
                    </p>
                </div>
                <div className={css.filter_item_wrapper}>
                    <div
                        onClick={() =>
                            setShowFilterDropDown(!showFilterDropDown)
                        }
                    >
                        <img src={ICFilter} alt={'Filter icon'} />
                        <p>
                            {sortBy == 'pr.PublishedOn' && order == 'asc'
                                ? 'Older'
                                : sortBy == 'pr.Sale_Price' && order == 'asc'
                                ? 'Price Low to High'
                                : sortBy == 'pr.Sale_Price' && order == 'desc'
                                ? 'Price High to Low'
                                : 'Latest'}
                        </p>
                        {showFilterDropDown && (
                            <div className={css.filter_dropdown}>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'desc',
                                            'pr.PublishedOn'
                                        )
                                    }
                                >
                                    Latest
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'asc',
                                            'pr.PublishedOn'
                                        )
                                    }
                                >
                                    Older
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'asc',
                                            'pr.Sale_Price'
                                        )
                                    }
                                >
                                    Price: Low to High
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'desc',
                                            'pr.Sale_Price'
                                        )
                                    }
                                >
                                    Price: High to Low
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={css.list_container}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    courses &&
                    Array.isArray(courses) &&
                    courses.map((course, index) => (
                        <CourseCard
                            key={course?.Id || index}
                            course={course}
                            className={css.course_card}
                            onClick={() => navigate(course?.Slug)}
                        />
                    ))}
            </div>
            <div className={css.page_number_container}>
                {[...Array(3)].map((number, index) => (
                    <p
                        style={{
                            backgroundColor:
                                index + 1 == currentPage
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </p>
                ))}
                <p>...</p>
                <p
                    style={{
                        backgroundColor:
                            pageCount == currentPage
                                ? 'var(--color-primary)'
                                : 'transparent',
                    }}
                    onClick={() => setCurrentPage(pageCount)}
                >
                    {pageCount}
                </p>
            </div>
            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default CoursesList;
