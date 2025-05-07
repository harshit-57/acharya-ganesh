import { htmlToText } from 'html-to-text';
import css from './style.module.css';
import parse from 'html-react-parser';
export const CardSmall = ({ blog, onClick, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div className={css.thumbnail_wrapper}>
                {blog?.CoverImageUrl && (
                    <img
                        src={blog?.CoverImageUrl}
                        alt={blog?.CoverImageAlt || 'thumbnail'}
                    />
                )}
                <p>
                    {blog?.Categories?.map((c) => c?.CategoryName)?.join(', ')}
                </p>
            </div>
            <div className={css.content_container}>
                <h2
                    className={`html-content content-one-line`}
                    title={blog.Title}
                    onClick={onClick}
                >
                    {parse(blog?.Title)}
                </h2>
                <p
                    className={`html-content content-two-line`}
                    title={htmlToText(blog?.ShortDescription)}
                >
                    {parse(blog?.ShortDescription || '')}
                </p>
                <p>
                    {'- Acharya Ganesh'}
                    {/* {blog?.PublishedBy} */}
                </p>
            </div>
        </div>
    );
};
