import { FaSquareFull } from 'react-icons/fa';

const Registro = () => {
    
    return (
        <div className='faq-container'>
            <label  htmlFor='checkbox-r'>
                <div className='square-faq-container' >
                    <FaSquareFull className='square'/>
                    <span className='faq'>
                        ¿Cómo me registro para inscribirme a cursos/talleres y comprar entradas?
                    </span>

                </div>
            </label>
            <input id='checkbox-r' className='hiddenCheckbox' type="checkbox"></input>

            
            <div className='answer-container' >
                <p>
                    Para registrarte solo necesitarás una dirección de correo y una contraseña. Esos serán tus datos para poder ingresar a tu perfil, el cual te permitirá inscribirte a cursos/talleres y compra entradas.n correo con un código QR, o mismo podrás verlo en tu perfil en la sección Cursos y Talleres. Ese código deberás presentarlo el primer día de cursada. 
                </p>
            </div>
            
        </div>
    );
};

export default Registro;