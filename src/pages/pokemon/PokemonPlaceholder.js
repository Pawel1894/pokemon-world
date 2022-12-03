import React from "react";
import styles from "./styles/Pokemon.module.css";

export default function PokemonPlaceholder({ status, error }) {
  return <div style={{ "--border-color": "gray" }} className={styles["pokemon-card"]}></div>;
}
