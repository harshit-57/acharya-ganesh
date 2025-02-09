import css from './style.module.css';
import IcQuote from '../../../../../../assets/quotation_mark.png';
import IcRatingStar from '../../../../../../assets/rating_star.png';
import IcEllipse from '../../../../../../assets/ellipse.png';
export const TestimonialCard = ({ testimonial, style, className }) => {
    return (
        <div style={style} className={[className, css.container].join(' ')}>
            <div className={css.name_container}>
                <h3>{testimonial?.UserName}</h3>
                <img src={IcQuote} alt={''} />
            </div>
            <div className={css.border_container}>
                <img src={IcEllipse} alt={'Ellipse'} />
                <div></div>
                <img src={IcEllipse} alt={'Ellipse'} />
            </div>
            <div className={css.rating_container}>
                {[
                    ...Array(
                        Math.round(testimonial?.Rating ? testimonial.Rating : 0)
                    ),
                ].map((c, i) => (
                    <img key={i} src={IcRatingStar} alt={'Rating star icon'} />
                ))}
            </div>
            <p className={css.review}>{testimonial?.Description}</p>
        </div>
    );
};
