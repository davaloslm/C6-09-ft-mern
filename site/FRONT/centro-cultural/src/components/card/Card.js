import React, { useEffect, useState } from 'react'
import './card.css'
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'
import imgCardArtesEscenicas from '../../assets/img/eternidades.png'

const Card = () => {
  const [data, setData] = useState({})
  console.log('ingresando al useefect')


  useEffect(() => {
    console.log('ingresando al useefect')
    const data = async()=> {
      await fetch('http://localhost:2000/api/categorias')
    }
    data()
    .then(res => console.log(res) )
    .catch(error => console.log(error))

    setData(data)

  }, [])
  console.log(data)
  return (
    <div className='cardContainer'>
      <div className='card'>
          <div className='divImgCard imgCard'>
              <img src={imgCardArtesEscenicas} alt='imagen card'/>
              <h3 className='infoImgCard'>artes escénicas</h3>
          </div>
          <div className='divInfoCard'>   
              <h2 className='titleCard'>Eternidades</h2>
              <h4 className='subTitleCard'>Té póstumo en hall de cine </h4>

              <div className="infoCardDetail">
                <h4 className='infoCard'>Idea, dirección y puesta de Pablo Gorlero </h4>
                <h4 className='infoCardDos'>Autor libro y letra de Luis Longhi</h4>
                <h4 className='infoCardTres'>Música original y Dirección musical de Juan Ignacio López</h4>               
              </div>

              <div className='divBrandsCard'>
                <img src={brandBlancoCard} alt='brand-blanco'/>
                <img src={bsAsCard} alt='brand-bs-as'/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card