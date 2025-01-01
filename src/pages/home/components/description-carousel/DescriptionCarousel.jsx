import css from './style.module.css';

import { PageContainer } from '../../../../components/page-container/PageContainer';
import { DescriptionCard } from './components/description-card/DescriptionCard';
import { useState } from 'react';

import { IndicatorContainer } from '../../../../components/indicator-container/IndicatorContainer';

import ImgDesc1 from '../../../../assets/description_image_1.png';
import ImgDesc2 from '../../../../assets/description_image_2.png';
import ImgDesc3 from '../../../../assets/description_image_3.png';

const descriptionList = [
    {
        bg: ImgDesc1,
        title: 'Begin Your Astrological Journey Today',
        detail: 'Let Acharya Ganesh illuminate your path to enlightenment. Our online astrology courses are more than just learning opportunities; they invite a transformative experience that aligns you with cosmic rhythms and universal wisdom. Learn Astrology Online with us and unlock the cosmic code that governs the universe. From online consultation to learning the nuances of the astrological world, Acharya Ganesh is here for you at every step. ',
    },
    {
        bg: ImgDesc2,
        title: 'Discover Our Online Astrology Courses',
        detail: 'Discover the cosmic secrets of astrology and Vastu with Acharya Ganesh, your trusted partner for enlightenment. Dive into our online astrology and Vastu classes to unlock the universe’s secrets. Whether seeking guidance on your Kundli or aiming to deepen your understanding of celestial energies, our expert consultations have you covered.',
    },
    {
        bg: ImgDesc3,
        title: 'Embrace the Best Astrologer Online Consultation',
        detail: 'In the digital age, wisdom knows no boundaries. Acharya Ganesh brings the ancient art of astrology into the modern era with Best Astrologer Online Consultation. The sessions are not just conversations but experiences crafted for the digital soul. From the comfort of your home, start on a tour across the cosmic seas, navigating through the stars with Acharya Ganesh as your trusted guide. Our expertise illuminates the path, offering clarity and understanding in every aspect of your life.',
    },
];

const DescriptionCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const onNext = () => {
        if (currentIndex < descriptionList.length - 1)
            setCurrentIndex(currentIndex + 1);
    };

    return (
        <PageContainer className={css.container}>
            <div className={css.description_card_wrapper}>
                <DescriptionCard
                    description={descriptionList[currentIndex]}
                    className={css.description_card}
                />
            </div>
            <IndicatorContainer
                count={3}
                className={css.indicator_container}
                onIndicatorClick={(index) => setCurrentIndex(index)}
                currentIndex={currentIndex}
            />
        </PageContainer>
    );
};

export default DescriptionCarousel;
