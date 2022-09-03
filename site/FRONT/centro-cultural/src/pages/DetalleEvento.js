import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Sinopsis from "../components/eventos/Sinopsis"
import FichaTecnicaEscenicas from "../components/eventos/FichaTecnicaEscenicas"
import FichaTecnicaCine from "../components/eventos/FichaTecnicaCine"
import Valor from "../components/eventos/Valor"
import "../styles/detalleEvento.css"
import HorariosEscenicasCine from '../components/eventos/HorariosEscenicasCine'
import { Link, useParams } from 'react-router-dom'
import HorariosMusicayVisuales from '../components/eventos/HorariosMusicayVisuales'
//import CardDos from '../components/card/CardDos'

const DetalleEvento = () => {
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

            <Card
                descripcionCard= {data.evento ? data.evento.descripcionCard : null}
            />

            <div className='event-container'>
            <div className='event-grid-container'>
                <div className='event-grid-1'>
                {data.evento && (data.evento.categoria.nombre === "Música" || data.evento.categoria.nombre === "Artes Visuales") ?
                    <HorariosMusicayVisuales
                        fecha= {data.evento ? data.evento.fecha : null}
                        horarios= {data.evento ? data.evento.horarios : null}

                    />
                :null}
                
                {data.evento && (data.evento.categoria.nombre === "Artes Escénicas" || data.evento.categoria.nombre === "Cine") ?
                    <HorariosEscenicasCine
                        funciones= {data.evento ? data.evento.funciones : null}
                    />
                :null}

                    <Valor
                        precio= {data.evento ? data.evento.precio : null}    
                    />

                    <Link to={(`/comprar-evento/${data.evento._id}`)}>
                    <button>
                        Comprar entrada
                    </button>
                    </Link>
                </div>

                <div className='event-grid-2'>
                <Sinopsis
                    descripcion= {data.evento ? data.evento.descripcion : null}
                />
                </div>


                <div className='event-grid-3'>
                    {console.log(data.evento.categoria.nombre)}
                
                {data.evento.categoria.nombre === "Artes Escénicas" ?
                
                <FichaTecnicaEscenicas
                    autor=  {data.evento ? data.evento.autor : null}
                    musica=  {data.evento ? data.evento.musica : null}
                    idea=  {data.evento ? data.evento.idea : null}
                    produccion=  {data.evento ? data.evento.produccion : null}
                    elenco=  {data.evento ? data.evento.elenco : null}
                    reemplazo=  {data.evento ? data.evento.reemplazo : null}

                />
                :null}

                {data.evento.categoria.nombre === "Cine" ?
                <FichaTecnicaCine
                    genero=  {data.evento ? data.evento.genero : null}
                    direccion=  {data.evento ? data.evento.direccion : null}
                    origen=  {data.evento ? data.evento.origen : null}
                    anio=  {data.evento ? data.evento.anio : null}
                    duracion=  {data.evento ? data.evento.duracion : null}
                />
                :null}

                </div>
            </div>
            </div>

            <Link to={(`/comprar-evento/${data.evento._id}`)}>
            <button className='bottom-button'>
                Comprar entrada
            </button>
            </Link>

        </section>
        </>
        )   
}


export default DetalleEvento