import React from "react";
import styles from "../styles/TopBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <Link className={`${styles["logo"]} text-accent-100`} to={"/"}>
      <img src={logo} alt="" />
    </Link>
  );
}
