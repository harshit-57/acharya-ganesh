import css from './style.module.css';
import { PrimaryButton } from '../../../primary-button/PrimaryButton';
import { NavLink } from 'react-router-dom';
export const CourseCard = ({ course, style, className, onClick }) => {
    // const discountedPrice =
    //     course?.price - Math.round((course?.price / 100) * course?.discount);
    return (
        <div
            style={style}
            className={[css.container, className].join(' ')}
            onClick={onClick}
        >
            <img
                className={css.course_poster}
                src={course?.Images?.length ? course?.Images[0] : ''}
                alt={course?.Name?.slice(0, 10) || 'course'}
            />
            <a
                className={css.buy_now_button}
                href={course?.ProductURL}
                target="_blank"
            >
                <PrimaryButton>Buy now</PrimaryButton>
            </a>

            <div className={css.course_detail_container}>
                {/* <NavLink to={`/course/${course?.Slug}`}> */}
                <h3 className={`${css.course_label} content-two-line`}>
                    {course?.Name}
                </h3>
                <p>
                    <span>
                        {course?.Sale_Price ? '₹ ' + course?.Regular_Price : ''}
                    </span>
                    {course?.Sale_Price
                        ? '₹ ' + course?.Sale_Price
                        : '₹ ' + course?.Regular_Price}
                </p>
                {/* </NavLink> */}
            </div>
        </div>
    );
};
