import React, { useEffect, useState } from "react";
import "./gridCard.css";
import imgArtesEscenicas from "../../assets/img/artesEscenicas.png";
import imgArtesVisuales from "../../assets/img/artesVisuales.png";
import imgMusica from "../../assets/img/musica.png";
import imgCine from "../../assets/img/cine.png";
import { Link } from "react-router-dom";

const GridCard = () => {
  const [data, setData] = useState({});
  console.log("ingresando al useefect");
  //console.log(data.categorias[0])git 
  console.log("leer data");
  console.log(data);

  useEffect(() => {
    console.log("ingresando al useefect");
    /*const data = async()=> {
    await fetch('http://localhost:2000/api/categorias')
  }*/
    fetch("http://localhost:2000/api/categorias")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Hubo un prolema al llamar a la api"));
  }, []);

  console.log(data);
  console.log(data);
  return (
    <div className="gridProgramacionContainerBig">
      <div className="gridProgramacionContainer">
        <h2 className="subtitle">Programacion</h2>
        <div className="gridProgracion">
          {data.categorias &&
            data.categorias?.map((categoria) => {
              console.log(categoria);
            })}

          {data.categorias
            ? data.categorias.map((categoria) => (
                <div key={categoria._id} className="cardGridUno">
                  <Link to={(`/eventos/${categoria._id}`)}>
                    <img src={categoria.imagen} alt="" />
                    <h3>{categoria.nombre}</h3>
                  </Link>
                </div>
              ))
            : null}
          {/*{data.categorias ? 
        <>
          <div className="cardGridUno">
          <Link to={(`/eventos`)}>
            <img src={data?.categorias[0]?.imagen} alt="" />
            <h3>{data?.categorias[0]?.nombre}</h3>
          </Link>
        </div>
        <div className="cardGridDos">
          <Link to="/artes-visuales">
            <img src={data?.categorias[1]?.imagen} alt="" />

            <h3>{data?.categorias[1]?.nombre}</h3>
          </Link>
        </div>

        <div className="cardGridUno">
          <Link to="/musica">
            <img src={data?.categorias[2]?.imagen} alt="" />

            <h3>{data?.categorias[2]?.nombre}</h3>
          </Link>
        </div>

        <div className="cardGridDos">
          <Link to="/cine">
            <img src={data?.categorias[3]?.imagen} alt="" />

            <h3>{data?.categorias[3]?.nombre}</h3>
          </Link>
        </div>
        </>
         : null
      }  */}

          {/*
                <div className='cardGridDos'>
                    <img src={imgArtesVisuales} alt=''/>

                    <h3>Artes Visuales</h3>    
                </div>

                <div className='cardGridUno'>
                    <img src={imgCine} alt=''/>

                    <h3>Cine</h3>                
                </div>

                <div className='cardGridDos'>
                    <img src={imgMusica} alt=''/>

                    <h3>Música</h3>                
                </div>*/}
        </div>
      </div>
    </div>
  );
};

export default GridCard;
