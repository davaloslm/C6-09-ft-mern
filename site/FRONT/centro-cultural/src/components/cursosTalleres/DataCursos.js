import React from 'react'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
// import {cursoArteEscenica} from './data'

const DataCursos = ({children}) => {
  return (
    <>
    <div className="container-cursos">
        <ul>
            <li>Días</li>
            <li>Horarios</li>
            <li>Arancel</li>
            <li>Coordina</li>
        </ul>
        {children}
    </div>
        <button>Inscribirme</button>
    </>
  )
}

export default DataCursos