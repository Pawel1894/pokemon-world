import React from "react";
import styles from "./styles/Input.module.css";

export default function Input({ id, onKeyUpHandler, onKeyDownHandler }) {
  return (
    <input
      className={styles["input"]}
      id={id}
      onKeyUp={onKeyUpHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
}
