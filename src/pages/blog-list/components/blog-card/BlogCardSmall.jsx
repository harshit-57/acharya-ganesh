import { htmlToText } from 'html-to-text';
import css from './style.module.css';
export const BlogCardSmall = ({ blog, onClick, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div className={css.thumbnail_wrapper}>
                {blog?.Image && <img src={blog?.Image} alt={'Thumbnail'} />}
                <p>{blog?.CategoryName}</p>
            </div>
            <div className={css.content_container}>
                <h2
                    className={`content-two-line`}
                    title={htmlToText(blog.Title)}
                    onClick={onClick}
                >
                    {htmlToText(blog?.Title)}
                </h2>
                <div
                    className={`html-content content-three-line`}
                    title={htmlToText(blog?.ShortDescription)}
                >
                    {htmlToText(blog?.ShortDescription || '')}
                </div>
                <p>
                    {'- Acharya Ganesh'}
                    {/* {blog?.PublishedBy} */}
                </p>
            </div>
        </div>
    );
};
