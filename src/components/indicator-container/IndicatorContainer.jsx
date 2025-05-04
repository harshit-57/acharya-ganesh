import css from './style.module.css';
import { Images } from '../../util/constants';
export const IndicatorContainer = ({
    count = 0,
    currentIndex,
    onIndicatorClick = () => {},
    className,
}) => {
    return (
        <div className={[className, css.container].join(' ')}>
            {[...Array(count)].map((c, i) => (
                <img
                    key={i}
                    onClick={() => onIndicatorClick(i)}
                    src={
                        currentIndex === i
                            ? Images.default.IcStarSelected
                            : Images.default.IcStar
                    }
                    alt={'Star'}
                />
            ))}
        </div>
    );
};
