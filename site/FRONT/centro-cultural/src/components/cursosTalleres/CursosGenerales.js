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
              <DataCursos idCurso={curso._id}>
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

    </>
  );
};

export default CursosGenerales;
