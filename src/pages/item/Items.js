import React, { useState } from "react";
import { toast } from "react-toastify";
import { useItems } from "../../hooks/useItems.js";
import List from "../../shared/components/List.js";
import Spinner from "../../shared/ui/Spinner.js";
import ItemCard from "./ItemCard.js";

export default function Items() {
  const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/item?offset=0&limit=5");
  const { status, data, error } = useItems(endpoint);

  if (status === "loading") return <Spinner center />;

  if (status === "error") return toast.error(`Error fetching items... ${error}`);

  return (
    <section className="container">
      <List data={data} setEndpoint={setEndpoint}>
        {data.results.map((item) => {
          return <ItemCard key={item.name} item={item} />;
        })}
      </List>
    </section>
  );
}
