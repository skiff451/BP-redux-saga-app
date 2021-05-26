import styles from "./Spinner.module.scss";

function Spinner(): JSX.Element {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
