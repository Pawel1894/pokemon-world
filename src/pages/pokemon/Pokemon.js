import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemons } from "../../hooks/usePokemons";
import Button from "../../shared/ui/Button";
import Input from "../../shared/ui/Input";
import Spinner from "../../shared/ui/Spinner";
import Random from "../../shared/ui/topBar/Random";
import PokemonCard from "./PokemonCard";
import PokemonPlaceholder from "./PokemonPlaceholder";
import styles from "./styles/Pokemon.module.css";

export default function Pokemon() {
  const [endpoint, setEndpoint] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );
  const [pokemonSearch, setPokemonSearch] = useState();
  const [searchValue, setSearchValue] = useState(null);
  const pokemonQuery = usePokemon(searchValue);
  const { status, data, error } = usePokemons(endpoint);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setSearchValue(pokemonSearch);
    }, 1000);

    return () => clearTimeout(searchTimeout);
  }, [pokemonSearch]);

  if (status === "loading") return <Spinner center={true} />;

  if (status === "error")
    return toast.error("Error fetching pokemons... " + error);

  return (
    <div className="container">
      <div className={`${styles["controls"]}`}>
        <div className="flow">
          <div className="flow-horizontal">
            <label
              className={`${styles["controls-label"]}`}
              htmlFor="randomPokemon"
            >
              Get Random Pokemon:
            </label>
            <Random
              id="randomPokemon"
              onCLickHandler={() => {
                let id = Math.ceil(Math.random() * data.count - 1);
                setSearchValue(id);
              }}
            />
          </div>
          <div className="flow-horizontal">
            <label className={`${styles["controls-label"]}`} htmlFor="pokemon">
              Search By Name:
            </label>
            <Input
              id="pokemon"
              onKeyUpHandler={(e) => {
                setPokemonSearch(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className={styles["controls-pokemon"]}
        >
          {searchValue != null ? (
            <Link
              className="text-decoration-none"
              to={`/pokemon/${pokemonQuery.data?.name}`}
            >
              <PokemonCard
                status={pokemonQuery.status}
                error={pokemonQuery.error}
                pokemon={pokemonQuery.data}
              />
            </Link>
          ) : (
            <PokemonPlaceholder
              status={pokemonQuery.status}
              error={pokemonQuery.error}
            />
          )}
        </div>
      </div>
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
    </div>
  );
}
