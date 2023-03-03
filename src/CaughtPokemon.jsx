import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const randomPokemon = ["Pikachu", "Eevee", "Charizard"];
  function catchPokemon() {
    let randomIndex = Math.floor(Math.random() * randomPokemon.length);
    setCaught((oldCaught) => oldCaught.concat(randomPokemon[randomIndex]));
    // setCaught((prevCaught) => {
    //   const newPokemon = randomPokemon[]
    //   [...prevCaught, newPokemon]
    // });
  }
  return (
    <div class="add-pokemon-container">
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <button onClick={catchPokemon}>
        Click to add a Pokemon to your collection!
      </button>
      <ul>{
        caught.map((animal, index) => (
         <li key={index}> {animal} </li>
        ))
      }</ul>
    </div>
  );
};
//ask how to make list only add one pokemon at a time to list from an array.

export default CaughtPokemon;
