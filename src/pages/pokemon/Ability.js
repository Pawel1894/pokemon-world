import React, { useMemo } from "react";
import { useAbility } from "../../hooks/useAbility";
import Spinner from "../../shared/ui/Spinner";
import styles from "./styles/PokemonDetail.module.css";

export default function Ability({ ability }) {
  const { data, error, status } = useAbility(ability.url);

  const effect = useMemo(() => {
    if (!data) return;
    return data.effect_entries.find((effect) => effect.language.name === "en")?.short_effect;
  }, [data]);

  return (
    <div className={`${styles["ability-container"]}`}>
      <span className={`${styles["ability-title"]} text-capitalize fw-semi-bold`}>{ability.name}</span>
      <div>
        {status === "loading" ? <Spinner /> : null}
        {status === "error" ? <span>{error}</span> : null}
        {status === "success" ? <p>{effect}</p> : null}
      </div>
    </div>
  );
}
