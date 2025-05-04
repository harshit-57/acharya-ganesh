import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Spacer } from '../../components/spacer/Spacer';
import { useEffect, useState } from 'react';
import { CourseCard } from './components/course-card/CourseCard';
import { Footer } from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { APIHelper } from '../../util/APIHelper';
import SEO from '../../Seo';
import { Images } from '../../util/constants';
const COURSE_PER_PAGE = 8;
const CoursesList = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [coursetags, setCourseTags] = useState([]);
    const [courseCategories, setCourseCategories] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilterDropDown, setShowFilterDropDown] = useState({
        sort: false,
        category: false,
    });
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('pr."PublishedOn"');
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetchCourseTags();
        fetchCourseCategories();
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [currentPage, searchQuery, sortBy, order, category]);
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
                    status: 1,
                    active: 1,
                    search: searchQuery,
                    sort: order,
                    sortBy: sortBy,
                    category: category ? category?.Slug : undefined,
                });
            } else {
                response = await APIHelper.getCourses({
                    page: currentPage,
                    pageSize: COURSE_PER_PAGE,
                    status: 1,
                    active: 1,
                    sort: order,
                    sortBy: sortBy,
                    category: category ? category?.Slug : undefined,
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

    const fetchCourseTags = async () => {
        try {
            const response = await APIHelper.getBlogTags({
                status: 1,
            });
            setCourseTags(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchCourseCategories = async () => {
        try {
            const response = await APIHelper.getCourseCategories({
                status: 1,
                active: 1,
            });
            setCourseCategories(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const keywords = coursetags.map((e) => e.Name).join(', ');
    const description =
        'Discover our wide range of courses on astrology, numerology, kundali matching, and daily horoscopes. Enhance your knowledge and skills with expert-led training.';
    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} />
            <div
                style={{
                    backgroundImage: `url(${Images.default.ImgCourseBanner})`,
                }}
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
                                <img
                                    src={Images.default.IcChevronIcon}
                                    alt={'>'}
                                />
                            </span>{' '}
                            <span>Courses</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.filter_container}>
                <div className={css.filter_item_wrapper}>
                    <div>
                        <img src={Images.default.ICSearchMd} alt={'Search'} />
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
                <div
                    className={css.filter_item_wrapper}
                    style={{ display: 'flex', gap: '10px' }}
                >
                    <div
                        onClick={() =>
                            setShowFilterDropDown({
                                sort: false,
                                category: !showFilterDropDown?.category,
                            })
                        }
                    >
                        <img src={Images.default.ICFilter} alt={'Filter'} />
                        <p>{category ? category?.Name : 'Select Category'}</p>
                        {showFilterDropDown?.category && (
                            <div className={css.filter_dropdown}>
                                <p onClick={() => setCategory(null)}>
                                    Select Category
                                </p>
                                {courseCategories?.map((c) => (
                                    <p onClick={() => setCategory(c)}>
                                        {c?.Name}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        onClick={() =>
                            setShowFilterDropDown({
                                category: false,
                                sort: !showFilterDropDown?.sort,
                            })
                        }
                    >
                        <img src={Images.default.ICFilter} alt={'Filter'} />
                        <p>
                            {sortBy == 'pr."PublishedOn"' && order == 'asc'
                                ? 'Older'
                                : sortBy == 'pr."Sale_Price"' && order == 'asc'
                                ? 'Price Low to High'
                                : sortBy == 'pr."Sale_Price"' && order == 'desc'
                                ? 'Price High to Low'
                                : 'Latest'}
                        </p>
                        {showFilterDropDown?.sort && (
                            <div className={css.filter_dropdown}>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'desc',
                                            'pr."PublishedOn"'
                                        )
                                    }
                                >
                                    Latest
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'asc',
                                            'pr."PublishedOn"'
                                        )
                                    }
                                >
                                    Older
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'asc',
                                            'pr."Sale_Price"'
                                        )
                                    }
                                >
                                    Price: Low to High
                                </p>
                                <p
                                    onClick={() =>
                                        handleSortingFilter(
                                            'desc',
                                            'pr."Sale_Price"'
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
                            onClick={() => navigate(`/course/${course?.Slug}`)}
                        />
                    ))}
            </div>
            {pageCount > 1 && (
                <div className={css.page_number_container}>
                    <p
                        style={{
                            opacity: currentPage <= 1 ? '0.5' : '1',
                        }}
                        onClick={() => {
                            if (currentPage > 1)
                                setCurrentPage(currentPage - 1);
                        }}
                    >
                        Prev
                    </p>
                    <p
                        style={{
                            backgroundColor:
                                currentPage === 1
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </p>

                    {currentPage > 4 && <p>...</p>}

                    {[...Array(5)].map((_, index) => {
                        const page = currentPage - 2 + index;
                        if (page > 1 && page < pageCount) {
                            return (
                                <p
                                    key={page}
                                    style={{
                                        backgroundColor:
                                            page === currentPage
                                                ? 'var(--color-primary)'
                                                : 'transparent',
                                    }}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </p>
                            );
                        }
                        return null;
                    })}

                    {currentPage < pageCount - 3 && <p>...</p>}

                    <p
                        style={{
                            backgroundColor:
                                currentPage === pageCount
                                    ? 'var(--color-primary)'
                                    : 'transparent',
                        }}
                        onClick={() => setCurrentPage(pageCount)}
                    >
                        {pageCount}
                    </p>
                    <p
                        style={{
                            opacity: currentPage >= pageCount ? '0.5' : '1',
                        }}
                        onClick={() => {
                            if (currentPage < pageCount)
                                setCurrentPage(currentPage + 1);
                        }}
                    >
                        Next
                    </p>
                </div>
            )}

            <Spacer vertical={'72px'} />
            <Footer />
        </PageContainer>
    );
};

export default CoursesList;
