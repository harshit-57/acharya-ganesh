import css from './style.module.css';
import { PrimaryButton } from '../../../../components/primary-button/PrimaryButton';
import { Spacer } from '../../../../components/spacer/Spacer';

import parse from 'html-react-parser';

export const PriceAndPurchaseSection = ({ course }) => {
    return (
        <div className={css.container}>
            <img
                className={css.poster}
                src={course?.Images?.length ? course?.Images[0] : ''}
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
                <div className={`html-content`}>
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
