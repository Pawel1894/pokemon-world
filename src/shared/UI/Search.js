import React from "react";
import IconButton from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Search.module.css";

export default function Search() {
  async function onSearch() {
    console.log("random");
  }

  return (
    <div className={`flex-center`}>
      <IconButton css={"text-accent-200"} onClick={onSearch}>
        <FontAwesomeIcon title="Search" icon={faSearch} size="xl" />
      </IconButton>
      <input
        placeholder="Search For Pokemons"
        className={`${styles["search-input"]}`}
        type={"text"}
      />
    </div>
  );
}
