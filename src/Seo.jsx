import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getBaseUrl } from './util/APIHelper';

const initProps = {
    title: 'Acharya Ganesh Astrology Academy',
    description:
        'Discover your destiny with Acharya Ganesh Astrology Academy. Learn astrology, horoscope reading, and cosmic insights. Enroll now!',
    keywords:
        'astrology, horoscope, cosmic, Learn astrology, online astrology, online astro',
    image: 'https://acharyaganesh.com/assets/brand_logo-CK90PEUF.png',
    siteUrl: 'https://acharyaganesh.com',
    checkout: false,
};

const SEO = ({
    title = initProps.title,
    metaTitle, // SEO Title from API
    description = initProps.description,
    keywords = initProps.keywords,
    image = initProps.image,
    siteUrl = initProps.siteUrl,
    checkout = initProps.checkout,
    canonicalUrl,
}) => {
    const location = useLocation();
    const currentUrl = canonicalUrl || `${siteUrl}${location.pathname}`;
    return (
        <Helmet>
            <script>var orgCountry = "IN";</script>
            {/* Page Title */}
            <title>{title}</title>
            {/* SEO Title */}
            <meta name="title" content={metaTitle || title} />
            {/* SEO Description */}
            <meta name="description" content={description} />
            {/* Focus Keyphrase and Tags as Keywords */}
            <meta name="keywords" content={keywords} />
            <meta name="google-site-verification" content="" />

            {/* Open Graph Tags */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={metaTitle || title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle || title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />
            <meta name="google" content="notranslate" />

            {/* Favicon and Preconnect */}
            <link rel="shortcut icon" href="/icon.webp" type="image/x-icon" />
            <link rel="icon" href="/icon.webp" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />

            {/* Razorpay Script for Checkout */}
            {checkout ? (
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            ) : null}
        </Helmet>
    );
};

export default SEO;
