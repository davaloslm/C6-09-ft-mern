import React, { useEffect, useState } from 'react'
import "./../styles/globals.css";
import "./../styles/navBar.css";
import "./../styles/arteEscenicaPage.css"
import arte1 from './../assets/arte1.jpg'
import arte2 from './../assets/arte2.jpg'
import arte3 from './../assets/arte3.jpg'
import arte4 from './../assets/arte4.jpg'

const ArtesEscenicasPage = () => {
  const [data, setData] = useState({})
  const [categorias, setCategorias] = useState({})

  useEffect(() => {
   fetch('http://localhost:2000/api/eventosCategoria/630e27a76297a9b293e568c9')
   .then(res => res.json())
   .then(data => setData(data))
   .catch(error => error)

  }, [])
  
 // {data.categorias.map((categoria, _id) => {
  // if(categoria.nombre =)
 // })}

  return (
    <section id="artes-escenicas">
        <p className="title-cs">Artes Escénicas</p>
        <h3 className="title-vistas">Programación</h3>
        <div className="container-programacion">
        
        <div className="img-card-programacion">
            <img src={arte1} alt="" />
            <div className="text-container-programacion">
                <h3>Eternidades</h3>
                <p>Té póstumo en hall de cine</p>
                <p>Idea, dirección y puesta de Pablo Gorlero</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={arte2} alt="" />
            <div className="text-container-programacion">
                <h3>Lo único épico aquí lo hemos robado</h3>
                <p>de Los Pipis Teatro</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={arte3} alt="" />
            <div className="text-container-programacion">
                <h3>El parador 2</h3>
                <p>La historia continúa</p>
                <p>Libro de Paula Schapiro</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={arte4} alt="" />
            <div className="text-container-programacion">
                <h3>El caso Arena Rodrigo contra la Danza Contemporánea</h3>
                <p>Rodrigo Arena</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ArtesEscenicasPage