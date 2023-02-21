import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import reactDom from "react-dom";

function App() {
  return (
    <div>
      <Logo/>
      <BestPokemon/>
      <CaughtPokemon/>
    </div>
  );
}

// reactDom.render(
//     <App/>, document.querySelector('#root')
// )
export default App;
