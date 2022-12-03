import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemons } from "../../hooks/usePokemons";
import List from "../../shared/components/List";
import Input from "../../shared/components/Input";
import Spinner from "../../shared/ui/Spinner";
import Random from "../../shared/ui/topBar/Random";
import PokemonCard from "./PokemonCard";
import PokemonPlaceholder from "./PokemonPlaceholder";
import styles from "./styles/Pokemon.module.css";

export default function Pokemons() {
  const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
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

  if (status === "loading") return <Spinner center />;

  if (status === "error") return toast.error(`Error fetching pokemons... ${error}`);

  return (
    <section className="container flow" style={{ "--flow-gap": "4rem" }}>
      <div className={`${styles["controls"]}`}>
        <div className="flow" style={{ "--flow-gap": "1rem" }}>
          <div className="flow-horizontal">
            <label className={`${styles["controls-label"]}`} htmlFor="randomPokemon">
              Get Random Pokemon:
            </label>
            <Random
              id="randomPokemon"
              onCLickHandler={() => {
                const id = Math.ceil(Math.random() * data.count - 1);
                setSearchValue(id);
              }}
            />
          </div>
          <div>
            <Input
              id="pokemon"
              placeholder="Search by name"
              onKeyUpHandler={(e) => {
                setPokemonSearch(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
        <div style={{ position: "relative" }} className={styles["controls-pokemon"]}>
          {searchValue ? (
            <Link className="text-decoration-none w-100" to={`/pokemon/${pokemonQuery.data?.name}`}>
              <PokemonCard status={pokemonQuery.status} error={pokemonQuery.error} pokemon={pokemonQuery.data} />
            </Link>
          ) : (
            <PokemonPlaceholder status={pokemonQuery.status} error={pokemonQuery.error} />
          )}
        </div>
      </div>
      <div>
        <List data={data} setEndpoint={setEndpoint}>
          {data.results.map((pokemon, i) => {
            return (
              <Link className="w-100" key={i} to={`/pokemon/${pokemon.name}`}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            );
          })}
        </List>
      </div>
    </section>
  );
}
