import React from "react";

import { Logo } from "../../components/Logo";
import { Navegacao } from "../../components/Navegacao";

export const Topo = () => {
    return(
        <header className="topo">
            <Logo />
            <Navegacao />
        </header>
    );
}