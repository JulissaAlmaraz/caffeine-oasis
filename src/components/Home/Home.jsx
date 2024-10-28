import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container text-center">
        <h1 className={styles.container}>
          Fuel Your Day with Flavor at Caffeine Oasis
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/menu" className={styles.menu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.about}>
            About
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Home;
