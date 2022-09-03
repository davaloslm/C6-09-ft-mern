import PropTypes from 'prop-types';
import "./horariosEscenicasCine.css"

HorariosEscenicasCine.propTypes = {
    
};

function HorariosEscenicasCine(props) {

    return (
        <>
        <div className='horarios-escenicas-cine-container'>
            <span className='event-horario'>Horario</span>
            {props.funciones ? <p ><b>Funciones</b></p> : null}
            {props.funciones ? <p>{props.funciones}</p> : null}
            

        </div>
        </>
    );
}
HorariosEscenicasCine.propTypes = {
    fechaDeInicio: PropTypes.string,
    fechaDeFinalizacion: PropTypes.string
}

export default HorariosEscenicasCine;