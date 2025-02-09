import React from 'react';
import styles from './style.module.css';

const CheckboxComponent = ({ checked, label, onChange, disabled, style }) => {
    return (
        <div className={`${styles.checkboxContainer}`} style={style}>
            <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <div className={styles.checkboxIcon}>
                {checked && <span className={styles.checkmark}>✔</span>}
            </div>
            {label && <span className={styles.checkboxLabel}>{label}</span>}
        </div>
    );
};

export default CheckboxComponent;
