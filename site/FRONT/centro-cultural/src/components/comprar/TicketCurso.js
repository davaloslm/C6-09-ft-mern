import React, { useState } from 'react'
import "../../styles/eventos.css"
import codigoQR from '../../assets/qrTicket.png'
import brandBlancoCard from '../../assets/centroCard.png'
import bsAsCard from '../../assets/bsAsCard.png'

const TicketCurso = () => {

    

    const volverAlInicio = (event) => {
        event.preventDefault()
        console.log('llevame al inicio')
    }
  return (
<div className='comprarContainer'>
        <div className='divTitleTicket'>
            <h2 className='titleComprar'>Tu Ticket</h2>
        </div>
        <div className='divQR'>
            <img className='codigoQR' src={codigoQR} alt='codigo QR'/>
        </div>

        <div className='divCurso divCursoTicket'>
            <h2 className='titleCurso'>Imagen, Diseño y Creatividad en el Vestuario</h2>
            <h3 className='subTitleCurso'>Artes Escénicas</h3>
        </div>

        <div className='divCursoTicketBig'> 

            <div className='divQRBigTicketCurso'>
                <img className='codigoQRigTicketCurso' src={codigoQR} alt='codigo QR'/>
            </div>

            <div className='divComprarCursoSmall divCursoTicketSmall'>
                <div className='divTextosComprar'>
                    <h2 className='titleCurso'>Imagen, Diseño y Creatividad en el Vestuario</h2>
                    <h3 className='subTitleCurso'>Artes Escénicas</h3>
                    <h4 className='coordinaComprarCurso'>Coordina: Alejandro Soto</h4>
                </div>

                <div className='divBrandsCard divBrandsCardTicket '>
                    <img src={brandBlancoCard} alt='brand-blanco'/>
                    <img src={bsAsCard} alt='brand-bs-as'/>
                </div>
            </div>
        </div> 


        <div className='divInfoCurso'>
            <div className='divInfo'>
                <h2>Dias</h2>
                <h3>Viernes</h3>
            </div>
            <div className='divInfo'>
                <h2>Horarios</h2>
                <h3>19 a 21 hs</h3>
            </div>
            <div className='divInfo'>
                <h2>Arancel</h2>
                <h3>$3500 (pago único)</h3>
            </div>
            <div className='divInfo'>
                <h2>Coordina</h2>
                <h3>Alejandro Soto</h3>
            </div>
        </div>

        <div className='divImporteDatosTicket'>
            <div className='divImporte divImporteTicket'>
                <h2>Importe</h2>
                <h2>$3500-Ars</h2>
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


        <button onClick={volverAlInicio} className="btnComprarEvento">Volver al Inicio</button>



    </div>
  )
}

export default TicketCurso