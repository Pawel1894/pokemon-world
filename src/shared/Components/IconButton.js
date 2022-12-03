import React from "react";
import styles from "./styles/IconButton.module.css";
export default function IconButton({ css, onClick, disabled, children }) {
  return (
    <button
      type={"button"}
      className={`pointer ${styles["icon-btn"]} ${css}`}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
