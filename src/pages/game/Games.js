import React from "react";
import { toast } from "react-toastify";
import { useGenerations } from "../../hooks/useGeneration";
import Spinner from "../../shared/ui/Spinner";
import Game from "./GameCard";

export default function Games() {
  const { data, status, error } = useGenerations();

  if (status === "loading") return <Spinner center={true} />;

  if (status === "error") return toast.error("Error fetching pokemons... " + error);

  return (
    <section className="container" style={{ "--max-width": "80rem" }}>
      <div className={`grid-content-container`}>
        {data.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </div>
    </section>
  );
}
