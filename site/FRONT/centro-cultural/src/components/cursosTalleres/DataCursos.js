import React from 'react'
import './../../styles/globals.css'
import './../../styles/cursosTalleres.css'
import { Link } from 'react-router-dom'
// import {cursoArteEscenica} from './data'

const DataCursos = ({idCurso, children}) => {
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
      <Link to={(`/comprar-curso/${idCurso}`)}>
        <button >Inscribirme</button>
        </Link>
    </>
  )
}

export default DataCursos