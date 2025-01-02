import css from './style.module.css';
import { Spacer } from '../../../../../components/spacer/Spacer';
export const ArticleCard = ({ article, style, className }) => {
    return (
        <div style={style} className={[className, css.container].join(' ')}>
            <p className={css.category}>{article?.category}</p>
            <Spacer vertical={'24px'} />
            <h3 className={css.title}>{article?.title}</h3>
            <Spacer vertical={'10px'} />
            <p className={css.shortDesc}>{article?.shortDesc}</p>
            <Spacer vertical={'10px'} />
            <p className={css.author}>{'-' + article?.author}</p>
        </div>
    );
};
