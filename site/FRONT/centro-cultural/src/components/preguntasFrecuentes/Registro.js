import React, { useRef } from 'react';
import { FaSquareFull } from 'react-icons/fa';

const Registro = () => {
    const registro = useRef()

    const handleClick = () =>{
        if (registro.current.style.display === "none") {
            registro.current.style.display = "block"
        } else{
            registro.current.style.display = "none"
        }
    }
    return (
        <div className='faq-container'>
            <div className='square-faq-container' onClick={handleClick}>
                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cómo me registro para inscribirme a cursos/talleres y comprar entradas?
                </span>

            </div>
            
            <div className='answer-container' ref={registro}>
                <p>
                    Para registrarte solo necesitarás una dirección de correo y una contraseña. Esos serán tus datos para poder ingresar a tu perfil, el cual te permitirá inscribirte a cursos/talleres y compra entradas.n correo con un código QR, o mismo podrás verlo en tu perfil en la sección Cursos y Talleres. Ese código deberás presentarlo el primer día de cursada. 
                </p>
            </div>
            
        </div>
    );
};

export default Registro;