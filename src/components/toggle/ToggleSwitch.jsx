import React from 'react';
import './style.module.css';
import styles from './style.module.css';
const ToggleSwitch = ({
    label = 'Toggle',
    isChecked = false,
    onToggle = () => {},
    onColor = '#4CAF50',
    offColor = '#ccc',
}) => {
    return (
        <div className={styles.toggle_container}>
            <label className={styles.toggle_label}>{label}</label>
            <div
                className={styles.toggle_switch}
                style={{ backgroundColor: isChecked ? onColor : offColor }}
                onClick={onToggle}
            >
                <div
                    className={styles.toggle_circle}
                    style={{
                        transform: isChecked
                            ? 'translateX(26px)'
                            : 'translateX(2px)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
