import css from './style.module.css';
import ImgJanmashtami from '../../../../assets/blog_thumbnail_janmashtami.jpg';

export const BlogCardSmall = ({ blog, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div
                style={{ backgroundImage: `url(${ImgJanmashtami})` }}
                className={css.thumbnail}
            >
                <p>FESTIVAL</p>
            </div>
            <div className={css.content_container}>
                <h2>
                    Celebrating Bhai Dooj 2025: A Festival of Sibling Love and
                    Togetherness
                </h2>
                <p>
                    Bhai Dooj, also known as Bhau-Beej, Bhai Tika, or Bhai
                    Phonta in different parts of India, is a beautiful festival
                    celebrating th...
                </p>
                <p>-YUSHI</p>
            </div>
        </div>
    );
};
