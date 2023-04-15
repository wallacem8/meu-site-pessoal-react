import React from "react";

import "./portfolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";
import portfolio from "./Portfolio.json";

function Portfolio() {

    return (
        <main>
            {portfolio.map(
                (item,index) => 
                    <ItemPortfolio
                        key={index}
                        link={item.link}
                        image={item.image + (index + 1)}
                        title={item.title}
                    ></ItemPortfolio>
            )}


        </main>
    );
}

export default Portfolio;