import css from './style.module.css';
import ImgPoster from '../../../../assets/course_poster.png';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
export const CourseCard = ({ onClick, course, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div
                style={{ backgroundImage: `url(${course?.Images[0]})` }}
                className={css.thumbnail}
            ></div>
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
                <PrimaryButton>Buy now</PrimaryButton>
            </div>
        </div>
    );
};
