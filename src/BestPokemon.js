import React from "react";

const BestPokemon = () => {
    let abilities = ["Anticipation", "Adaptability", "Run-Away"];
    return (
        <div>
            <p>My favourite Pokemon is Squirtle</p>
            <ul>{abilities.map((ability) => (
                <li>{ability}</li>
            ))}</ul>
        </div>
    );
};

export default BestPokemon;