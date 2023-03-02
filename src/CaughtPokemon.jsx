import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  function catchPokemon() {
    setCaught(caught.concat("Pikachu", "Eevee", "Charizard"));
  }
  return (
    <div class="add-pokemon-container">
      <button onClick={catchPokemon}>
        Click to add a Pokemon to your collection!
      </button>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <ul>{caught.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}</ul>
    </div>
  );
};
//ask how to make list only add one pokemon at a time to list from an array.

export default CaughtPokemon;
