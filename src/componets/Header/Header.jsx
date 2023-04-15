import React from "react";
import avatarWallace from "../../assets/minha-foto.jpg";
import "./Header.css";


function Header() {
    return (
        <header>
            <img className="img-avatar" src={avatarWallace} alt="Minha foto" />
            <h1 className="titulo-principal">Wallace Medeiros</h1>
            <h3>Aluno Comeia Academy</h3>
        </header>
        )
}

export default Header;