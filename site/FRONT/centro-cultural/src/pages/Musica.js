import React from 'react'
import "./../styles/globals.css";
import "./../styles/navBar.css";
import "./../styles/arteEscenicaPage.css"
import musica1 from './../assets/musica1.jpg'
import musica2 from './../assets/musica2.jpg'
import musica3 from './../assets/musica3.jpg'
import musica4 from './../assets/musica4.jpg'

const Musica = () => {
  return (
    <section id="artes-escenicas">
        <p className="title-cs">Música</p>
        <h3>Programación</h3>
        <div className="img-card-programacion">
            <img src={musica1} alt="" />
            <div className="text-container-programacion">
                <h3>Dan Hakim Grupo</h3>
                <p>Ciclo íntimo en El Cultural</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={musica2} alt="" />
            <div className="text-container-programacion">
                <h3>Pulsar la tierra</h3>
                <p>de Joaquín Fargas</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={musica3} alt="" />
            <div className="text-container-programacion">
                <h3>Corear Re-Buscado</h3>
                <p>Orquesta Corear</p>
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={musica4} alt="" />
            <div className="text-container-programacion">
                <h3>Hombres Bien</h3>
                <p>presenta su nuevo single “Ahora ve”</p>
            </div>
        </div>
    </section>
  )
}

export default Musica