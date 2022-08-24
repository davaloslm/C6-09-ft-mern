import React from 'react'
import '../styles/homecursosTalleres.css'
import "swiper/css/bundle";
import GridCard from '../components/gridCard/GridCard'
import SliderHome from '../components/slider/SliderHome'

const Home = () => {
  return (
    <>
    <SliderHome/>
    <GridCard/>
    
    <section id="Cursostalleres">

    <h2 className="title">Cursos y Talleres</h2><br />
    <p>El Cultural San Martín ofrece talleres y seminarios presenciales durante los meses de mayo, junio, julio y agosto. Hay cursos de 12 clases de 6 encuentros.<br />
    <br />

    Todos se llevan a cabo en alguna de las salas del CSM, ubicado en Sarmiento 1551 - CABA. 
    <br />
    <br />

    ¡Te esperamos!</p>
    <br />
    
    
    

    <h2 className="Subtitle artes">Artes Escenicas</h2>
  
    </section>
    </>

  )}

export default Home