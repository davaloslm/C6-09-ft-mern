import React from 'react'
import './card.css'


const Card = () => {
  return (
    <div className='card'>
        <div className='divImgCard'>
            <h3 className='infoImgCard'>artes escénicas</h3>
        </div>
        <div className='divInfoCard'>   
            <h2 className='titleCard'>Eternidades</h2>
            <h4 className='subTitleCard'>Té póstumo en hall de cine </h4>
            <h4 className='infoCard'>Idea, dirección y puesta de Pablo Gorlero </h4>
        </div>
    </div>
  )
}

export default Card