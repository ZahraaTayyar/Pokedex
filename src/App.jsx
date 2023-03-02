import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import reactDom from "react-dom";

function App() {
  function LogWhenClicked() {
    console.log("Hi!");
  }
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName={"Zahraa's Pokedex"} handleClick={LogWhenClicked}/>
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

// reactDom.render(
//     <App/>, document.querySelector('#root')
// )
export default App;