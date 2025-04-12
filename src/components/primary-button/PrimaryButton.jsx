import css from './style.module.css';

import IcStar from '../../assets/star.png';

export const PrimaryButton = ({ className, style, children, onClick }) => (
    <div
        className={[css.container, className].join(' ')}
        style={style}
        onClick={onClick}
    >
        <img src={IcStar} alt={'*'} />
        <p>{children}</p>
        <img src={IcStar} alt={'*'} />
    </div>
);
