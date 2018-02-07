import React from "react";
import "./Cards.css";

const Cards = (props) => (
    <div 
        className="col-md-4" 
        style={{backgroundImage: `url("${props.image}")`}}
        onClick= {() => props.updateScore(props)}
    >
    </div>
);

export default Cards