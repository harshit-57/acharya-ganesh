import css from './style.module.css';
import IcChevronIcon from '../../../../assets/chevron-down.png';

export const TableOfContent = () => {
    return (
        <div className={css.container}>
            <h3>Table of contents</h3>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Introduction to Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>The Significance of Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Preparing for Lakshmi Puja 2025</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>The Rituals of Lakshmi Puja</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Preparing for Lakshmi Puja 2025</p>
            </div>
            <div className={css.content_table_link}>
                <img src={IcChevronIcon} alt={''} />
                <p>Conclusion</p>
            </div>
        </div>
    );
};
