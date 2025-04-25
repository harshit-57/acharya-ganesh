import css from './style.module.css';
import { NavLink } from 'react-router-dom';

import IcStar from '../../../../../../assets/star.png';

const ServiceCard = ({ service, className, graphic }) => {
    return (
        <NavLink
            to={`/services/${service.Slug}`}
            className={[className, css.nav_link].join(' ')}
        >
            {service.Name}
            <div className={css.view_label_wrapper}>
                <img src={IcStar} alt={'*'} />
                <p>View</p>
                <img src={IcStar} alt={'*'} />
            </div>
            <img className={css.bg} src={graphic} alt={'bg'} />
        </NavLink>
    );
};

export default ServiceCard;
