import css from './style.module.css';
import { NavLink } from 'react-router-dom';

import IcStar from '../../../../assets/star.png';

const ServiceCard = ({ service, className }) => {
    return (
        <NavLink
            to={service.route}
            className={[className, css.nav_link].join(' ')}
        >
            {service.title}
            <div className={css.view_label_wrapper}>
                <img src={IcStar} alt={'Star icon'} />
                <p>View</p>
                <img src={IcStar} alt={'Star icon'} />
            </div>
            <img className={css.bg} src={service.graphic} alt={''} />
        </NavLink>
    );
};

export default ServiceCard;
