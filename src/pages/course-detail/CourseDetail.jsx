import css from './style.module.css';
import ImgHeaderBg from '../../assets/contact_header_bg.png';
import IcDescription from '../../assets/ic_description.png';
import IcStar from '../../assets/star_primary_dark.png';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { PriceAndPurchaseSection } from './components/price-n-purchase-section/PriceAndPurchase';
import { CourseCard } from './components/course-card/CourseCard';
import ImgCourse1 from '../../assets/course_1.png';
import {
    useLoaderData,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import { longFormatters } from 'date-fns';
import SEO from '../../Seo';
import Loader from '../../components/loader/Loader';
const CourseDetail = () => {
    const loaderData = useLoaderData();
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [course, setCourse] = useState(loaderData?.course || null);
    useEffect(() => {
        if (searchParams?.get('preview')) {
            setCourse(state?.data);
            return;
        }
        if (!course) getCourse();
    }, [slug]);

    const getCourse = async () => {
        try {
            const response = await APIHelper.getCourses({
                slug: slug,
                status: 1,
                active: 1,
            });
            if (!response?.data?.data?.length) {
                navigate('/course');
            }
            setCourse(response.data.data[0]);

            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    const keywords = course?.Focus_Keyphrase
        ? `${course?.Focus_Keyphrase}, ${course?.Tags?.map(
              (e) => e.TagName
          ).join(', ')}`
        : course?.Tags?.map((e) => e.TagName).join(', ');
    const description = course?.Meta_Desc;
    const title = course?.Meta_SiteName;
    const metaTitle = course?.Meta_Title;

    if (!course) return <Loader style={{ position: 'fixed' }} />;

    return (
        <PageContainer className={css.container}>
            <SEO
                keywords={keywords}
                description={description}
                title={title}
                metaTitle={metaTitle}
            />
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content}>
                <PriceAndPurchaseSection course={course} />
                <div className={css.description_container}>
                    <div className={css.section_label}>
                        <img src={IcDescription} alt={'Description'} />
                        <p>Description</p>
                    </div>
                    <div className={`html-content`}>
                        {parse(course?.ProductDescription || '')}
                    </div>
                </div>
            </div>
            {/* <div className={css.related_courses_container}>
                <p className={css.section_heading}>Related Products</p>
                <div className={css.related_product_container}>
                    <CourseCard course={course} />
                    <CourseCard course={course} />
                    <CourseCard course={course} />
                </div>
            </div> */}
            <Footer />
        </PageContainer>
    );
};

export default CourseDetail;
