import styles from "./Button.module.scss";

const Button = (props) => {
  return <button disabled={props.disabled} onClick={props.onClick} className={styles.button}>{props.children}</button>;
};

export default Button;
