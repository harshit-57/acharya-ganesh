import styles from "./style.module.css";

const Heading = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};

export default Heading;
