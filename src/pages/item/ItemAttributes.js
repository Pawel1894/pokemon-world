import React from "react";
import ItemAttribute from "./ItemAttribute";

export default function ItemAttributes({ attributes }) {
  return (
    <>
      {attributes && attributes.length ? <h3>Attributes</h3> : null}
      <ul>
        {attributes.map((attribute, i) => (
          <ItemAttribute key={i} endpoint={attribute.url} />
        ))}
      </ul>
    </>
  );
}
