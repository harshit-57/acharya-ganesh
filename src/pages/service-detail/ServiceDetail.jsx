import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import IcStar from '../../assets/star_primary_dark.png';
import ImgHeaderBg from '../../assets/about_header_bg.png';
import { useEffect, useState } from 'react';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import SEO from '../../Seo';
import {
    NavLink,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import Blog from '../../components/blog/Blog';
import CitationBox from '../../components/citation-box/CitationBox';
import { Spacer } from '../../components/spacer/Spacer';
import parse from 'html-react-parser';
import { APIHelper } from '../../util/APIHelper';
import { ServiceSidebar } from './components/sidebar/ServiceSidebar';
import { PrimaryButton } from '../../components/primary-button/PrimaryButton';
import Loader from '../../components/loader/Loader';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [searchParams] = useSearchParams();

    const [service, setService] = useState(null);

    useEffect(() => {
        if (searchParams?.get('preview')) {
            setService(state?.data);
            return;
        }
        getService();
    }, [slug]);

    const getService = async () => {
        try {
            const response = await APIHelper.getServices({
                slug: slug,
                status: 1,
                active: 1,
            });
            if (!response?.data?.data?.length) {
                navigate('/services');
            }
            setService(response.data.data[0]);

            // const service = services.find((e) => e.Slug === slug);
            // if (!service) {
            //     navigate('/services');
            // }
            // setService(service);
        } catch (e) {
            console.log(e);
        }
    };

    const keywords = service?.Focus_Keyphrase
        ? `${service?.Focus_Keyphrase}, ${service?.Tags?.map(
              (e) => e.TagName
          ).join(', ')}`
        : service?.Tags?.map((e) => e.TagName).join(', ') ||
          'our story, who we are, about acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology';
    const description =
        service?.Meta_Desc ||
        'Learn about acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Discover our mission, team, and how we can guide you on your spiritual journey.';
    const title = service?.Meta_SiteName;
    const metaTitle = service?.Meta_Title;

    if (!service) {
        return <Loader style={{ position: 'fixed' }} />;
    }

    return (
        <PageContainer>
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
            <div className={css.content_wrapper}>
                <div className={css.content_container}>
                    <div className={css.column}>
                        {service?.Title && (
                            <h3 className={css.heading}>{service?.Title}</h3>
                        )}
                        {service?.SubTitle && (
                            <h6 className={css.sub_heading}>
                                {service?.SubTitle}
                            </h6>
                        )}
                    </div>
                    {/* <div className={css.row}>
                        <div className={`html-content bullet ${css.card_desc}`}>
                            {parse(service?.Description || '')}
                        </div>
                        <div className={css.card_img_container}>
                            <img
                                className={css.card_img}
                                src={service?.Image || ImgConsultationPoster}
                                alt={'Consultation poster'}
                            />
                        </div>
                    </div>
                    <NavLink to={service?.Link || ''} className={css.button}>
                        <PrimaryButton>
                            {service?.LinkText || 'Book Consultation'}
                        </PrimaryButton>
                    </NavLink> */}

                    <div className={css.row}>
                        <div className={css.column}>
                            <div className={css.card_desc}>
                                <div className={`html-content bullet`}>
                                    {parse(service?.Description || '')}
                                </div>
                                <a
                                    href={service?.Link || ''}
                                    target="_blank"
                                    className={css.button}
                                >
                                    <PrimaryButton>
                                        {service?.LinkText ||
                                            'Book Consultation'}
                                    </PrimaryButton>
                                </a>
                            </div>

                            <Blog
                                breakpoints={{
                                    mobile: 0,
                                    tablet: 1260,
                                    desktop: 1605,
                                    largeDesktop: 1950,
                                }}
                            />
                            <CitationBox
                                breakpoints={{
                                    mobile: 0,
                                    tablet: 1220,
                                    desktop: 1570,
                                    largeDesktop: 1920,
                                    ultraWide: 2270,
                                    ultraWide2: 2620,
                                }}
                            />
                        </div>
                        <ServiceSidebar service={service} />
                    </div>
                </div>
            </div>
            <Spacer vertical={'20px'} />
            <Footer />
        </PageContainer>
    );
};

const Bullet = ({ children }) => {
    return (
        <div className={css.bullet}>
            <img src={IcStar} alt={'*'} />
            <p>{children}</p>
        </div>
    );
};

export default ServiceDetail;
