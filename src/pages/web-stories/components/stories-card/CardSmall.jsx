import css from './style.module.css';
import parse from 'html-react-parser';
export const CardSmall = ({ blog, onClick, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div className={css.thumbnail_wrapper}>
                {blog?.CoverImageUrl && (
                    <img src={blog?.CoverImageUrl} alt={'Thumbnail'} />
                )}
                <p>{blog?.CategoryName}</p>
            </div>
            <div className={css.content_container}>
                <h2 onClick={onClick}>
                    {blog?.Title.length > 75
                        ? parse(blog?.Title.slice(0, 75)) + '...'
                        : parse(blog?.Title)}
                </h2>
                <div>{parse(blog?.ShortDescription || '')}</div>
                <p>- {blog?.PublishedBy}</p>
            </div>
        </div>
    );
};
