import React from "react";

import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/">
            <h1 className="logo">
                <span>
                    Editora MaujorTec
                </span>
            </h1>
        </Link>
    );
}