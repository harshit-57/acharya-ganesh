
import { useState } from "react";
import styles from "./style.module.css";

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqButton} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.faqContent}>
          <div className={styles.bullet}></div> {/* Circular Bullet */}
          <span>{question}</span>
        </div>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>▼</span>
      </button>
      {isOpen && <p className={styles.faqAnswer}>This is the answer to "{question}".</p>}
    </div>
  );
};

export default FAQItem;