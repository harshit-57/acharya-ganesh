import css from './style.module.css';
import { NavLink } from 'react-router-dom';
import useApp from '../../../../hook/useApp';

const ServiceCard = ({ service, className, graphic }) => {
    const {
        theme: { Images },
    } = useApp();
    return (
        <NavLink
            to={`/services/${service.Slug}`}
            className={[className, css.nav_link].join(' ')}
        >
            {service.Name}
            <div className={css.view_label_wrapper}>
                <img src={Images.IcStar} alt={'*'} />
                <p>View</p>
                <img src={Images.IcStar} alt={'*'} />
            </div>
            <img className={css.bg} src={graphic} alt={'bg'} />
        </NavLink>
    );
};

export default ServiceCard;
