import React from "react";
import { toast } from "react-toastify";
import { useAttribute } from "../../hooks/useAttribute";

export default function ItemAttribute({ endpoint }) {
  const { data, status, error } = useAttribute(endpoint);

  if (status === "loading") return <span>Loading...</span>;

  if (status === "error") return toast.error(`Error fetching attribute... ${error}`);

  return data.descriptions.map((item, i) => <li key={i}>{item.description}</li>);
}
