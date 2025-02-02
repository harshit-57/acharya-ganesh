import css from './style.module.css';
import { PrimaryButton } from '../../../primary-button/PrimaryButton';
import { NavLink } from 'react-router-dom';
export const CourseCard = ({ course, style, className }) => {
    // const discountedPrice =
    //     course?.price - Math.round((course?.price / 100) * course?.discount);
    return (
        <div style={style} className={[css.container, className].join(' ')}>
            <img
                className={css.course_poster}
                src={course?.Images?.length ? course?.Images[0] : ''}
                alt={''}
            />
            <a
                className={css.buy_now_button}
                href={course?.ProductURL}
                target="_blank"
            >
                <PrimaryButton>Buy now</PrimaryButton>
            </a>
            <NavLink to={`/courses/${course?.Slug}`}>
                <div className={css.course_detail_container}>
                    <h3 className={css.course_label}>{course?.Name}</h3>
                    <p>
                        <span>
                            {course?.Sale_Price
                                ? '₹ ' + course?.Regular_Price
                                : ''}
                        </span>
                        {course?.Sale_Price
                            ? '₹ ' + course?.Sale_Price
                            : '₹ ' + course?.Regular_Price}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};
