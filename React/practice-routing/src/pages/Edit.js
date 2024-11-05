import { Form, json, redirect, useRouteLoaderData } from "react-router-dom";
import styles from "./Edit.module.css";
import { getUser } from "../util";

function Edit() {
  const restaurant = useRouteLoaderData("restaurant-details");

  return (
    <section id="editRestaurant-page">
      <div className={styles["container"]}>
        <div>
          <h2 className={styles["heading"]}>Edit your restaurant</h2>
        </div>

        <Form method="PUT" className={styles["edit-form"]}>
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
              defaultValue={restaurant.name}
            />
          </div>
          {/* {errors.name &&
                                <div className={styles["error-msg"]}>
                                    Restaurant name is required!
                                </div>
                            } */}
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
              defaultValue={restaurant.address}
            />
          </div>
          {/* {errors.address &&
                                <div className={styles["error-msg"]}>
                                    Address is required!
                                </div>
                            } */}
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
              defaultValue={restaurant.phone}
            />
          </div>
          {/* {errors.phone &&
                                <div className={styles["error-msg"]}>
                                    Phone number must start with +359 followed by 9 digits!
                                </div>
                            } */}
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
              defaultValue={restaurant.capacity}
            />
          </div>
          {/* {errors.capacity &&
                                <div className={styles["error-msg"]}>
                                    Capacity must be an integer bigger than 0!
                                </div>
                            } */}
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
              defaultValue={restaurant.imageUrl}
            />
          </div>
          {/* {errors.imageUrl &&
                                <div className={styles["error-msg"]}>
                                    Image must be a link!
                                </div>
                            } */}
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
              defaultValue={restaurant.summary}
            />
          </div>
          {/* {errors.summary &&
                                <div className={styles["error-msg"]}>
                                    Summary is required!
                                </div>
                            } */}
          <div className={styles["action"]}>
            <button className={styles["action-button"]}>Edit</button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Edit;

export async function action({ request, params }) {
  const data = await request.formData();
  const restaurantId = params.restaurantId;
  const user = getUser();

  const restRes = await fetch("http://localhost:3030/data/restaurants/" + restaurantId);

  if (!restRes.ok) {
    throw json({ message: "Error" });
  }

  const restaurant = await restRes.json();
  
  restaurant.name = data.get("name")
  restaurant.address = data.get("address")
  restaurant.phone = data.get("phone")
  restaurant.capacity = data.get("capacity")
  restaurant.imageUrl = data.get("imageUrl")
  restaurant.summary = data.get("summary")

  const response = await fetch(
    "http://localhost:3030/data/restaurants/" + restaurantId,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify(restaurant),
    }
  );

  if (!response.ok) {
    throw json({ message: "Error" });
  }

  return redirect("/restaurants/" + restaurantId);
}
