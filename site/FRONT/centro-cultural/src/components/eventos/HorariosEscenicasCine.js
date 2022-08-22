import React from 'react';
import PropTypes from 'prop-types';
import "./horariosEscenicasCine.css"

HorariosEscenicasCine.propTypes = {
    
};

function HorariosEscenicasCine(props) {
    return (
        <>
        <div className='horarios-escenicas-cine-container'>
            <span>Funciones</span>
            <p>{props.fechaDeInicio} al {props.fechaDeFinalizacion} </p>


        </div>
        </>
    );
}
HorariosEscenicasCine.propTypes = {
    fechaDeInicio: PropTypes.string,
    fechaDeFinalizacion: PropTypes.string
}

export default HorariosEscenicasCine;