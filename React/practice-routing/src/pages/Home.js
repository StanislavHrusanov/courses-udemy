import styles from "./Home.module.css";

import { Restaurant } from "../components/Restaurant/Restaurant";
import { LastAdded } from "../components/LastAdded/LastAdded";
import { LastReview } from "../components/LastReview/LastReview";

export const Home = () => {
  const lastAdded = [];
  const mostPopular = [];
  const lastReview = [];
  return (
    <section id="home-section">
      <div className={styles["home-message"]}>
        <h2>We will help you find your perfect restaurant!</h2>
      </div>
      <div className={styles["most-popular-container"]}>
        <div className={styles["most-popular"]}>
          <h3>Most Popular</h3>

          {mostPopular.length > 0 ? (
            mostPopular.map((x) => <Restaurant key={x._id} restaurant={x} />)
          ) : (
            <p className={styles["no-restaurants"]}>
              There is no restaurants yet!
            </p>
          )}
        </div>
      </div>

      <div className={styles["last-added-container"]}>
        <div className={styles["last-added"]}>
          <h3>Last added</h3>

          {lastAdded.length > 0 ? (
            <LastAdded key={lastAdded[0]._id} restaurant={lastAdded[0]} />
          ) : (
            <p className={styles["no-restaurants"]}>
              There is no restaurants added yet!
            </p>
          )}
        </div>
      </div>

      <div className={styles["last-review-container"]}>
        <div className={styles["last-review"]}>
          <h3>Last review</h3>

          {lastReview.length > 0 ? (
            <LastReview key={lastReview[0]._id} review={lastReview[0]} />
          ) : (
            <p className={styles["no-restaurants"]}>
              There is no reviews added yet!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
