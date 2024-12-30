import css from './style.module.css';

import IcStar from '../../assets/star.png';

export const PrimaryButton = ({ className, style, children }) => (
    <div className={[className, css.container].join(' ')} style={style}>
        <img src={IcStar} alt={''} />
        <p>{children}</p>
        <img src={IcStar} alt={''} />
    </div>
);
