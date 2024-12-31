import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import services from '../../../../data/service-list';

const Services = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => setServiceList(services), []);
    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>Services Offered</h2>
            <div className={css.service_list_container}>
                {Array.isArray(services) &&
                    serviceList.map((s, index) => (
                        <ServiceCard key={index} service={s} />
                    ))}
            </div>
        </PageContainer>
    );
};

export default Services;
