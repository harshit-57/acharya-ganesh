import css from './style.module.css';
import { Images } from '../../util/constants';

export const PrimaryButton = ({ className, style, children, onClick }) => (
    <div
        className={[css.container, className].join(' ')}
        style={style}
        onClick={onClick}
    >
        <img src={Images.default.IcStar} alt={'*'} />
        <p>{children}</p>
        <img src={Images.default.IcStar} alt={'*'} />
    </div>
);
