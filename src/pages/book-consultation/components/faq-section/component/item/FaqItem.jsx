import { useState } from 'react';
import styles from './style.module.css';

const FAQItem = ({ question, answer }) => {
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
            {isOpen &&
                (answer ? (
                    <p>{answer}</p>
                ) : (
                    <p>Please contact us for more information.</p>
                ))}
        </div>
    );
};

export default FAQItem;
