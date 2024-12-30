import css from './style.module.css';

export const PageContainer = ({ className, style, children }) => (
    <div className={[className, css.page_container].join(' ')} style={style}>
        {children}
    </div>
);
