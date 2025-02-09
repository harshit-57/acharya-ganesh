import styles from "./styles.module.css";

const Button = ({ text , color}) => {
  return (
    <button style={{ backgroundColor: color }} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
