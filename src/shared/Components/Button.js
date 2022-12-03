import React from "react";
import styles from "./styles/Button.module.css";

export default function Button({ text, type, width, disabled, onClickHandler }) {
  let css;

  if (type === "primary") css = `button-${type}`;
  else if (type === "accent") css = `button-${type}`;
  else css = `button-neutral`;

  return (
    <button
      style={{ width: width ? width : "auto" }}
      className={`${styles["button"]} ${styles[css]}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
