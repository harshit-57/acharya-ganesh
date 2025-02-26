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
const Home = () => {
    const keywords = "home, welcome, acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology, daily horoscope, zodiac signs";
    const description = "Welcome to acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Explore our services, courses, and expert guidance.";
    return (
        <PageContainer>
            <SEO keywords={keywords} description={description}/>
            {/* <Helmet>
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

                <meta
                    property="og:url"
                    content="https://courses.acharyaganesh.com"
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
            </Helmet> */}
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
        </PageContainer>
    );
};

export default Home;
