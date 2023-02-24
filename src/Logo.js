import React from "react";

const Logo = (props) => {
    // const appName = "Zahraa's Pokedex";
    return (
        <header>
            <h1>Welcome to {props.appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
        </header>
    );
};

export default Logo;