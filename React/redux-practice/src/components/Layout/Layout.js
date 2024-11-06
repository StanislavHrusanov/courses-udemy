import { Fragment } from "react";
import MainHeader from "./MainHeader";
import { Link, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <ul className={styles["nav"]}>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
