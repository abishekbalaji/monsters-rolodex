import React from "react";
import "./CardList.styles.css";
import { Card } from "../card/Card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
