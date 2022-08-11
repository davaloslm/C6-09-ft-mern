import React, { useRef } from 'react';
import { FaSquareFull } from 'react-icons/fa';

const Entradas = () => {
    const entradas = useRef();

    const handleClick = () =>{
        if (entradas.current.style.display == "none") {
            entradas.current.style.display = "block"
        } else{
            entradas.current.style.display = "none"
        }
    }
    return (
        <div className='faq-container'>
            <div className='square-faq-container' onClick={handleClick}>
                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cómo puedo Comprar una Entrada?
                </span>
            </div>

            <div className='answer-container' ref={entradas}>
                <p>
                Primero deberás registrarte con un perfíl de usuario.
                <br/>
                Luego, tendrás que elegir el evento al cual quieras asistir y efectuar el pago del mismo.
                <br/>  
                Te llegará un correo con un código QR, o mismo podrás verlo en tu perfil en la sección Mis Entradas. Ese código deberás presentarlo el día del evento.
                </p>
            </div>

            
        </div>
    );
};

export default Entradas;