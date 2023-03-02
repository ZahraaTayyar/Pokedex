import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const randomPokemon = Math.floor(Math.random() * caught.length);
  function catchPokemon() {
    setCaught(caught.concat("Pikachu", "Eevee", "Charizard"));
  }
  return (
    <div>
      <button onClick={catchPokemon}>
        Click to add a Pokemon to your collection!
      </button>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      {caught.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}
    </div>
  );
};

export default CaughtPokemon;
