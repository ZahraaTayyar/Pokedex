import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSlector";
import PokemonCity from "./PokemonCity";
// import reactDom from "react-dom";

function App() {
  function LogWhenClicked() {
    console.log("Hi!");
  }
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  return (
    <div className="card">
      <Logo appName={"Zahraa's Pokedex"} handleClick={LogWhenClicked}/>
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

// reactDom.render(
//     <App/>, document.querySelector('#root')
// )
export default App;
