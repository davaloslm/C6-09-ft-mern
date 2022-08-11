import React from 'react'
import './gridCard.css'
import imgArtesEscenicas from "../../assets/img/artesEscenicas.png"
import imgArtesVisuales from "../../assets/img/artesVisuales.png"
import imgMusica from "../../assets/img/musica.png"
import imgCine from "../../assets/img/cine.png"

const GridCard = () => {

  return (
    <>
        <h2 className='subtitle'>Programacion</h2>

        <div className='gridProgracion'>
            <div className='cardGridUno'>
                <img src={imgArtesEscenicas} alt=''/>

                <h3>Artes Escenicas</h3>                
            </div>

            <div className='cardGridDos'>
                <img src={imgArtesVisuales} alt=''/>

                <h3>Artes Visuales</h3>    
            </div>

            <div className='cardGridUno'>
                <img src={imgMusica} alt=''/>

                <h3>Música</h3>                
            </div>

            <div className='cardGridDos'>
                <img src={imgCine} alt=''/>

                <h3>Cine</h3>                
            </div>
        </div>

    </>
  )
}

export default GridCard