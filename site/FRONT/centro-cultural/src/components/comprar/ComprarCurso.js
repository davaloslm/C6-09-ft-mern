import React, { useState } from 'react'
import "../../styles/eventos.css"
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'

const ComprarCurso = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

  return (

    <div className='comprarContainer'>
        <div className='divTitleComprar divTitleComprarCurso'>
            <h2 className='titleComprar'>Comprar</h2>
        </div>
        <div className='divCurso divComprarCurso'>
            <div className='divComprarCursoSmall'>
                <div className='divTextosComprar'>
                    <h2 className='titleCurso'>Imagen, Diseño y Creatividad en el Vestuario</h2>
                    <h3 className='subTitleCurso'>Artes Escénicas</h3>
                    <h4 className='coordinaComprarCurso'>Coordina: Alejandro Soto</h4>
                </div>

                <div className='divBrandsCard divBrandsCardComprarCurso '>
                    <img src={brandBlancoCard} alt='brand-blanco'/>
                    <img src={bsAsCard} alt='brand-bs-as'/>
                </div>
            </div>
        </div> 

        <div className='divInfoCurso'>
            <div className='divInfo'>
                <h2>Dias</h2>
                <h3>9, 16, 23 y 30 de Agosto</h3>
            </div>
            <div className='divInfo'>
                <h2>Horarios</h2>
                <h3>19 a 21 hs</h3>
            </div>
            <div className='divInfo'>
                <h2>Arancel</h2>
                <h3>$3500(pago único)</h3>
            </div>
            <div className='divInfo'>
                <h2>Coordina</h2>
                <h3>Alejandro Soto</h3>
            </div>
        </div>
        
        <div className='divImporte'>
            <h2>Importe</h2>
            <h2>$3500-Ars</h2>
        </div>


        <div className='divFormulariosComprarCurso'>
            <form className="formPersonal" onSubmit={enviarDatos}>
                <h2>Tus Datos</h2>
                    <label>Nombre   
                        <input type="text" placeholder="Nombre" className="inputPersonal" onChange={handleInputChange} name="nombre"></input>
                    </label>

                    <label>Apellido
                        <input type="text" placeholder="Apellido" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>

                    <label>Correo Electronico
                        <input type="text" placeholder="Correo Electronico" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>            

                    <label> DNI
                        <input type="num" placeholder="Dni" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>
            </form>


            <form className="formPagoTarjeta" onSubmit={enviarDatos}>

                <h2>Datos de Pago</h2>
                    <label>Número de la Tarjeta   
                        <input type="text" placeholder="ingresa los 16 dígitos de la tarjeta" className="inputPago" onChange={handleInputChange} name="nombre"></input>
                    </label>

                    <label>Fecha de Vencimiento
                        <input type="text" placeholder="mm/aa" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                    </label>

                    <label>Código de Seguridad
                        <input type="text" placeholder="xxx" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                    </label>            

                    <label> Nombre y Apellido
                        <input type="num" placeholder="Nombre y Apellido como figura en la tarjeta" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                    </label>

            </form>
            
        </div>

        <button type="submit" className="btnComprarCurso">Comprar</button>

    </div>
  )
}

export default ComprarCurso