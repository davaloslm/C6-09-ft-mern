import React from "react";
import "./fichaTecnica.css";
import { evento } from "./Sinopsis";

const FichaTecnica = () => {
  return (
    <div className="ficha-container">
      <h2>FichaTecnica</h2>
      <div>
        <h3>Autor/Libro, Director Adjunto</h3>
        <p>{evento.autor}</p>
        <h3>Música, Direccion</h3>
        <p>{evento.musica}</p>
        <h3>Autor/Libro, Director Adjunto</h3>
        <p>{evento.idea}</p>
        <h3>Autor/Libro, Director Adjunto</h3>
        <p>{evento.productora}</p>
        <h3>Autor/Libro, Director Adjunto</h3>
        <p>{evento.elenco}</p>
      </div>
    </div>
  );
};

export default FichaTecnica;
