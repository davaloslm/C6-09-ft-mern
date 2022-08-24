import React from 'react';
import PropTypes from 'prop-types';
import "./valor.css"

Valor.propTypes = {
    
};

function Valor(props) {
    return (
        <>
        <div className='price-container'>
            <span>
                Valor
            </span>

            <p>Entrada general: ${props.precio}-</p>
        </div>
        </>
    );
}
Valor.propTypes = {
    precio: PropTypes.string
}

export default Valor;