import React from 'react';
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import Horarios from "../components/preguntasFrecuentes/Horarios"
import ComoLlegar from "../components/preguntasFrecuentes/ComoLlegar"
import Contacto from "../components/preguntasFrecuentes/Contacto"
import Registro from "../components/preguntasFrecuentes/Registro"
import Inscripcion from "../components/preguntasFrecuentes/Inscripcion"
import Entradas from "../components/preguntasFrecuentes/Entradas"


const PreguntasFrecuentes = () => {
    return (
        <>
            <div className='title'>
            Cursos y Talleres
            </div>
        
            <section>
                <Horarios/>
                <ComoLlegar/>
                <Contacto/>
                <Registro/>
                <Inscripcion/>
                <Entradas/>
            </section>
        </>
    );
};

export default PreguntasFrecuentes;