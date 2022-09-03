import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Sinopsis from "../components/eventos/Sinopsis"
import FichaTecnica from "../components/eventos/FichaTecnica"
import Valor from "../components/eventos/Valor"
import "../styles/detalleEvento.css"
import HorariosEscenicasCine from '../components/eventos/HorariosEscenicasCine'
import { useParams } from 'react-router-dom'
//import CardDos from '../components/card/CardDos'

const Detail = () => {
    const [data, setData] = useState({});
    const [cargandoData, setCargandoData] = useState(true);
    const params = useParams();

    useEffect(() => {
        setCargandoData(true);
        fetch(`http://localhost:2000/api/evento/${params.idEvento}`)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((error) => error)
          .finally(() => setCargandoData(false));
      }, []);

    return cargandoData ? (
        <p>La informacion esta cargando</p>
      ) : (
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
                        funciones= {data.evento ? data.evento.funciones : null}
                    />

                    <Valor
                        precio= {data.evento ? data.evento.precio : null}    
                    />

                    <button>
                        Comprar entrada
                    </button>
                </div>

                <div className='event-grid-2'>
                <Sinopsis
                    descripcion= {data.evento ? data.evento.descripcion : null}
                />
                </div>


                <div className='event-grid-3'>
                <FichaTecnica/>
                </div>
            </div>
            </div>


            <button className='bottom-button'>
                Comprar entrada
            </button>

        </section>
        </>
        )   
}


export default Detail