import { useState } from "react";

import styles from './style.module.css';

import IcStar from '../../../../assets/Star 4.png';
import FAQBg from "../../../../assets/book_consultatio_faq.png";
import FAQItem from "./component/item/FaqItem";

const FAQSection = () => {
  const [showMore, setShowMore] = useState(false);

  const initialFAQs = [
    "What type of astrology consultations do you offer?",
    "How long is a consultation?",
    "How do I prepare for my consultation?",
    "Do you offer in-person consultations?",
  ];

  const extraFAQs = [
    "Can I get a recorded session?",
    "Do you provide emergency readings?",
    "What details do I need to share beforehand?",
    "Are your consultations refundable?",
  ];

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${FAQBg})` }}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      {initialFAQs.map((e) => {
        return (
          <FAQItem question={e} />
        )
      })}
      {showMore && extraFAQs.map((e) => {
        return (
          <FAQItem question={e} />
        )
      })}
      <button className={styles.showMoreBtn} onClick={() => setShowMore(!showMore)}>
        <img src={IcStar} alt={''} />
        {showMore ? "Show Less" : "Show More"}
        <img src={IcStar} alt={''} />
      </button>
    </div>
  );
};

export default FAQSection;
