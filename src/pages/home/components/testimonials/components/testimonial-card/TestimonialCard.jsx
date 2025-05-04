import css from './style.module.css';

import { htmlToText } from 'html-to-text';
import { Images } from '../../../../../../util/constants';
export const TestimonialCard = ({ testimonial, style, className }) => {
    return (
        <div style={style} className={[className, css.container].join(' ')}>
            <div className={css.name_container}>
                <h3>{testimonial?.UserName}</h3>
                <img src={Images.default.IcQuote} alt={'qoute'} />
            </div>
            <div className={css.border_container}>
                <img src={Images.default.IcEllipse} alt={'Ellipse'} />
                <div></div>
                <img src={Images.default.IcEllipse} alt={'Ellipse'} />
            </div>
            <div className={css.rating_container}>
                {[
                    ...Array(
                        Math.round(testimonial?.Rating ? testimonial.Rating : 0)
                    ),
                ].map((c, i) => (
                    <img
                        key={i}
                        src={Images.default.IcRatingStar}
                        alt={'Rating star icon'}
                    />
                ))}
            </div>
            <p className={css.review}>{htmlToText(testimonial?.Description)}</p>
        </div>
    );
};
