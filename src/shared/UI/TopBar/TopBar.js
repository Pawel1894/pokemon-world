import React from "react";
import Logo from "./Logo";
import styles from "../styles/TopBar.module.css";

export default function TopBar() {
  return (
    <header className={`${styles["top-bar"]} flex-center-center bg-primary`}>
      <div className={`${styles["container"]}  flex-center-beetween`}>
        <Logo />
        <div className={`${styles["icons-cred"]} flex-center flow-horizontal`}>
          <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">
            Pokemon icons created by Roundicons Freebies - Flaticon
          </a>
        </div>
      </div>
    </header>
  );
}
