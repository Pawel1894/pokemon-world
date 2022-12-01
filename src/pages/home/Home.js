import React from "react";
import SimpleCard from "../../shared/components/SimpleCard";
import pikachu from "../../assets/pikachu.png";
import player from "../../assets/player.png";
import superpotion from "../../assets/superpotion.png";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <section className="container align-self-center">
      <h1 className={`${styles["title"]}`}>Welcome, to poke world!</h1>
      <div className={`grid-content-container`}>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/pokemon"}>
          <SimpleCard image={pikachu} title={"Pokemons"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/game"}>
          <SimpleCard image={player} title={"Games"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={superpotion} title={"Items"} />
        </Link>
      </div>
    </section>
  );
}
