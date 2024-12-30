import css from './style.module.css';

import Hero from './components/hero/Hero';
import { PageContainer } from '../../components/page-container/PageContainer';

const Home = () => {
    return (
        <PageContainer>
            <Hero />
        </PageContainer>
    );
};

export default Home;
