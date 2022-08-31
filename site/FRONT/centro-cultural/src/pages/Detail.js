import React from 'react'
import Card from '../components/card/Card'
import Sinopsis from "../components/eventos/Sinopsis"
import FichaTecnica from "../components/eventos/FichaTecnica"
import Valor from "../components/eventos/Valor"
import "../styles/detalleEvento.css"
import HorariosEscenicasCine from '../components/eventos/HorariosEscenicasCine'

const Detail = () => {
    return (
        <>
        <section className='event'>
            <div className='title-event'>
                Evento
            </div>

            <Card/>

            <div className='event-container'>
            <div className='event-grid-container'>
                <div className='event-grid-1'>
                    <HorariosEscenicasCine
                        fechaDeInicio = "Viernes 8 de Julio"
                        fechaDeFinalizacion = "Domingo 21 de Agosto"
                    />

                    <Valor
                        precio = "800"
                    />

                    <button>
                        Comprar entrada
                    </button>
                </div>

                <div className='event-grid-2'>
                <Sinopsis/>
                </div>


                <div className='event-grid-3'>
                <FichaTecnica/>
                </div>
            </div>
            </div>


            <button>
                Comprar entrada
            </button>

        </section>
        </>
        )   
}


export default Detail