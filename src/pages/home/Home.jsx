import css from './style.module.css';

import Hero from './components/hero/Hero';
import { PageContainer } from '../../components/page-container/PageContainer';
import Services from './components/services/Services';
import ZodiacSigns from './components/zodiac-signs/ZodiacSigns';

const Home = () => {
    return (
        <PageContainer>
            <Hero />
            <Services />
            <ZodiacSigns />
        </PageContainer>
    );
};

export default Home;
