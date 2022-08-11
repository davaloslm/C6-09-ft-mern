import React from 'react'
import DataCursos from './DataCursos'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
import {cursoArteEscenica} from './data'

const ArtesEscenicas = () => {
return (
    <>  
        <div className="container-test">
        <div className="group">
            <p>Imagen, Diseño y Creatividad en el vestuario</p>
            <p id="subtitle">Artes Escénicas</p>
        </div>
        
        <p>Nos introduciremos dentro del proceso proyectual de diseño de Vestuario para espectáculos.</p>
        <br/>
        <p>El curso es teórico-práctico comprendiendo el análisis del diseño de Vestuario a través del soporte de imágenes, films, y textos cortos, teniendo como referente las variables de temporalidad, espacialidad, los personajes y su mensaje. </p>
        <DataCursos>
        {cursoArteEscenica.map((info, index) => (
        <div className="info-cursos" key={index}> 
            <p>{info.dias} de agosto</p>
            <p>{info.horario} hs</p>
            <p>${info.arancel}(pago único)</p>
            <p>{info.profesor}</p>
        </div>
        
        )
        )}
        </DataCursos>
        </div>
    
    </>
)
}

export default ArtesEscenicas