import React from 'react'
import './footer.css'
import Logo from './../navBar/Logo'
import NavBarSocials from './../navBar/NavBarSocials'
import Mapa from './../home/Mapa'
import Formulario from './../formulario/Formulario'

const Footer = () => {
  return (
    <footer>
      <div className="container-tools-footer">
        <hr/>
        <Formulario />
        <hr/>
        <Mapa />
      </div>
      <div className="container-socials-footer"> 
        <Logo />
        <NavBarSocials />
      </div>
    </footer>
  )
}

export default Footer