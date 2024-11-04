import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

import styles from "./Root.module.css";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={styles["main"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
