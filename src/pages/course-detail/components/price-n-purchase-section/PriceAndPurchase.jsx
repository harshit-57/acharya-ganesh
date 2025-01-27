import css from './style.module.css';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { Spacer } from '../../../../components/spacer/Spacer';
import ImgPoster from '../../../../assets/course_1.png';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
export const PriceAndPurchaseSection = ({ course }) => {
    return (
        <div className={css.container}>
            <img
                className={css.poster}
                src={course?.Images[0]}
                alt={'Course poster'}
            />
            <div className={css.price_detail_container}>
                <p className={css.tag}>
                    {course?.Categories?.map((c) => c?.CategoryName)?.join(
                        ', '
                    )}
                </p>
                <h2 className={css.title}>{course?.Name}</h2>
                <p className={css.price}>
                    <span>₹ {course?.Regular_Price}</span>₹ {course?.Sale_Price}
                </p>
                {/* <div className={css.info_container}>
                    <p>
                        <span>Duration:</span> Overall Duration 6 Hours
                    </p>
                    <p>
                        <span>No. of Sessions:</span> 2
                    </p>
                    <p>
                        <span>Session Duration:</span> 3 Hours Per Day
                    </p>
                    <p>
                        <span>Day:</span> 11th & 12th January (Saturday &
                        Sunday)
                    </p>
                    <p>
                        <span>Timing:</span> 12 PM to 3 PM
                    </p>
                    <p>
                        <span>Category:</span> Live Class
                    </p>
                    <p>
                        <span>Language:</span> A mix of Hindi and English
                    </p>
                </div> */}
                <div className={css.info_container}>
                    {parse(course?.ShortDescription || '')}
                </div>
                <Spacer vertical={'24px'} />
                <a href={course?.ProductURL} target="_blank">
                    <PrimaryButton>Buy Now</PrimaryButton>
                </a>
            </div>
        </div>
    );
};
