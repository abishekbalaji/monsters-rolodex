import React from "react";

import "./Card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.pokemon.id}?set=set2&size=180x180`}
    />
    <h1>{props.pokemon.name}</h1>
    <p>{props.pokemon.email}</p>
  </div>
);
