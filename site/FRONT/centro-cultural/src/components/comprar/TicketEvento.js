import React, { useState } from 'react'
import "../../styles/eventos.css"
import codigoQR from '../../assets/qrTicket.png'
import codigoQrBig from '../../assets/qrTicketBig.png'
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'
import imgComprarEvento from '../../assets/atomo-escritorio.png'

const TicketEvento = () => {

  return (
    <div className='comprarContainer'>
        <div className='divTitleTicket'>
            <h2 className='titleComprar'>Tu Ticket</h2>
        </div>
        <div className='divQR'>
            <img className='codigoQR' src={codigoQR} alt='codigo QR'/>
        </div>

        <div className='divEvento'>
            <h2 className='titleEvento'>Eternidades</h2>
            <h3 className='subTitleEvento'>Té póstumo en hall de cine</h3>
            <h3 className='subTitleEventoDos'>Idea, dirección y puesta de Pablo Gorlero</h3>
        </div>

        <div className='cardTicketEvento'>
            <div className='divImgCardComprar'>
                <h3 className='infoImgCardComprarEvento infoImgCardticketEvento'>artes escénicas</h3>
                <img className='QRbig' src={codigoQrBig} alt='imagen card'/>
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


        <div className='divFormImporteDatosTicket'> 
            <div className='divFormImporte'>
                <form >
                    <div className='divFuncionesForm'>
                        <h2>Funciones</h2>
                        <h2 className='fechaHoraFuncionTicket'>Viernes 8 de Julio -20.30hs</h2>
                    </div>
                    <div className='divFuncionesFormDos'>
                        <h2>Cantidad de Entradas</h2>
                        <h2 className='cantEntradasTicket'>1</h2>
                    </div>
                </form>
                
                <div className='divImporteTicket'>
                    <h2>Importe</h2>
                    <h2>$800-Ars</h2>
                </div>
            </div>


            <div className='divDatosTicket formPersonal'>
                <h2 className='titleDivDatosTicket'>Tus Datos</h2>

                <div className='divDivDatosTicket'>  
                    <h2 className='titleDatosTicket'>Nombre</h2>
                    <h3>Leandro</h3>
                </div>
                <div className='divDivDatosTicket'>  
                    <h2 className='titleDatosTicket' >Apellido</h2>
                    <h3>Ibarra</h3>
                </div>
                <div className='divDivDatosTicket'>  
                    <h2 className='titleDatosTicket' >Correo Electrónico</h2>
                    <h3>leandroibarra@tucorreo</h3>
                </div>
                <div className='divDivDatosTicket'>  
                    <h2 className='titleDatosTicket' >DNI</h2>
                    <h3>1234567</h3>
                </div>
            </div>
        </div>

        <button type="submit" className="btnComprarEvento">Volver al Inicio</button>



    </div>
  )
}

export default TicketEvento