import styles from "./loading.module.css";

export default function mealsLoadingPage() {
  return <p className={styles.loading}>Fetching data...</p>;
}
