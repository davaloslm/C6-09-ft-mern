import React from 'react';
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import Horarios from "../components/preguntasFrecuentes/Horarios"
import ComoLlegar from "../components/preguntasFrecuentes/ComoLlegar"
import Contacto from "../components/preguntasFrecuentes/Contacto"
import Registro from "../components/preguntasFrecuentes/Registro"
import Inscripcion from "../components/preguntasFrecuentes/Inscripcion"
import Entradas from "../components/preguntasFrecuentes/Entradas"
import "../styles/preguntasFrecuentes.css"


const PreguntasFrecuentes = () => {
    return (
        <>    
            <section className='preguntas-frecuentes'>
            <div className='title-pf'>
            Preguntas Frecuentes
            </div>

            <div className='responsive-container'>
                <div className='responsive-horarios'>
                    <Horarios/>
                </div>
                <div className='responsive-comollegar'>
                    <ComoLlegar/>
                </div>
                <div className='responsive-contacto'>
                    <Contacto/>
                </div>
            </div>
             
                <Registro/>
                <Inscripcion/>
                <Entradas/>
            
            </section>
        </>
    );
};

export default PreguntasFrecuentes;