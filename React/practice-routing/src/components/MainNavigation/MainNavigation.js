import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  async function logout() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      try {
        await fetch("http://localhost:3030/users/logout", {
          method: "GET",
          headers: {
            "X-Authorization": user.accessToken,
          },
        });
        localStorage.removeItem("user");
      } catch (error) {
        window.alert(error);
      }
    }
  }
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
        {/* {user &&
                    <span className={styles["hello"]}>{`Hello, ${user.username}!`}</span>
                } */}
        <Link className={styles["nav-link"]} to="/restaurants">
          Restaurants
        </Link>

        <div id="user">
          <Link className={styles["nav-link"]} to="/addRestaurant">
            Add restaurant
          </Link>
          <Link className={styles["nav-link"]} to="/myProfile">
            My profile
          </Link>
          <Link onClick={logout} className={styles["nav-link"]}>
            Logout
          </Link>
        </div>

        <div id="guest">
          <Link className={styles["nav-link"]} to="/login">
            Login
          </Link>
          <Link className={styles["nav-link"]} to="/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
