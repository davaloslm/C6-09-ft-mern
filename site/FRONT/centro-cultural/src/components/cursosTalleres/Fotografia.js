import React from 'react'
import DataCursos from './DataCursos'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
import {fotografia} from './data.js'

const Fotografia = () => {
  return (
    <>
     <div className="group">
            <p>Fotografía Digital 1</p>
            <p className="subtitle">Fotografía</p>
        </div>
        <p>Esta experiencia es indicada para quienes se inician en el mundo de la fotografía digital sin conocimientos previos. Introducimos los conceptos básicos de la imagen digital, los incorporamos a los principios de la fotografía en general y los aplicamos a la operación de las cámaras que aporten los participantes al seminario.</p>
        <DataCursos>
            {fotografia.map((info,index) => (
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

export default Fotografia