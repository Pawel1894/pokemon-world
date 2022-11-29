import React from "react";
import styles from "./styles/PokemonDetail.module.css";

export default function Sprites({ sprites }) {
  return (
    <div className="flex gap">
      <div className={`${styles["sprite"]}`}>
        <img src={sprites.front_default} alt="front of pokemon" />
      </div>
      <div className={`${styles["sprite"]}`}>
        <img src={sprites.back_default} alt="back of pokemon" />
      </div>
      <div className={`${styles["sprite"]}`}>
        <img src={sprites.front_shiny} alt="front of shiny type pokemon" />
      </div>
      <div className={`${styles["sprite"]}`}>
        <img src={sprites.back_shiny} alt="back of shiny type pokemon" />
      </div>
    </div>
  );
}
