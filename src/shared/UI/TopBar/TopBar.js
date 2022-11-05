import React from "react";
import Random from "./Random";
import Logo from "./Logo";
import styles from "../styles/TopBar.module.css";

export default function TopBar() {
  return (
    <header className={`${styles["top-bar"]} flex-center-center bg-primary`}>
      <div className={`${styles["container"]}  flex-center-beetween`}>
        <Logo />
        <div className={`flex-center flow-horizontal`}>
          <Random />
        </div>
      </div>
    </header>
  );
}

// <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Roundicons Freebies - Flaticon</a>
