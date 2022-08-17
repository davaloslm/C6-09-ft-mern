import React from 'react'
import Card from '../components/card/Card'
import "../styles/detalleEvento.css"

const Detail = () => {
    return (
        <>
        <section className='event'>
            <div className='title-event'>
                Evento
            </div>

            <Card/>

            <button>
                Comprar entrada
            </button>

            <button>
                Comprar entrada
            </button>

        </section>
        </>
        )   
}


export default Detail