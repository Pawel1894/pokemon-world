import React from "react";
import styles from "./styles/Spinner.module.css";

export default function Spinner({ size, color, center }) {
  return (
    <div className={`${center ? styles["center"] : null}`}>
      <div
        style={{
          width: size ? size : "50px",
          height: size ? size : "50px",
          borderTopColor: color ? color : "var(--clr-accent-100)",
        }}
        className={`${styles["loading"]}`}
      ></div>
    </div>
  );
}
