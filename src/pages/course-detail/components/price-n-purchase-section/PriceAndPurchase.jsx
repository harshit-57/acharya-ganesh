import css from './style.module.css';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { Spacer } from '../../../../components/spacer/Spacer';
import ImgPoster from '../../../../assets/course_1.png';
export const PriceAndPurchaseSection = () => {
    return (
        <div className={css.container}>
            <img className={css.poster} src={ImgPoster} alt={'Course poster'} />
            <div className={css.price_detail_container}>
                <p className={css.tag}>Upcoming</p>
                <h2 className={css.title}>
                    Master Class on Gemstones (Rashi Ratna)
                </h2>
                <p className={css.price}>
                    <span>₹ 10,000</span>₹ 7,500
                </p>
                <div className={css.info_container}>
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
                </div>
                <Spacer vertical={'24px'} />
                <PrimaryButton>Buy Now</PrimaryButton>
            </div>
        </div>
    );
};
