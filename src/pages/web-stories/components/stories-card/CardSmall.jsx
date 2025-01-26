import css from './style.module.css';
import parse from 'html-react-parser';
export const CardSmall = ({ blog, onClick, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div className={css.thumbnail_wrapper}>
                {blog?.Image && <img src={blog?.Image} alt={'Thumbnail'} />}
                <p>{blog?.CategoryName}</p>
            </div>
            <div className={css.content_container}>
                <h2 onClick={onClick}>
                    {blog?.Title.length > 75
                        ? blog?.Title.slice(0, 75) + '...'
                        : blog?.Title}
                </h2>
                <div>{parse(blog?.ShortDescription || '')}</div>
                <p>- {blog?.PublishedBy}</p>
            </div>
        </div>
    );
};
