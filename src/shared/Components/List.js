import React from "react";
import Button from "../../shared/components/Button";
import styles from "./styles/List.module.css";

export default function List({ data, setEndpoint, children }) {
  return (
    <>
      <div className={`${styles["items-container"]}`}>{children}</div>
      <div className={`${styles["buttons"]} flow-horizontal`}>
        <Button
          text={"Previous Page"}
          type="accent"
          width={"150px"}
          disabled={data.previous ? false : true}
          onClickHandler={() => {
            setEndpoint(data.previous);
          }}
        />

        <Button
          text={"Next Page"}
          type="accent"
          width={"150px"}
          disabled={data.next ? false : true}
          onClickHandler={() => {
            setEndpoint(data.next);
          }}
        />
      </div>
    </>
  );
}
