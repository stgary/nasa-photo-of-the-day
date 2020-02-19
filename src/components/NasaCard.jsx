import React from "react";

const NasaCard = props => {
    return (
        <div className="card" key="">
            <img src={props.image} alt="APOD"/>
            <span>{props.date}</span>
            <h2>Title: {props.title}</h2>
            <p>Explanation: {props.explanation}</p>
        </div>
    );
};
export default NasaCard;