import { Form, json, redirect } from "react-router-dom";
import { getUser } from "../util";
import styles from "./AddRestaurant.module.css";

function AddRestaurant() {
  return (
    <section id="addRestaurant-page">
      <div className={styles["container"]}>
        <div>
          <h2 className={styles["heading"]}>Add your restaurant</h2>
        </div>
        <Form method="POST" className={styles["create-form"]}>
          <div className={styles["input"]}>
            <label htmlFor="restaurant-name" className={styles["name"]}>
              Restaurant name
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="name"
              id="restaurant-name"
              placeholder="Happy Bar & Grill"
            />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="restaurant-address" className={styles["address"]}>
              Address
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="address"
              id="restaurant-address"
              placeholder="10, Vitosha, Sofia 1000"
            />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="phone-number" className={styles["phone"]}>
              Phone
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="phone"
              id="phone-number"
              placeholder="+359888XXXXXX"
            />
          </div>

          <div className={styles["input"]}>
            <label htmlFor="restaurant-capacity" className={styles["capacity"]}>
              Capacity
            </label>
            <input
              type="number"
              className={styles["input-field"]}
              name="capacity"
              id="restaurant-capacity"
              placeholder="100"
            />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="restaurant-image" className={styles["imageUrl"]}>
              Image
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="imageUrl"
              id="restaurant-image"
              placeholder="http://image.jpeg"
            />
          </div>
          <div className={styles["input"]}>
            <label htmlFor="restaurant-summary" className={styles["summary"]}>
              Summary
            </label>
            <input
              type="text"
              className={styles["input-field"]}
              name="summary"
              id="restaurant-summary"
              placeholder="Some text..."
            />
          </div>
          <div className={styles["action"]}>
            <button className={styles["action-button"]}>
              Add your restaurant
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default AddRestaurant;

export async function action({ request }) {
  const data = await request.formData();
  const user = getUser();

  const restaurant = {
    name: data.get("name"),
    address: data.get("address"),
    phone: data.get("phone"),
    capacityL: data.get("capacity"),
    imageUrl: data.get("imageUrl"),
    summary: data.get("summary"),
    reviews: [],
  };

  const response = await fetch("http://localhost:3030/data/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify(restaurant),
  });

  if (!response.ok) {
    throw json({ message: "Error!" });
  }

  return redirect("/restaurants");
}
