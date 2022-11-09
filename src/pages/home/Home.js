import React from "react";
import SimpleCard from "../../shared/Components/SimpleCard";
import pikachu from "../../assets/pikachu.png";
import fist from "../../assets/fist.png";
import incubator from "../../assets/incubator.png";
import player from "../../assets/player.png";
import pointer from "../../assets/pointer.png";
import smartphone from "../../assets/smartphone.png";
import superpotion from "../../assets/superpotion.png";
import map from "../../assets/map.png";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={`${styles["home"]}`}>
      <div className={`${styles["cards"]}`}>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={pikachu} title={"Pokemons"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={incubator} title={"Evolutions"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={fist} title={"Moves"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={player} title={"Games"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={pikachu} title={"Berries"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={pointer} title={"Encounters"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={superpotion} title={"Items"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={map} title={"Loactions"} />
        </Link>
        <Link className={`${styles["card"]} text-decoration-none`} to={"/"}>
          <SimpleCard image={smartphone} title={"Machines"} />
        </Link>
      </div>
    </section>
  );
}
