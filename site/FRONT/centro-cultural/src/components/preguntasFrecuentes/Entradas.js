import { FaSquareFull } from 'react-icons/fa';

const Entradas = () => {
    
    return (
        <div className='faq-container'>
            <label  htmlFor='checkbox-e'>
                <div className='square-faq-container'>
                    <FaSquareFull className='square'/>
                    <span className='faq'>
                        ¿Cómo puedo Comprar una Entrada?
                    </span>
                </div>
            </label>
            <input id='checkbox-e' className='hiddenCheckbox' type="checkbox"></input>


            <div className='answer-container'>
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