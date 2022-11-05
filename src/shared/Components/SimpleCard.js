import React from "react";
import styles from "./styles/SimpleCard.module.css";

export default function SimpleCard({ image, title, details }) {
  return (
    <div className={`${styles["card"]}`}>
      <div>
        <img className={`${styles["img"]}`} src={image} alt="" />
        <h2 className={`${styles["title"]}`}>{title}</h2>
      </div>
      <div className={`${styles["details"]}`}>
        <p>{details}</p>
      </div>
    </div>
  );
}
