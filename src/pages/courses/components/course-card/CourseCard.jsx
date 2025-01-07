import css from './style.module.css';
import ImgPoster from '../../../../assets/course_poster.png';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
export const CourseCard = ({ course, style, className }) => {
    return (
        <div className={[css.container, className].join(' ')}>
            <div
                style={{ backgroundImage: `url(${ImgPoster})` }}
                className={css.thumbnail}
            ></div>
            <div className={css.content_container}>
                <h2>One Day Workshop on Ketu</h2>
                <p>
                    <span>{true ? '₹ ' + 2100 : ''}</span>
                    {true ? '₹ ' + 1500 : '₹ ' + 1500}
                </p>
                <PrimaryButton>Buy now</PrimaryButton>
            </div>
        </div>
    );
};
