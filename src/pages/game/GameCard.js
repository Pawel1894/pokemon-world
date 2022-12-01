import React from "react";
import styles from "./styles/GameCard.module.css";

export default function Game({ data }) {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["header"]}`}>
        <span className={`${styles["title"]} text-uppercase fw-semi-bold`}>{data.name}</span>
        <span className={`${styles["subtitle"]} text-capitalize`}>{data.main_region.name} Region</span>
      </div>
      <div className={`${styles["body"]}`}>
        <ul className={`text-left`}>
          {data.version_groups.map((version) => (
            <li className={`${styles["version"]} text-accent-100`}>{version.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
