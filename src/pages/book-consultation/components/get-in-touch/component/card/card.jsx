import styles from "./style.module.css";

const Card = ({ step, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.step}>{step}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
