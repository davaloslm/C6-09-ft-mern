import React, { useState } from 'react'
import "../../styles/eventos.css"
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'
import imgComprarEvento from '../../assets/atomo-escritorio.png'

const ComprarEvento = () => {
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
      <>
        <div className='divTitleComprar'>
            <h2 className='titleComprar'>Comprar</h2>
        </div>
      
        <div className='comprarContainer'>

            <div className='divEvento'>
                <h2 className='titleEvento'>Eternidades</h2>
                <h3 className='subTitleEvento'>Té póstumo en hall de cine</h3>
                <h3 className='subTitleEventoDos'>Idea, dirección y puesta de Pablo Gorlero</h3>
            </div>

            <div className='cardComprarEvento'>
                <div className='divImgCardComprar'>
                    <h3 className='infoImgCardComprarEvento'>artes escénicas</h3>
                    <img src={imgComprarEvento} alt='imagen card'/>
                </div>

                <div className='divInfoCard'>   
                    <h2 className='titleCard'>Eternidades</h2>                
                    <h4 className='subTitleCard'>Té póstumo en hall de cine </h4>

                    <div className="divInfoCardDos">
                        <h4 className='infoCard'>Idea, dirección y puesta de Pablo Gorlero </h4>
                        <h4 className='infoCardDos comprarEventoInfoDos'>Autor libro y letra de Luis Longhi</h4>
                        <h4 className='infoCardTres comprarEventoInfoDos'>Música original y Dirección musical de Juan Ignacio López</h4>               
                    </div>

                    <div className='divBrandsCard'>
                        <img src={brandBlancoCard} alt='brand-blanco'/>
                        <img src={bsAsCard} alt='brand-bs-as'/>
                    </div>

                </div>
                
            </div>

            <form >
                <div className='divFuncionesForm'>
                    <h2>Funciones</h2>
                    <label>
                        <select value="" className='selectFuncionesForm'>
                            <option className='optionSelect'>Selecione la función</option>
                            <option>opcion1 </option>
                            <option>opcion2 </option>
                        </select>
                    </label>
                </div>
                <div className='divFuncionesFormDos'>
                    <h2>Cantidad de Entradas</h2>
                    <label>
                        <select value="" className='selectFuncionesForm'>
                            <option className='optionSelect'>Selecione la Cantidad de Entradas</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label>
                </div>
            </form>
            
            <div className='divImporte'>
                <h2>Importe</h2>
                <h2>$0-Ars</h2>
            </div>


            <div className='divFormulariosComprar'>
                <form className="formPersonal" onSubmit={enviarDatos}>
                    <h2>Tus Datos</h2>

                    <label>Nombre   
                        <input type="text" placeholder="Nombre" className="inputPersonal" onChange={handleInputChange} name="nombre"></input>
                    </label>

                    <label>Apellido
                        <input type="text" placeholder="Apellido" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>

                    <label>Correo Electronico
                        <input type="mail" placeholder="Correo Electronico" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>            

                    <label> DNI
                        <input type="num" placeholder="Dni" className="inputPersonal" onChange={handleInputChange} name="apellido"></input>
                    </label>
                </form>


                <form className="formPagoTarjeta" onSubmit={enviarDatos}>
                    <h2>Datos de Pago</h2>
                        <label>Número de la Tarjeta   
                            <input type="number" placeholder="ingresa los 16 dígitos de la tarjeta" className="inputPago" onChange={handleInputChange} name="nombre"></input>
                        </label>

                        <label>Fecha de Vencimiento
                            <input type="text" placeholder="mm/aa" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                        </label>

                        <label>Código de Seguridad
                            <input type="number" placeholder="xxx" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                        </label>            

                        <label> Nombre y Apellido
                            <input type="num" placeholder="Nombre y Apellido como figura en la tarjeta" className="inputPago" onChange={handleInputChange} name="apellido"></input>
                        </label>
                </form>                   
            </div>

            <button type="submit" className="btnComprarEvento">Comprar entrada</button>

        </div>
    </>    
  )
}

export default ComprarEvento