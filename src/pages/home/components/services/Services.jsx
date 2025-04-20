import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { APIHelper } from '../../../../util/APIHelper';
import ImgService1 from '../../../../assets/service_bg_1.png';
import ImgService2 from '../../../../assets/service_bg_2.png';
import ImgService3 from '../../../../assets/service_bg_3.png';
import ImgService4 from '../../../../assets/service_bg_4.png';

const Services = () => {
    const [isShowAll, setIsShowAll] = useState(false);
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

    const graphics = [ImgService1, ImgService2, ImgService3, ImgService4];

    return (
        <PageContainer className={css.container}>
            <h2 className={css.section_heading}>Services Offered</h2>
            <div className={css.service_list_container}>
                {(isShowAll ? serviceList : serviceList?.slice(0, 3)).map(
                    (s, index) => (
                        <ServiceCard
                            key={index}
                            service={s}
                            graphic={graphics[index % 4]}
                        />
                    )
                )}
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
