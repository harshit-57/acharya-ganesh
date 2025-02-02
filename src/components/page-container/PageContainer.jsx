import css from './style.module.css';

export const PageContainer = ({ className, style, children }) => (
    <div className={[css.page_container, className].join(' ')} style={style}>
        {children}
    </div>
);
