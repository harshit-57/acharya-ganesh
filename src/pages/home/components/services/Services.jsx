import css from './style.module.css';
import { PageContainer } from '../../../../components/page-container/PageContainer';
import ServiceCard from './components/service-card/ServiceCard';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { APIHelper } from '../../../../util/APIHelper';
import { Images } from '../../../../util/constants';

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

    const graphics = [Images.default.ImgService1, Images.default.ImgService2, Images.default.ImgService3, Images.default.ImgService4];

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
