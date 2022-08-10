import React from 'react'
import DataCursos from './DataCursos'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
import {cine} from './data.js'

const Cine = () => {
  return (
    <>
        <div className="group">
            <p>Cine Latinoamericano: Una Introducción</p>
            <p id="subtitle">Cine y Televisión</p>
        </div>
        <p>“Latinoamérica en un concepto, es la historia de las luchas de los pueblos arrasados en la región. Las políticas económicas impuestas foráneamente con articulaciones locales en cada país necesitan para ser llevadas a cabo, el componente represivo exterminando a algunos, erradicando a otros y alienando a los que quedan.”</p>
        <DataCursos>
            {cine.map((info,index) => (
                <div className="info-cursos" key={index}> 
                <p>{info.dias} de agosto</p>
                <p>{info.horario} hs</p>
                <p>${info.arancel}(pago único)</p>
                <p>{info.profesor}</p>
            </div>
            ))}
        </DataCursos>
    </>
  )
}

export default Cine