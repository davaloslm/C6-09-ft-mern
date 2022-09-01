import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import HorariosMusicayVisuales from '../components/eventos/HorariosMusicayVisuales'
import Informacion from '../components/eventos/Informacion'
import Valor from '../components/eventos/Valor'
import '../styles/detalleMusicayArtesVisuales.css'
const { REACT_APP_URL_API} = process.env;

const DetalleMusica = () => {
  console.log(REACT_APP_URL_API)
const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
       await fetch(`${REACT_APP_URL_API}/api/evento/630e5e850fca7b1ab3620b2a`)};
    fetchData()
            .then(res => res.json())
            .then(info => setData(info))
            .catch(error => console.log(error))
  }, [data])
console.log(data)
console.log(process.env.REACT_APP_URL_API)

  return (
    <>
      <section className='event'>
        <div className='title-event'>
          <h1>Artes Visuales</h1>
        </div>
        <Card />
        <HorariosMusicayVisuales fecha= 'Jueves 11 de Agosto al 18 de Septiembre' hora='Jueves a Domingos 15 a 21hs' />

        <Valor 
          precio="300"
        />
      <br/>

        <button>
        Comprar entrada
        </button>
        <br/>
      <br/>
      <br/>


        <Informacion 
          data="Aunque la época de la epidemia ha dificultado
          nuestros viajes y oportunidades de establecer
          contactos, hemos descubierto, un poco
          irónicamente quizás, que éstas dificultades han
          ampliado nuestro intercambio de ideas,
          conceptos y arte realizado.Los preparativos para
          la 19ª exposición internacional de arte de AAmA
          en 2022 han avanzado con una fluidez sin
          precedentes. La exposición ha recibido el apoyo
          y la respuesta de artistas radicados en más de
          80 países,interés que ha fundamentado la
          selección de 120 artistas de 60 países para
          participar en esta exposición."
        />
         <br/>
      <br/>
      <br/>

      </section>
    </>
  )
}

export default DetalleMusica