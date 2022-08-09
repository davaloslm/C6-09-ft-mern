import React from 'react'
import DataCursos from './DataCursos'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
import {escritura} from './data.js'

const Escritura = () => {
  return (
    <>
    <div className="group">
            <p>Escritura Creativa</p>
            <p className="subtitle">Letras</p>
    </div>
    <p>No es lo mismo decir: “el viento movía las hojas de los árboles”, que decir: “las hojas bailaban al ritmo que el viento les proponía”. Esta diferencia está marcada por la escritura creativa y vos también podés lograrla ¿Cómo?: inscribiéndote en este taller.</p>
    <DataCursos>
        {escritura.map((info,index) =>(
            <div className="info-cursos" key={index}> 
            <p>{info.dias} de agosto</p>
            <p>{info.horario} hs</p>
            <p>${info.arancel}(pago único)</p>
            <p>{info.profesor}</p>
        </div>
        )
        )}
    </DataCursos>
    </>
  )
}

export default Escritura