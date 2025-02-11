import css from './style.module.css';

export const InputField = ({
    type,
    placeholder,
    style,
    className,
    onChange,
    name,
    error,
    value,
    readOnly,
}) => {
    return (
        <div className={css.input_container}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                style={style}
                onChange={onChange}
                className={[css.input, className].join(' ')}
                value={value}
                readOnly={readOnly}
            />
            {error && <p className={css.error}>{error}</p>}
        </div>
    );
};
