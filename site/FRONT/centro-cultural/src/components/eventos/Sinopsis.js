import React from 'react';
import './sinopsis.css';
export const evento = 
  {
      idEvento: '1',
      descripcion: 'Cuatro divas del espectáculo argentino, jóvenes, bellas, inquietas, creativas y conflictivas se encuentran sorpresivamente.',
      descripcion1: 'Van apareciendo entre ellas algunas afinidades y otras tantas enemistades surgidas de vivencias comunes, actuaciones compartidas y viejas rencillas relacionadas con sus convicciones políticas.',
      descripcion2: 'Se van desempolvando historias tan germosas como trágica, que fueron la piedra basal de la vida de estas cuatro actrices.',
      autor: 'Luis Longhi',
      musica: 'Juan Ignacio López',
      idea: 'Pablo Gorlero',
      productora: 'Élida Mohana, Cu.Mo Producciones',
      elenco: 'Sofia Almuina (Zully Moreno), Lucia Andrada (Libertas Lamarque), Agustina D\'Angelo (Tita Mrello), Jimena Gonik (Fanny Navarro)',
      reemplazo: 'Karina Barda'
  }
console.log(evento)
const Sinopsis = () => {
  return (
    <div className='container-sinopsis'>
      <h2>Sinopsis</h2>
      <div>
        <p>{evento.descripcion}</p>
        <p>{evento.descripcion1}</p>
        <p>{evento.descripcion2}</p>
      </div>
    </div>
  )
}

export default Sinopsis