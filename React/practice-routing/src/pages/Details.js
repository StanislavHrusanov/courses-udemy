import { useState } from "react";
import { Link, json, useRouteLoaderData } from "react-router-dom";
import styles from "./Details.module.css";
import AddReview from "../components/AddReview/AddReview";
import Review from "../components/Review/Review";

import { getAvgRating } from "../util";

function Details() {
  const [showModal, setShowModal] = useState(false);
  const restaurant = useRouteLoaderData("restaurant-details");

  //   const isOwner = restaurant._ownerId === user?._id;

  // const userReview = restaurant.reviews?.find(x => x._ownerId === user?._id);

  const reviewBtnName = "Add review";

  // const isUserAddedToFavourites = isAddedToFavourites.find(x => x._ownerId === user?._id);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const addReviewToState = (review) => {
  //     setRestaurant(state => ({
  //         ...state,
  //         reviews: [...state.reviews, review]
  //     }));
  // }

  // const editReviewInState = (review) => {
  //     setRestaurant(state => ({
  //         ...state,
  //         reviews: state.reviews.map(x => x._id === review._id ? review : x)
  //     }));
  // }

  // const deleteReviewFromState = (review) => {
  //     setRestaurant(state => ({
  //         ...state,
  //         reviews: state.reviews.filter(x => x._id !== review._id)
  //     }));
  // }

  return (
    <section className={styles["details-page"]}>
      {showModal && (
        <AddReview onCloseModal={closeModal} restaurant={restaurant} />
      )}

      {/* {showModal && userReview &&
                    <EditReview
                        onCloseModal={closeModal}
                        restaurant={restaurant}
                        userReview={userReview}
                        editReviewInState={editReviewInState}
                        deleteReviewFromState={deleteReviewFromState}
                    />
                } */}

      <div className={styles["item-details"]}>
        <h2> {restaurant.name}</h2>
        {
          <h3>
            <div className={styles["rating"]}>
              {[...Array(5)].map((star, index) => {
                index += 1;

                return (
                  <span
                    key={index}
                    className={
                      index <= Math.round(getAvgRating(restaurant.reviews))
                        ? styles["full"]
                        : styles["empty"]
                    }
                  >
                    ☆
                  </span>
                );
              })}
              <span>{`${getAvgRating(restaurant.reviews)} (${
                restaurant.reviews?.length
              }) reviews`}</span>
            </div>
          </h3>
        }
        <div className={styles["desc-container"]}>
          <img src={restaurant.imageUrl} alt="resto" />
          <div className={styles["item-desc"]}>
            <h3>
              Address: <p>{restaurant.address}</p>
            </h3>
            <h3>
              Phone: <p>{restaurant.phone}</p>
            </h3>
            <h3>
              Capacity: <p>{restaurant.capacity} persons</p>
            </h3>
            <h3>
              Summary: <p>{restaurant.summary}</p>
            </h3>
          </div>
        </div>
        {
          <div className={styles["buttons"]}>
            <Link to={`/restaurants/${restaurant._id}/edit`}>
              <button className={styles["edit-button"]}>Edit</button>
            </Link>
            <button className={styles["delete-button"]}>Delete</button>
            <button className={styles["favourite-add-button"]}>
              Add to Favourites
            </button>
          </div>
        }

        <div className={styles["reviews-container"]}>
          {
            <button
              onClick={() => openModal()}
              className={styles["add-review-btn"]}
            >
              {reviewBtnName}
            </button>
          }

          {restaurant.reviews?.length > 0 ? (
            restaurant.reviews
              .sort((a, b) => b._createdOn - a._createdOn)
              .map((x) => <Review key={x._id} review={x} />)
          ) : (
            <p className={styles["no-reviews"]}>No reviews yet!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Details;

export async function loader({ params }) {
  const restaurantId = params.restaurantId;

  const response = await fetch(
    "http://localhost:3030/data/restaurants/" + restaurantId
  );

  if (!response.ok) {
    throw json({ message: "Error" });
  } else {
    const resData = await response.json();
    return resData;
  }
}
