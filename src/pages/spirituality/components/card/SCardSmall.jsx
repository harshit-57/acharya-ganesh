import { htmlToText } from 'html-to-text';
import css from './style.module.css';
export const SCardSmall = ({ blog, onClick, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div className={css.thumbnail_wrapper}>
                {blog?.Image && (
                    <img
                        src={blog?.Image}
                        alt={
                            blog?.ImageAlt ||
                            blog?.Title?.slice(0, 10) ||
                            'blog'
                        }
                    />
                )}
                <p>
                    {blog?.Categories?.map((c) => c?.CategoryName)?.join(', ')}
                </p>
            </div>
            <div className={css.content_container}>
                <h2
                    className={`content-two-line`}
                    title={htmlToText(blog.Title)}
                    onClick={onClick}
                >
                    {htmlToText(blog?.Title)}
                </h2>
                <p className={`html-content content-three-line`}>
                    {htmlToText(blog?.Description || '')}
                </p>
                <p>
                    {'- Acharya Ganesh'}
                    {/* {blog?.PublishedBy} */}
                </p>
            </div>
        </div>
    );
};
