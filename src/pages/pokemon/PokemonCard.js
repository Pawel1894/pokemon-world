import React from "react";
import Spinner from "../../shared/ui/Spinner";
import PokemonType from "./PokemonType";
import styles from "./styles/Pokemon.module.css";

export default function PokemonCard({ pokemon, status, error }) {
  if (status && status === "loading")
    return (
      <div
        style={{
          "--border-color": `gray`,
        }}
        className={`${styles["pokemon-card"]}`}
      >
        {" "}
        <Spinner center={true} />{" "}
      </div>
    );

  if (status && status === "error")
    return (
      <div
        style={{
          "--border-color": `gray`,
        }}
        className={`${styles["pokemon-card"]}`}
      >
        <span>{error.message}</span>
      </div>
    );

  return (
    <div
      style={{
        "--border-color": `var(--type-${pokemon?.types[0].type.name})`,
      }}
      className={`${styles["pokemon-card"]}`}
    >
      <img
        className={`${styles["pokemon-img"]}`}
        src={pokemon?.sprites["front_default"]}
        alt=""
      />
      <h2 className="text-capitalize">{pokemon?.name}</h2>
      <div className={`${styles["pokemon-types"]}`}>
        {pokemon?.types.map((type, i) => (
          <PokemonType key={i} type={type} />
        ))}
      </div>
    </div>
  );
}
