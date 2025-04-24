import css from './style.module.css';
import { NavLink } from 'react-router-dom';



import { Images } from '../../../../util/constants';

const ServiceCard = ({ service, className, graphic }) => {
    return (
        <NavLink
            to={`/service/${service.Slug}`}
            className={[className, css.nav_link].join(' ')}
        >
            {service.Name}
            <div className={css.view_label_wrapper}>
                <img src={Images.default.IcStar4} alt={'Star icon'} />
                <p>View</p>
                <img src={Images.default.IcStar4} alt={'Star icon'} />
            </div>
            <img className={css.bg} src={graphic} alt={''} />
        </NavLink>
    );
};

export default ServiceCard;
