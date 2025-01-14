import { PageContainer } from '../../../../components/page-container/PageContainer';
import css from './style.module.css';
import BgImage from '../../../../assets/solar_system.jpg';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { TopBar } from '../../../../components/top-bar/TopBar';
import { Navigation } from '../../../../components/navigation/Navigation';

const Hero = () => {
    return (
        <PageContainer
            className={css.container}
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <TopBar />
            <Navigation />
            <div className={css.hero_text_container}>
                <div className={css.hero_text_wrapper}>
                    <p>Welcome To</p>
                    <h1>Acharya Ganesh’s</h1>
                    <p>Astrology Universe</p>
                    <p>
                        Welcome to a world where the ancient wisdom of the stars
                        illuminates the path to understanding ourselves and our
                        place in the universe. Our platform bridges ancient
                        wisdom with modern learning methods, offering a diverse
                        range of astrology courses tailored to enthusiasts,
                        practitioners, and aspiring astrologers a like.
                    </p>
                    <PrimaryButton className={css.book_appointment_button}>
                        book an appointment
                    </PrimaryButton>
                </div>
            </div>
        </PageContainer>
    );
};

export default Hero;
