import React, { useRef, useState } from "react";
import '../card/card.css'

import './sliderHome.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Autoplay,  Navigation } from "swiper";


export default function App() {
  return (
    <div className="swiperContainer">
      <Swiper navigation={true} 
              modules={[ Autoplay, Navigation]}         
              autoplay={{ delay: 5500,
                          disableOnInteraction: false}}
              className="mySwiper"
      >
        <SwiperSlide>
          <div className='cardContainer '>
            <div className='card'>
                <div className='divImgCard imgSliderUno'>
                    <h3 className='infoImgCard'>artes escénicas</h3>
                </div>

                <div className='divInfoCard'>   
                    <h2 className='titleCard'>Eternidades</h2>                
                    <h4 className='subTitleCard'>Té póstumo en hall de cine </h4>

                    <div className="divInfoCardDos">
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
        </SwiperSlide>

        <SwiperSlide>
        <div className='cardContainer'>
            <div className='card'>
                <div className='divImgCard imgSliderDos'>
                    <h3 className='infoImgCard'>artes visuales</h3>
                </div>
                <div className='divInfoCard'>   
                    <h2 className='titleCard'>AAmA 19th</h2>
                    <div className="divInfoCardDos cardInfo2">
                       <h4 className='infoCard'>Asian - African - Mediterranean - European and <br/>
                      Americas International Art Exhibition</h4>
                      
                    </div>

                    <div className='divBrandsCard'>
                      <img src={brandBlancoCard} alt='brand-blanco'/>
                      <img src={bsAsCard} alt='brand-bs-as'/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className='cardContainer'>
            <div className='card'>
                <div className='divImgCard imgSliderTres'>
                    <h3 className='infoImgCard'>música</h3>
                </div>

                <div className='divInfoCard'>   
                    <h2 className='titleCard'>Dan Hakim Grupo</h2>

                    <div className="divInfoCardDos cardInfo3">
                      <h4 className='infoCard'>Ciclo íntimo en El Cultural</h4>
                    </div>

                    <div className='divBrandsCard'>
                      <img src={brandBlancoCard} alt='brand-blanco'/>
                      <img src={bsAsCard} alt='brand-bs-as'/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='cardContainer'>
            <div className='card'>
                <div className='divImgCard imgSliderCuatro'>
                    <h3 className='infoImgCard'>cine</h3>
                </div>
                <div className='divInfoCard'>   
                    <h2 className='titleCard'>Fantasma vuelve al pueblo</h2>
                    <div className="divInfoCardDos cardInfo4">
                      <h4 className='infoCard'>de Augusto González Polo</h4>             
                    </div>

                    <div className='divBrandsCard'>
                      <img src={brandBlancoCard} alt='brand-blanco'/>
                      <img src={bsAsCard} alt='brand-bs-as'/>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
