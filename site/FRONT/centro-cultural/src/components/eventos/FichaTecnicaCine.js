import React from "react";
import "./fichaTecnica.css";

const FichaTecnicaCine = (props) => {
  return (
    <div className="ficha-container">
      <h2>Ficha Técnica</h2>
      <div>
               
        {/* Cine */}
        {props.genero ? <h3>Género</h3> : null}
        {props.genero ? <p>{props.genero}</p> : null}

        {props.direccion ? <h3>Dirección</h3> : null}
        {props.direccion ? <p>{props.direccion}</p> : null}

        {props.elenco ? <h3>Elenco</h3> : null}
        {props.elenco ? <p>{props.elenco}</p> : null}

        {props.origen ? <h3>Origen</h3> : null}
        {props.origen ? <p>{props.origen}</p> : null}

        {props.anio ? <h3>Año</h3> : null}
        {props.anio ? <p>{props.anio}</p> : null}

        {props.duracion ? <h3>Duración</h3> : null}
        {props.duracion ? <p>{props.duracion}</p> : null}
      </div>
    </div>
  );
};

export default FichaTecnicaCine;
