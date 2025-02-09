
import FAQItem from "../item/FaqItem";
import styles from "./style.module.css";

const FAQList = ({ faqs }) => {
  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq} />
      ))}
    </div>
  );
};

export default FAQList;
