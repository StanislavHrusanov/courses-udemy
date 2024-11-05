import { Form, Link, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const user = useRouteLoaderData("root");
  return (
    <header className={styles["header"]}>
      <h1>
        <Link className={styles["home"]} to="/">
          Black Sea Resto
        </Link>
      </h1>

      <button className={styles["btn-mobile-menu"]}>
        <i className="fas fa-bars"></i>
      </button>

      <nav className={styles["hidden"]}>
        {/* {user && (
          <span className={styles["hello"]}>{`Hello, ${user.username}!`}</span>
        )} */}
        <Link className={styles["nav-link"]} to="/restaurants">
          Restaurants
        </Link>
        {user ? (
          <div id="user">
            <Link className={styles["nav-link"]} to="/addRestaurant">
              Add restaurant
            </Link>
            <Link className={styles["nav-link"]} to="/myProfile">
              My profile
            </Link>
            <Form action="/logout" method="post" className={styles["nav-link"]}>
              <button className={styles["logout-btn"]}>Logout</button>
            </Form>
          </div>
        ) : (
          <div id="guest">
            <Link className={styles["nav-link"]} to="/login">
              Login
            </Link>
            <Link className={styles["nav-link"]} to="/register">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
