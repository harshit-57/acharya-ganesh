import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import services from '../../../../data/service-list';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';

const Services = () => {
    const [isShowAll, setIsShowAll] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    useEffect(
        () =>
            isShowAll
                ? setServiceList(services)
                : setServiceList(services.slice(0, 3)),
        [isShowAll]
    );
    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>Services Offered</h2>
            <div className={css.service_list_container}>
                {Array.isArray(services) &&
                    serviceList.map((s, index) => (
                        <ServiceCard key={index} service={s} />
                    ))}
            </div>
            <PrimaryButton
                className={css.show_more_button}
                onClick={() => setIsShowAll(!isShowAll)}
            >
                {isShowAll ? 'Show Less' : 'Show All'}
            </PrimaryButton>
        </PageContainer>
    );
};

export default Services;
