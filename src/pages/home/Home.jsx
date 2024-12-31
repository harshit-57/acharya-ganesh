import css from './style.module.css';

import Hero from './components/hero/Hero';
import { PageContainer } from '../../components/page-container/PageContainer';
import Services from './components/services/Services';

const Home = () => {
    return (
        <PageContainer>
            <Hero />
            <Services />
        </PageContainer>
    );
};

export default Home;
