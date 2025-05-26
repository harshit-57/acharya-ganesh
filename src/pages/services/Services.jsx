import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import services from '../../data/service-list';
import ImgHeaderBg from '../../assets/services_banner.webp';
import IcChevronIcon from '../../assets/chevron-down.png';
import SEO from '../../Seo';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import ImgService1 from '../../assets/service_bg_1.png';
import ImgService2 from '../../assets/service_bg_2.png';
import ImgService3 from '../../assets/service_bg_3.png';
import ImgService4 from '../../assets/service_bg_4.png';
import Loader from '../../components/loader/Loader';

const Services = () => {
    const [serviceList, setServiceList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        try {
            setLoading(true);
            const response = await APIHelper.getServices({
                status: 1,
                active: 1,
            });
            setServiceList(response.data.data);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const graphics = [ImgService1, ImgService2, ImgService3, ImgService4];

    const keywords =
        'our story, who we are, about acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology';
    const description =
        'Learn about acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Discover our mission, team, and how we can guide you on your spiritual journey.';
    const title = 'Acharya Ganesh Astrology Academy | Services';
    return (
        <PageContainer>
            <SEO keywords={keywords} description={description} title={title} />
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Services</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={'>'} />
                            </span>{' '}
                            <span>Services</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.content_wrapper}>
                <div className={css.service_list_container}>
                    {loading && <Loader />}
                    {Array.isArray(services) &&
                        serviceList?.map((s, index) => (
                            <ServiceCard
                                key={index}
                                service={s}
                                graphic={graphics[index % 4]}
                            />
                        ))}
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

export default Services;
