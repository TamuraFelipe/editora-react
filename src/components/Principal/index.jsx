import React from "react";

import { Home } from "../../components/Home";
const tituloPagina = "Últimos Lançamentos";
const dados = [
    { isbn: "978-85-7522-xxx-x", titulo: "React", autor: "Maujor"},
    { isbn: "978-85-7522-776-3", titulo: "Design UX", autor: "Will"},
    { isbn: "978-85-7522-550-9", titulo: "Laravel para ninjas", autor: "Jacl"},
];

export const Principal = () => {
    return (
        <main className="principal">
            <Home 
            tituloPagina={tituloPagina}
            dados={dados}
            />
        </main>
    );
};