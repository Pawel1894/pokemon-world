import React from "react";
import Spinner from "../../shared/ui/Spinner";
import styles from "./styles/Pokemon.module.css";

export default function PokemonPlaceholder({ status, error }) {
  return (
    <div
      style={{ "--border-color": "gray" }}
      className={styles["pokemon-card"]}
    ></div>
  );
}
