import React, { useEffect, useState } from "react";
import "./../styles/globals.css";
import "./../styles/navBar.css";
import "./../styles/arteEscenicaPage.css";
import arte1 from "./../assets/arte1.jpg";
import arte2 from "./../assets/arte2.jpg";
import arte3 from "./../assets/arte3.jpg";
import arte4 from "./../assets/arte4.jpg";
import { useParams } from "react-router-dom";

const PageEventos = (props) => {
  const [data, setData] = useState({});
  const [categorias, setCategorias] = useState({});
  const params = useParams();
  const [categoriaNombre, setCategoriaNombre] = useState('')

  console.log(params.itemId);
  useEffect(() => {
    fetch(`http://localhost:2000/api/eventosCategoria/${params.itemId}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);
  console.log(data);
  // {data.categorias.map((categoria, _id) => {
  // if(categoria.nombre =)
  // })}

  return (
    <section id="artes-escenicas">
      <p className="title-cs">{data.eventosSegunCategoria ? data.eventosSegunCategoria[0].categoria.nombre : null}</p>
      <h3>Programación</h3>
      {data.eventosSegunCategoria
        ? data.eventosSegunCategoria.map((eventos) => (
            <>
              <div className="container-programacion">
                <div className="img-card-programacion">
                  <img src={eventos.imagen} alt="" />
                  <div className="text-container-programacion">
                    <h3>{eventos.nombre}</h3>
                    <br/>
                    <p>{eventos.descripcion_card.substring(0, 50) }...</p>
                  </div>
                </div>
              </div>
            </>
          ))
        : null}
    </section>
  );
};

export default PageEventos;
