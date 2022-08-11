import React from 'react'
import "./../styles/globals.css";
import "./../styles/navBar.css";
import "./../styles/arteEscenicaPage.css"
import visuales1 from './../assets/visuales1.jpg'
import visuales2 from './../assets/visuales2.jpg'
import visuales3 from './../assets/visuales3.jpg'
import visuales4 from './../assets/visuales4.jpg'

const ArtesVisualesPage = () => {
  return (
    <section id="artes-escenicas">
        
        <p className="title-cs">Artes Visuales</p>
        <h3>Programación</h3>
        <div className="container-programacion">
        <div className="img-card-programacion">
            <img src={visuales1} alt="" />
            <div className="text-container-programacion">
                <h3>AAmA 19th</h3>
                <p>Asian - African - Mediterranean - European and Americas Internantional Art Exhibition</p>
                
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={visuales2} alt="" />
            <div className="text-container-programacion">
                <h3>¿Soy Yo?</h3>
                <p>Griselda Álvarez</p>
                
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={visuales3} alt="" />
            <div className="text-container-programacion">
                <h3>Medio y Médium</h3>
                <p>Julieta Proto, Inés Deluca y Amparo Feito</p>
                
            </div>
        </div>
        <div className="img-card-programacion">
            <img src={visuales4} alt="" />
            <div className="text-container-programacion">
                <h3>Joyas del Delta</h3>
                <p>Tecnología espiritual</p>
                <p>Maja Lascano</p>
                
            </div>
        </div>
        </div>
    </section>
  )
}

export default ArtesVisualesPage