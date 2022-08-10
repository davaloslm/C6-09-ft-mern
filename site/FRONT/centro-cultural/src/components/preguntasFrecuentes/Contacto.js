import React from 'react';
import { FaFeather, FaSquareFull } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Contacto = () => {
    return (
        <div className='faq-container'>
            <div className='square-faq-container'>
                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cómo puedo contactarlos?
                </span>
            </div>
            <div className='info-container'>
        
                <span>Dirección</span>
                <p>
                    direccion.ccgsm@buenosaires.gob.ar
                </p>
            </div>
            <div className='info-container'>
                <span>
                    Información sobre Cursos y Talleres
                </span>
                <p>
                cursosytalleres.csm@gmail.com
                </p>
            </div>
            <div className='info-container'>
                <span>Prensa</span>
                <p>
                    prensaculturalsanmartin@gmail.com
                </p>
            </div>
            <div className='info-container'>
                <span>Redes</span>
                <div className='redes' >
                    <FaFacebook className='redes-icons'/>
                    <FaTwitter className='redes-icons'/>
                    <FaInstagram className='redes-icons'/>
                    <FaYoutube className='redes-icons'/>
                </div>
            </div>
                
        </div>
    );
};

export default Contacto;