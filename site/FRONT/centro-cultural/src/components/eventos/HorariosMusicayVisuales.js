import React from 'react'
import './horariosMusicayVisuales.css';
const HorariosMusicayVisuales = (props) => {
  return (
    <div className='container-musica-visuales'>
      <h2>Horarios</h2>
      <p><strong>Inauguración y Cierre</strong></p>
      <p>{props.fecha}</p>
      <br/>
      <p>{props.hora}</p>
    </div>

  )
}

export default HorariosMusicayVisuales