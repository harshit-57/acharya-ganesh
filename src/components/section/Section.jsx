import css from './style.module.css';
import { PageContainer } from '../page-container/PageContainer';
export const Section = ({ style, classname, children }) => {
    return (
        <PageContainer
            style={style}
            className={[css.container, classname].join(' ')}
        >
            {children}
        </PageContainer>
    );
};
