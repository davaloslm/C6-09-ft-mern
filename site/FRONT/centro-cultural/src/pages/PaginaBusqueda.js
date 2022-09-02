import React, {useState, useEffect} from 'react'

const PaginaBusqueda = (props) => {
  const [data, setData] = useState({})
  const [resultadoBusqueda, setResultadoBusqueda] = useState([])

  useEffect(() => {
    fetch(`http://localhost:2000/api/eventos`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);
  console.log(data);

  /*const filtrarResultados = (busqueda) => {
    const resultados = data.filter((resultado) => {
      if(resultado.nombre.toString().toLowerCase().includes() || resultado.descripcion_card.toString().toLowerCase().includes(props.terminoBusqueda)) {
        return resultado;
      })
    })
    setResultadoBusqueda(resultados)
  }
  */


  return (
    <>
    <div>Resultados Busqueda</div>
    {/*{resultadoBusqueda ? 

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
            : null}
    <div/>*/}

            </>

  )
}

export default PaginaBusqueda