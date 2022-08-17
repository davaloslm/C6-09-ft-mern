import React, { useRef } from 'react';
import { FaSquareFull } from 'react-icons/fa';


const Inscripcion = () => {
    const inscripcion = useRef()

    const handleClick = () =>{
        if (inscripcion.current.style.display === "none") {
            inscripcion.current.style.display = "block"
        } else{
            inscripcion.current.style.display = "none"
        }
    }
    return (
        <div className='faq-container'>
            <div className='square-faq-container' onClick={handleClick}>
                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cómo me inscribo a los Cursos y Talleres?
                </span>
            </div>
            <div className='answer-container' ref={inscripcion}>
                <p>
                Primero deberás registrarte con un perfíl de usuario.
                <br/>
                Luego, tendrás que elegir el curso o taller al que quieres inscribirte y efectuar el pago del mismo.
                <br/>
                Te llegará un correo con un código QR, o mismo podrás verlo en tu perfil en la sección Cursos y Talleres. Ese código deberás presentarlo el primer día de cursada. 
                </p>
            </div>
            
        </div>
    );
};

export default Inscripcion;