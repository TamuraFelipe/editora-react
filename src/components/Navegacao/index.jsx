import React from "react";

import { NavLink } from "react-router-dom";
let linkCurrent = {
    color: "red"
}

export const Navegacao = () => {
    return(
        <ul>
            <li><NavLink exact activeStyle={linkCurrent} to="/">Home</NavLink></li>
            <li><NavLink exact activeStyle={linkCurrent} to="/frontend">Frontend</NavLink></li>
            <li><NavLink exact activeStyle={linkCurrent} to="/programacao">Programação</NavLink></li>
            <li><NavLink exact activeStyle={linkCurrent} to="/design">Design</NavLink></li>
            <li><NavLink exact activeStyle={linkCurrent} to="/catalogo">Catálogo</NavLink></li>
        </ul>
    );
}