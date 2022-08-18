import { FaSquareFull } from 'react-icons/fa';

const Horarios = () => {
    
    return (
        <div className='faq-container'>

            <label  htmlFor='checkbox-h'>
            <div className='square-faq-container' >

                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cúales son sus horarios?
                </span>
            </div>
            </label>
            <input id='checkbox-h' className='hiddenCheckbox' type="checkbox"></input>

            <div className='answer-container' >

                <div className='info-container'>
                    <span>
                        Días y Horarios
                    </span>

                    <p>
                        Lunes a Domingos de 8 a 22 hs
                    </p>
                </div>
                
                <div className='info-container'>
                    <span>
                        Días y Horarios de Boleterías
                    </span>

                    <p>
                        Lunes a Domingos de 11 a 21 hs
                    </p>
                </div>
            </div>

            
        </div>
    );
};

export default Horarios;