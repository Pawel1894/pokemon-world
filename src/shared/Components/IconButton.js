import React from "react";
import styles from "./styles/components.module.css";
export default function IconButton({ css, onClick, disabled, children }) {
  let styleClass = "";

  return (
    <button
      className={`pointer ${styleClass} ${styles["icon-btn"]} ${css}`}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
