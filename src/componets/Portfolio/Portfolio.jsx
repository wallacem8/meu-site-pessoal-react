import React from "react";

import "./portfolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

function Portfolio() {

    return (
        <main>
            {portfolio.map(
                (item,index) => 
                    <ItemPortfolio
                        key={index}
                        link={item.link}
                        image={item.image}
                        title={item.title}
                    ></ItemPortfolio>
            )}


        </main>
    );
}

export default Portfolio;