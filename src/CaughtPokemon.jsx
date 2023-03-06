import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  function catchPokemon() {
    if (pokemonNameInput.length > 1) {
      setCaught((caught) => caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  }
  function removePokemon() {
    setCaught((caught) => caught.slice(0, caught.length - 1));
  }
  function clearPokemon() {
    setCaught([]);
  }

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div className="add-pokemon container">
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <form className="form-container">
        <input
          type="text"
          value={pokemonNameInput}
          onChange={handleInputChange}
          placeholder="Enter you favourite Pokemon"
          required
        />
        <div className="button-container">
          <button onClick={catchPokemon} id="add-btn">
            Add Pokemon
          </button>
          <button onClick={removePokemon} id="remove-btn">
            Remove Pokemon
          </button>
          <button onClick={clearPokemon} id="clear-btn">
            Clear
          </button>
        </div>
      </form>
      <ul>
        {caught.map((animal, index) => (
          <li key={index}> {animal} </li>
        ))}
      </ul>
    </div>
  );
};
//ask how to make list only add one pokemon at a time to list from an array.

export default CaughtPokemon;
