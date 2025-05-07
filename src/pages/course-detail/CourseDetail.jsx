import css from './style.module.css';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { PriceAndPurchaseSection } from './components/price-n-purchase-section/PriceAndPurchase';

import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import parse from 'html-react-parser';
import SEO from '../../Seo';
import useApp from '../../hook/useApp';
const CourseDetail = () => {
    const {
        theme: { Images },
    } = useApp();
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [course, setCourse] = useState(null);
    useEffect(() => {
        if (searchParams?.get('preview')) {
            setCourse(state?.data);
            return;
        }
        getCourse();
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

    const keywords = course?.Tags?.map((e) => e.TagName).join(', ');
    const description = course?.Meta_Desc;

    return (
        <PageContainer className={css.container}>
            <SEO keywords={keywords} description={description} />
            <div
                style={{
                    backgroundImage: `url(${Images.ImgHeaderBgContactAlt})`,
                }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <div className={css.content}>
                <PriceAndPurchaseSection course={course} />
                <div className={css.description_container}>
                    <div className={css.section_label}>
                        <img src={Images.IcDescription} alt={'Description'} />
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
