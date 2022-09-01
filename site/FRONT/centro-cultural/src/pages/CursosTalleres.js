import React, { useEffect, useState } from 'react'
import ArtesEscenicas from './../components/cursosTalleres/ArtesEscenicas.js'
import Cine from './../components/cursosTalleres/Cine.js'
import Fotografia from './../components/cursosTalleres/Fotografia'
import Escritura from './../components/cursosTalleres/Escritura'
import Mapa from './../components/home/Mapa'
import './../styles/cursosTalleres.css'
import './../styles/globals.css'
import CursosGenerales from '../components/cursosTalleres/CursosGenerales.js'

const CursosTalleres = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:2000/api/cursos`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => error);
  }, []);
  console.log(data);
  return (
    <section id="cursosTalleres">
      <p className="title-cs">Cursos y Talleres</p>
      <p>El <strong>Cultural San Martín</strong> ofrece talleres y seminarios presenciales durante los meses de mayo, junio, julio y agosto. Hay cursos de 12 clases de 6 encuentros.</p>
      <br/>
      <p>Todos se llevan a cabo en alguna de las salas del CSM, ubicado en Sarmiento 1551 - CABA.</p>
      <br/>
      <p>¡Te esperamos!</p>
      <div className="container-cursosytalleres">
        {data.cursos ? 
        <>
          <CursosGenerales idCurso={data.cursos._id} />
          </>
        :null}
      </div>
      <br/> <br/>
    </section>
  )
}

export default CursosTalleres