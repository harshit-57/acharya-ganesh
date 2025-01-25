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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
import parse from 'html-react-parser';
const CourseDetail = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    useEffect(() => {
        getCourse();
    }, [slug]);
    const getCourse = async () => {
        try {
            const response = await APIHelper.getCourses({ slug: slug });
            setCourse(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <PageContainer className={css.container}>
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
                        <img src={IcDescription} alt={'Description icon'} />
                        <p>Description</p>
                    </div>
                    <div className={css.description}>
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
