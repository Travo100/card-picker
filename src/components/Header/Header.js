import React from "react";

const Header = props => (
    <header>
        <h1>Welcome to the chihuahua game!</h1>
        <h3>Chihuahua Matches: {props.matchScore}</h3>
        <h3>Chihuahua Guesses: {props.guessScore}</h3>
        <p>In this game you pick a chihuahua, hopefully they pick you too to be their owner!</p>
    </header>
);

export default Header;