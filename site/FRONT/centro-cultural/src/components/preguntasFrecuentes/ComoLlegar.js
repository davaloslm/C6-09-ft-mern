import React, { useRef } from 'react';
import { FaSquareFull } from 'react-icons/fa';

const ComoLlegar = () => {
    const display = useRef();

    const handleClick = () =>{
        if (display.current.style.display == "none") {
            display.current.style.display = "block"
        } else{
            display.current.style.display = "none"
        }
    }
    
  
    return (
        <div className='faq-container'>
            <div className='square-faq-container' onClick={handleClick} >
                <FaSquareFull className='square'/>
                <span className='faq'>
                    ¿Cómo llegar?
                </span>
            </div>
            <div className='answer-container' ref={display}>
                <p>
                    Nos encontrás en Sarmiento 1551
                </p>
                <p>
                    Ciudad Autónoma de Buenos Aires
                </p>

                <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90980.84283908257!2d-58.50993698558723!3d-34.58285103766612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac4091da5df%3A0x1384c082e8c83a12!2sCentro%20Cultural%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1660012138569!5m2!1ses-419!2sar" title='map' className='map' width="400" height="300" Style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <span>Transporte</span>
                <span>Líneas de Colectivos</span>
                <p>
                    5, 6, 7, 23, 24, 26, 29, 39, 50, 60, 102, 146, 180
                </p>
                <span>Líneas de Subterráneos</span>
                <p>
                    A (estación Sáenz Peña) ; B (estación Uruguay)
                </p>
            </div>

            
        </div>
    );
};

export default ComoLlegar;