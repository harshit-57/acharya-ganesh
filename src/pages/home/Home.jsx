import css from './style.module.css';
import Hero from './components/hero/Hero';
import { PageContainer } from '../../components/page-container/PageContainer';
import Services from './components/services/Services';
import ZodiacSigns from './components/zodiac-signs/ZodiacSigns';
import { Section } from '../../components/section/Section';
import { HorizontalBorder } from '../../components/spacer/Spacer';
import DescriptionCarousel from './components/description-carousel/DescriptionCarousel';
import Gallery from '../../components/gallery/Gallery';
import Testimonial from './components/testimonials/Testimonials';
import Blog from '../../components/blog/Blog';
import { Footer } from '../../components/footer/Footer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
import { Helmet } from 'react-helmet-async';
import CitationBox from '../../components/citation-box/CitationBox';
import VideoReviews from './components/video-review/VideoReview';
import SEO from '../../Seo';
import { ToastContainer } from 'react-toastify';
const Home = () => {
    const keywords =
        'home, welcome, acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology, daily horoscope, zodiac signs';
    const description =
        'Welcome to acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Explore our services, courses, and expert guidance.';
    const title = 'Acharya Ganesh Astrology Academy';
    const metaTitle = 'Home';
    return (
        <PageContainer>
            <SEO
                keywords={keywords}
                description={description}
                title={title}
                metaTitle={metaTitle}
            />
            <Section>
                <Hero />
                <Services />
            </Section>
            <HorizontalBorder color={'#cebeb1'} />
            <Section classname={css.section_zodiac_n_more}>
                <ZodiacSigns />
                <DescriptionCarousel />
                <CoursesCarousel />
            </Section>
            <HorizontalBorder color={'#cebeb1'} />
            <Section classname={css.section_gallery_n_more}>
                <Gallery />
                <Testimonial />
                <VideoReviews />
                <Blog />
                <CitationBox />
            </Section>
            <Footer />
            <ToastContainer />
        </PageContainer>
    );
};

export default Home;
