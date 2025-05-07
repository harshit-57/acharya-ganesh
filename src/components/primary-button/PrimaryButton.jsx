import css from './style.module.css';
import useApp from '../../hook/useApp';

export const PrimaryButton = ({ className, style, children, onClick }) => {
    const {
        theme: { Images },
    } = useApp();
    return (
        <div
            className={[css.container, className].join(' ')}
            style={style}
            onClick={onClick}
        >
            <img src={Images.IcStar} alt={'*'} />
            <p>{children}</p>
            <img src={Images.IcStar} alt={'*'} />
        </div>
    );
};
