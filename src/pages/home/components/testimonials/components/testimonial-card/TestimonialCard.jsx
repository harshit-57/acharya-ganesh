import css from './style.module.css';

import { htmlToText } from 'html-to-text';
import useApp from '../../../../../../hook/useApp';
export const TestimonialCard = ({ testimonial, style, className }) => {
    const {
        theme: { Images },
    } = useApp();
    return (
        <div style={style} className={[className, css.container].join(' ')}>
            <div className={css.name_container}>
                <h3>{testimonial?.UserName}</h3>
                <img src={Images.IcQuote} alt={'qoute'} />
            </div>
            <div className={css.border_container}>
                <img src={Images.IcEllipse} alt={'Ellipse'} />
                <div></div>
                <img src={Images.IcEllipse} alt={'Ellipse'} />
            </div>
            <div className={css.rating_container}>
                {[
                    ...Array(
                        Math.round(testimonial?.Rating ? testimonial.Rating : 0)
                    ),
                ].map((c, i) => (
                    <img
                        key={i}
                        src={Images.IcRatingStar}
                        alt={'Rating star icon'}
                    />
                ))}
            </div>
            <p className={css.review}>{htmlToText(testimonial?.Description)}</p>
        </div>
    );
};
