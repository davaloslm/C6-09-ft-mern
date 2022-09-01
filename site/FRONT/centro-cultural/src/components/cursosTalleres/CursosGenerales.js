import React, { useEffect, useState } from "react";
import DataCursos from "./DataCursos";
import "./../../styles/globals.css";
import "./../../styles/cursosTalleres.css";
import { cursoArteEscenica } from "./data";

const CursosGenerales = ({ idCurso }) => {
  console.log(idCurso);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:2000/api/cursos`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);
  console.log(data);
  return (
    <>
      {data.cursos
        ? data.cursos.map((curso) => (
            <div key={curso._id} className="container-test">
              <div className="group">
                <p>{curso.nombre}</p>
                <p>{curso.categoriaCurso}</p>
                <p id="subtitle">{curso.categoria}</p>
              </div>

              <p>{curso.descripcion}</p>
              <DataCursos>
                  <div className="info-cursos" key={curso._id}>
                    <p>{curso.diasDeCurso}</p>
                    <p>{curso.horariosDeCurso}</p>
                    <p>${curso.precio}(pago único)</p>
                    <p>{curso.coordinador}</p>
                  </div>
              </DataCursos>
              <br />
            </div>
          ))
        : null}

      {/*<div className="group">
            <p>Imagen, Diseño y Creatividad en el vestuario</p>
            <p id="subtitle">Artes Escénicas</p>
        </div>
        
        <p>Nos introduciremos dentro del proceso proyectual de diseño de Vestuario para espectáculos.</p>
        <br/>
        <p>El curso es teórico-práctico comprendiendo el análisis del diseño de Vestuario a través del soporte de imágenes, films, y textos cortos, teniendo como referente las variables de temporalidad, espacialidad, los personajes y su mensaje. </p>
        <DataCursos >
        {cursoArteEscenica.map((info, index) => (
        <div className="info-cursos" key={index}> 
            <p>{info.dias} de agosto</p>
            <p>{info.horario} hs</p>
            <p>${info.arancel}(pago único)</p>
            <p>{info.profesor}</p>
        </div>
        
        )
        )}
        </DataCursos>
        */}
    </>
  );
};

export default CursosGenerales;
