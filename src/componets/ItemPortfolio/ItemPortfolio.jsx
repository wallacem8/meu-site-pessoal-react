import React from "react";

import "./ItemPortfolio.css";


function ItemPortfolio(props) {
    return (
        <div className="item-portfolio">
            <a href={props.link}>
                <img src= {props.image} alt="Site Arena Gringa" />
                <p className="card">{props.title}</p>
            </a>
        </div>
    )
}

export default ItemPortfolio;