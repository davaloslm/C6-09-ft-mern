import React from 'react'
import './horariosMusicayVisuales.css';
const HorariosMusicayVisuales = (props) => {
  return (
    <div className='container-musica-visuales'>
      <h2>Horarios</h2>
      {props.fecha ? <p><strong>Inauguración y Cierre</strong></p> : null}
      {props.fecha ? <p>{props.fecha}</p> : null}
      
      <br/>
      <p>{props.horarios}</p>
    </div>

  )
}

export default HorariosMusicayVisuales