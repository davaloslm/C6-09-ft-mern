import React from "react";
import "./fichaTecnica.css";

const FichaTecnicaCine = (props) => {
  return (
    <div className="ficha-container">
      <h2>Ficha Técnica</h2>
      <div>
        {/* Artes escénicas */}
        {props.autor ? <h3>Autor/Libro, Director Adjunto</h3> : null}
        {props.autor ? <p>{props.autor}</p> : null}
        
        {props.musica ? <h3>Música, Direccion</h3> : null}
        {props.musica ? <p>{props.musica}</p> : null}
        
        {props.idea ? <h3>Idea, Dirección gra. y Puesta en escena</h3> : null}
        {props.idea ? <p>{props.idea}</p> : null}

        {props.produccion ? <h3>Productor Ejecutivo</h3> : null}
        {props.produccion ? <p>{props.produccion}</p> : null}

        {props.elenco ? <h3>Elenco</h3> : null}
        {props.elenco ? <p>{props.elenco}</p> : null}

        {props.reemplazo ? <h3>Reemplazo</h3> : null}
        {props.reemplazo ? <p>{props.reemplazo}</p> : null}
       
      </div>
    </div>
  );
};

export default FichaTecnicaCine;
