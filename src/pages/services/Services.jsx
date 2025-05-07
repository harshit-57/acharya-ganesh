import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import services from '../../data/service-list';
import SEO from '../../Seo';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import { APIHelper } from '../../util/APIHelper';
import useApp from '../../hook/useApp';

const Services = () => {
    const {
        theme: { Images },
    } = useApp();
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        try {
            const response = await APIHelper.getServices({
                status: 1,
                active: 1,
            });
            setServiceList(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const graphics = [
        Images.ImgService1,
        Images.ImgService2,
        Images.ImgService3,
        Images.ImgService4,
    ];

    const keywords =
        'our story, who we are, about acharyaganesh, astrology, numerology, spiritual guidance, kundali, horoscope, vedic astrology';
    const description =
        'Learn about acharyaganesh, your trusted source for astrology, numerology, kundali matching, and daily horoscopes. Discover our mission, team, and how we can guide you on your spiritual journey.';

    return (
        <PageContainer>
            <SEO keywords={keywords} description={description} />
            <div
                style={{
                    backgroundImage: `url(${Images.ImgServiceBanner})`,
                }}
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
                                <img src={Images.IcChevronIcon} alt={'>'} />
                            </span>{' '}
                            <span>Services</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.content_wrapper}>
                <div className={css.service_list_container}>
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
