import { Helmet } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, siteUrl, checkout }) => {
    const location = useLocation();
    const currentUrl = `${siteUrl}${location.pathname}`;

    return (
        <Helmet>
            <script>var orgCountry = "IN";</script>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="google-site-verification" content="" />

            <link rel="canonical" href={currentUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />
            <meta name="google" content="notranslate" />

            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            {checkout ? (
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            ) : null}
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Acharya Ganesh Astrology Academy',
    description:
        'Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!',
    keywords:
        'astrology, horoscope, cosmic, Learn astrology, online astrology, online astro',
    image: 'https://courses.acharyaganesh.com/logo.png?v=3',
    siteUrl: 'http://34.131.192.173', // Update this dynamically later if needed
};

export default SEO;
