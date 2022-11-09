import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../components/IconButton";

export default function Random() {
  async function onRandomGet() {}
  return (
    <IconButton css={"text-accent-200"} onClick={onRandomGet}>
      <FontAwesomeIcon title="Get random pokemon" icon={faDice} size="xl" />
    </IconButton>
  );
}
