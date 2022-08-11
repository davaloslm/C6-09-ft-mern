import React from 'react'
import { Link } from "react-router-dom";
import NavBarsocials from './NavBarSocials'
import { FaBars, FaSistrix, FaAngleDown, FaUserCircle } from 'react-icons/fa';
import logo from './../../assets/atomo.svg'
import './../../styles/navBar.css'


const NavBar = () => {
  return (
    <>
    <NavBarsocials />
    <div className="subHeader">
      <Link className="logo-ref" to="/"><img src={logo} alt="logo" /></Link>
      <div className="title">
        <h3>Centro</h3>
        <h3>Cultural</h3>
        <h3>San Martin</h3>
      </div>
      
     
      <i className="burger-icon"><FaBars className="burger-icon"/></i>
      
        <ul className="container-header-desktop">
          <Link to="/institucional"><li>Institucional</li></Link>
          <li>Programación <span><FaAngleDown/></span>
            
          </li>
          <Link to="/cursosytalleres"><li>Cursos/Talleres</li></Link>
          <li>FAQ</li>
          <i><li><FaSistrix/></li></i>
          <i><li><FaUserCircle/></li></i>
        </ul>
      
    </div>
    
    </>
  )
}

export default NavBar