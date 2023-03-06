import React from "react";

const BestPokemon = (props) => {
    // let abilities = ["Anticipation", "Adaptability", "Run-Away"];
    return (
        <div className="favourite-pokemon container">
            <p>My favourite Pokemon is Squirtle</p>
            <ul>
                {props.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}
            </ul>
        </div>
    );
};

export default BestPokemon;