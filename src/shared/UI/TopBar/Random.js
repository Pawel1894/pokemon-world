import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../components/IconButton";

export default function Random({ id, onCLickHandler }) {
  return (
    <IconButton id={id} css={"text-accent-100"} onClick={onCLickHandler}>
      <FontAwesomeIcon title="Get random pokemon" icon={faDice} size="xl" />
    </IconButton>
  );
}
