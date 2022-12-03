import React from "react";
import { useIsFetching } from "@tanstack/react-query";
import Spinner from "./Spinner";

export function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div
      style={{
        position: "absolute",
        top: "50px",
        right: "20px",
      }}
    >
      <Spinner />
    </div>
  ) : null;
}
