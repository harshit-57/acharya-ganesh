import css from './style.module.css';
import Hero from './components/hero/Hero';
import { PageContainer } from '../../components/page-container/PageContainer';
import Services from './components/services/Services';
import ZodiacSigns from './components/zodiac-signs/ZodiacSigns';
import { Section } from '../../components/section/Section';
import { HorizontalBorder } from '../../components/spacer/Spacer';
import DescriptionCarousel from './components/description-carousel/DescriptionCarousel';
import Gallery from './components/gallery/Gallery';
import Testimonial from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import { Footer } from '../../components/footer/Footer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
const Home = () => {
    return (
        <PageContainer>
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
                <Blog />
            </Section>
            <Footer />
        </PageContainer>
    );
};

export default Home;
