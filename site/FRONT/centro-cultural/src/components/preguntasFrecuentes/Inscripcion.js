import { FaSquareFull } from 'react-icons/fa';


const Inscripcion = () => {
   
    return (
        <div className='faq-container'>
            <label  htmlFor='checkbox-i'>
                <div className='square-faq-container' >
                    <FaSquareFull className='square'/>
                    <span className='faq'>
                        ¿Cómo me inscribo a los Cursos y Talleres?
                    </span>
                </div>
            </label>
            <input id='checkbox-i' className='hiddenCheckbox' type="checkbox"></input>


            <div className='answer-container'>
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