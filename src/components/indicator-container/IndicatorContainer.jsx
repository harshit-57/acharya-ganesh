import css from './style.module.css';
import IcStar from '../../assets/star_rounded.png';
import IcStarSelected from '../../assets/star_rounded_selected.png';
export const IndicatorContainer = ({
    count = 0,
    currentIndex,
    onIndicatorClick,
    className,
}) => {
    return (
        <div className={[className, css.container].join(' ')}>
            {[...Array(count)].map((c, i) => (
                <img
                    key={i}
                    onClick={() => onIndicatorClick(i)}
                    src={currentIndex === i ? IcStarSelected : IcStar}
                    alt={'Star icon'}
                />
            ))}
        </div>
    );
};
