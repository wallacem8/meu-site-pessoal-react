import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";


function Nav() {
    return(
        <nav>
        <ul>
            <li className="button-li"><Link to="/">CURRÍCULO</Link></li>
            <li className="button-li"><Link to="/portfolio">PORTFÓLIO</Link></li>
            <li className="button-li"><Link to="/contacts">CONTATO</Link></li>
        </ul>
    </nav>
    );
}

export default Nav;