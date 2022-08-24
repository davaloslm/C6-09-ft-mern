import React from 'react'
import "./../../styles/globals.css";
import './../../styles/navBar.css'

const Mapa = () => {
  return (
    <section id="mapa">
        <h1>Encontranos en</h1> <br/>
        <p>Sarmiento 1551 - Ciudad Autónoma de Buenos Aires</p> <br/>
        <iframe title="CentroCulturalSanMartin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.9802487898155!2d-58.38792632066423!3d-34.60516038869586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac4091da5df%3A0x1384c082e8c83a12!2sCentro%20Cultural%20San%20Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1660112400927!5m2!1ses!2sar" width="300" height="300" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Mapa