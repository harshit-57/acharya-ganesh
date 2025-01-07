import css from './style.module.css';
import { PageContainer } from '../../components/page-container/PageContainer';
import TopBar from '../home/components/hero/components/top-bar/TopBar';
import Navigation from '../home/components/hero/components/navigation/Navigation';
import Footer from '../footer/Footer';
import IcChevronIcon from '../../assets/chevron-down.png';

import ImgHeaderBg from '../../assets/contact_header_bg.png';

const Contact = () => {
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
                <div className={css.header_text_container}>
                    <div className={css.header_text_wrapper}>
                        <h3>Contact</h3>
                        <p>
                            <span>Home</span>{' '}
                            <span>
                                <img src={IcChevronIcon} alt={''} />
                            </span>{' '}
                            <span>Contact</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </PageContainer>
    );
};

export default Contact;
