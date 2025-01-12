import css from './style.module.css';

export const InputField = ({ type, placeholder, style, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            style={style}
            className={[css.input, className].join(' ')}
        />
    );
};
