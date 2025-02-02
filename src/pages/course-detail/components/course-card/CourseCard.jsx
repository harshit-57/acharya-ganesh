import css from './style.module.css';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { Spacer } from '../../../../components/spacer/Spacer';
export const CourseCard = ({ course, style, className }) => {
    const discountedPrice =
        course?.price - Math.round((course?.price / 100) * course?.discount);
    return (
        <div style={style} className={[css.container, className].join(' ')}>
            <img className={css.course_poster} src={course?.poster} alt={''} />

            <div className={css.course_detail_container}>
                <h3 className={css.course_label}>{course?.label}</h3>
                <p>
                    <span>{course?.discount ? '₹ ' + course?.price : ''}</span>
                    {course?.discount
                        ? '₹ ' + discountedPrice
                        : '₹ ' + course?.price}
                </p>
                <Spacer vertical={'20px'} />
                <PrimaryButton className={css.buy_now_button}>
                    Buy now
                </PrimaryButton>
                <Spacer vertical={'62px'} />
            </div>
        </div>
    );
};
