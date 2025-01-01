import css from './style.module.css';
export const DescriptionCard = ({ description, className }) => {
    return (
        <div
            style={{ backgroundImage: `url(${description.bg})` }}
            className={[css.container, className].join(' ')}
        >
            <h2>{description?.title}</h2>
            <p>{description?.detail}</p>
        </div>
    );
};
