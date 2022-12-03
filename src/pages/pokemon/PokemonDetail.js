import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { usePokemon } from "../../hooks/usePokemon";
import Spinner from "../../shared/ui/Spinner";
import Ability from "./Ability";
import PokemonType from "./PokemonType";
import Sprites from "./Sprites";
import styles from "./styles/PokemonDetail.module.css";

export default function PokemonDetail() {
  const location = useLocation();
  const { status, data, error } = usePokemon(location.pathname.split("/")[2]);

  if (status === "loading") return <Spinner center />;

  if (status === "error") return toast.error(`Error fetching pokemon... ${error}`);

  return (
    <section className="container flow padding-inline-2" style={{ "--flow-gap": "2.5rem" }}>
      <h1 className={`${styles["title"]} text-capitalize fw-bold`}>{data.name}</h1>
      <Sprites sprites={data.sprites} />
      <div>
        <h2 className={`${styles["section-title"]} fw-semi-bold`}>Types</h2>
        <div className="flex gap">
          {data.types.map((type) => (
            <PokemonType key={type.slot} type={type} />
          ))}
        </div>
      </div>
      <div>
        <h2 className={`${styles["section-title"]} fw-semi-bold`}>Abilities</h2>
        <div className="flex flex-wrap gap">
          {data.abilities.map((ability) => (
            <Ability key={ability.slot} ability={ability.ability} />
          ))}
        </div>
      </div>
    </section>
  );
}
