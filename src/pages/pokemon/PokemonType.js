import React from "react";
import styles from "./styles/Pokemon.module.css";

export default function PokemonType({ type }) {
  return (
    <span
      className={`${styles["pokemon-type"]} text-neutral-100 bg-type-${type.type.name} text-uppercase fw-semi-bold`}
    >
      {type.type.name}
    </span>
  );
}
