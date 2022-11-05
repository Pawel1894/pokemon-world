import React from "react";
import SimpleCard from "../../shared/Components/SimpleCard";
import pikachu from "../../assets/pikachu.png";

export default function Home() {
  return (
    <section>
      <SimpleCard
        image={pikachu}
        title={"Pokemons"}
        details={"View list of all pokemons!"}
      />
    </section>
  );
}
