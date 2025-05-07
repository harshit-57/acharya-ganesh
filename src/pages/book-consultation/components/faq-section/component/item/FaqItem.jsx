import { useState } from 'react';
import styles from './style.module.css';

const FAQItem = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <button
                className={styles.faqButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.faqContent}>
                    <li>{question}</li>
                </div>
                <span
                    className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
                >
                    ▼
                </span>
            </button>
            {isOpen && (
                <p className={styles.faqAnswer}>
                    Most consultations last between 30 minutes to 45 minutes,
                    depending on the type of session you choose. You'll receive
                    detailed insights during our time together, so you can leave
                    with clear guidance.
                </p>
            )}
        </div>
    );
};

export default FAQItem;
