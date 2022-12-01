import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import PokemonCard from "./PokemonCard";
import styles from "./styles/Pokemon.module.css";

export default function PokemonList({ data, setEndpoint }) {
  return (
    <>
      <div className={`${styles["pokemon-container"]}`}>
        {data.results.map((pokemon, i) => {
          return (
            <Link key={i} to={`/pokemon/${pokemon.name}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
      <div className={`${styles["buttons"]} flow-horizontal`}>
        <Button
          text={"Previous Page"}
          type="accent"
          width={"150px"}
          disabled={data.previous ? false : true}
          onClickHandler={() => {
            setEndpoint(data.previous);
          }}
        />

        <Button
          text={"Next Page"}
          type="accent"
          width={"150px"}
          disabled={data.next ? false : true}
          onClickHandler={() => {
            setEndpoint(data.next);
          }}
        />
      </div>
    </>
  );
}
