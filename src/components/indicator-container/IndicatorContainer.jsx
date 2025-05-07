import useApp from '../../hook/useApp';
import css from './style.module.css';
export const IndicatorContainer = ({
    count = 0,
    currentIndex,
    onIndicatorClick = () => {},
    className,
}) => {
    const {
        theme: { Images },
    } = useApp();
    return (
        <div className={[className, css.container].join(' ')}>
            {[...Array(count)].map((c, i) => (
                <img
                    key={i}
                    onClick={() => onIndicatorClick(i)}
                    src={
                        currentIndex === i
                            ? Images.IcStarSelected
                            : Images.IcStarRounded
                    }
                    alt={'Star'}
                />
            ))}
        </div>
    );
};
