import React from "react";
import ItemAttributes from "./ItemAttributes";
import styles from "./styles/ItemCard.module.css";

export default function ItemCard({ item }) {
  function getEngName(names, backupName) {
    const engName = names.find((name) => name.language.name === "en");

    if (engName) return engName.name;

    return backupName;
  }

  return (
    <div className={`${styles["container"]} w-100`}>
      <div className={`${styles["header"]} flex-center`}>
        <img src={item?.sprites["default"]} alt="" />
        <h2 className="text-capitalize fw-semi-bold">{getEngName(item.names, item.name)}</h2>
      </div>
      <div className={`${styles["attributes"]}`}>
        <ItemAttributes attributes={item.attributes} />
      </div>
    </div>
  );
}
