import styles from "./Restaurants.module.css";
import RestaurantItem from "../components/RestaurantItem/RestaurantItem";
import { json, useLoaderData } from "react-router-dom";

function Restaurants() {
  const restaurants = useLoaderData();

  return (
    <section id="restaurants-section">
      <div className={styles["restaurants-message"]}>
        <h2>We will help you find your perfect restaurant!</h2>
      </div>
      <div className={styles["search-container"]}>
        <input
          className={styles["search-input"]}
          name="search"
          id="search-input"
        />
        <button className={styles["btn-close"]}>
          <i className="fa-regular fa-rectangle-xmark"></i>
        </button>
        <button className={styles["search-btn"]}>Search</button>
      </div>
      <div className={styles["restaurants-container"]}>
        <div className={styles["sort-div"]}>
          <span>Sort by</span>
          <select name="criteria" className={styles["criteria"]}>
            <option value=""></option>
            <option value="newest">Newest</option>
            <option value="a-z">A-Z</option>
            <option value="reviews">Reviews</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className={styles["restaurants"]}>
          <h3>Restaurants</h3>

          {restaurants.length === 0 ? (
            <p className={styles["no-restaurants"]}>
              There is no restaurants yet!
            </p>
          ) : (
            restaurants.map((x) => (
              <RestaurantItem key={x._id} restaurant={x} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Restaurants;

export async function loader() {
  const response = await fetch("http://localhost:3030/data/restaurants");

  if (!response.ok) {
    throw json({ message: "Error" });
  } else {
    const resData = await response.json();
    return resData;
  }
}
