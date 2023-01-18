import React from "react";
import { Link } from "react-router-dom";

export const Design = ({livros}) => {
    return(
        <main className="principal">
            <h2>Categoria Frontend</h2>
            {livros.filter(cat => cat.categoria === "design").map(livro => (
                <div className="card" key={livro.id}>
                    <div className="thumb">
                        <img src={"/imagens/capas/" + livro.id + ".jpg"} alt={"Capa do livro" + livro.titulo} />
                    </div>
                    <span key={livro.slug}>
                        <Link to={`/livro/${livro.slug}`}>
                            {
                                <div className="detalhes">
                                    <h3>{livro.titulo}</h3>
                                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                                    <p>Leia mais &gt;</p>
                                </div>
                            }
                        </Link>
                    </span>
                </div>
            ))}
        </main>
    );
};

/*
{livros.filter(c => c.slug === livro.slug).map(livro => (
    <span key={livro.slug}>
        <Link to={`/livro/${livro.slug}`}>
            {
                <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia mais &gt;</p>
                </div>
            }
        </Link>
    </span>
))}
*/