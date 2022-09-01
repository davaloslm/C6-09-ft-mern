import React from 'react'
import "./../styles/globals.css";
import "./../styles/navBar.css";
import "./../styles/arteEscenicaPage.css"
import cine1 from './../assets/cine1.jpg'
import cine2 from './../assets/cine2.jpg'
import cine3 from './../assets/cine3.jpg'
import cine4 from './../assets/cine4.jpg'

const CinePage = () => {
  return (
    <section id="artes-escenicas">
        <p className="title-cs">Cine</p>
        <h3 className="title-vistas">Programación</h3>
        <div className="container-programacion">
        <div className="img-card-programacion">
            <img src={cine1} alt="" />
            <div className="text-container-programacion">
                <h3>Fantasma Vuelve al Pueblo</h3>
                <p>de Augusto González Polo</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={cine2} alt="" />
            <div className="text-container-programacion">
                <h3>La Creciente</h3>
                <p>de Franco González y Demian Santander</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={cine3} alt="" />
            <div className="text-container-programacion">
                <h3>El Cadaver Insepulto</h3>
                <p>de Alejandro Cohen Arazi</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={cine4} alt="" />
            <div className="text-container-programacion">
                <h3>Lleno de Ruido y Dolor</h3>
                <p>de Nacho Aguirre</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default CinePage