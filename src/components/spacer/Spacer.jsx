import css from './style.module.css';
export const Spacer = ({ vertical, horizontal, style, className }) => {
    return (
        <div
            style={{ ...style, width: horizontal, height: vertical }}
            className={[css.container, className].join(' ')}
        ></div>
    );
};

export const HorizontalBorder = ({
    height = '1px',
    color = 'var(--color-black)',
}) => (
    <Spacer
        horizontal={'100%'}
        vertical={height}
        style={{ backgroundColor: color }}
    />
);
