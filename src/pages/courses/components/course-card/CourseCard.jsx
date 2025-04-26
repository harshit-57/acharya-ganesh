import css from './style.module.css';
import ImgPoster from '../../../../assets/course_poster.png';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
export const CourseCard = ({ onClick, course, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <img
                src={course?.Images[0] || ''}
                alt={course?.Name?.slice(0, 10) || 'course'}
                className={css.thumbnail}
            ></img>
            <div className={css.content_container}>
                <h2 className="content-two-line" onClick={onClick}>
                    {course?.Name}
                </h2>
                <p>
                    <span>
                        {course?.Sale_Price ? '₹ ' + course?.Regular_Price : ''}
                    </span>
                    {course?.Sale_Price
                        ? '₹ ' + course?.Sale_Price
                        : '₹ ' + course?.Regular_Price}
                </p>
                <a
                    className={css.buy_now_button}
                    href={course?.ProductURL}
                    target="_blank"
                >
                    <PrimaryButton>Buy now</PrimaryButton>
                </a>
            </div>
        </div>
    );
};
