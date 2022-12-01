import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/SideBar.module.css";
import pikachu from "../../../assets/pikachu.png";
import logo from "../../../assets/logo.png";
import player from "../../../assets/player.png";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <aside
      className={`${isMenuOpen ? styles["aside-open"] : null} ${styles["aside-container"]} bg-primary`}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <NavLink
        to={"/home"}
        title="Homepage"
        className={({ isActive }) => {
          return `${styles["nav-link"]} ${isActive ? styles["nav-link-active"] : null}`;
        }}
      >
        <img width={40} src={logo} alt="" />
        <span>Home</span>
      </NavLink>
      <NavLink
        to={"/pokemon"}
        title="pokemons"
        className={({ isActive }) => {
          return `${styles["nav-link"]} ${isActive ? styles["nav-link-active"] : null}`;
        }}
      >
        <img width={40} src={pikachu} alt="" />
        <span>Pokemons</span>
      </NavLink>
      <NavLink
        to={"/game"}
        title="Games"
        className={({ isActive }) => {
          return `${styles["nav-link"]} ${isActive ? styles["nav-link-active"] : null}`;
        }}
      >
        <img width={40} src={player} alt="" />
        <span>Games</span>
      </NavLink>
    </aside>
  );
}
