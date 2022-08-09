import React from 'react'
import NavBarsocials from './NavBarSocials'
import { FaBars } from 'react-icons/fa';
import logo from './../../assets/atomo.svg'
import './../../styles/navBar.css'


const NavBar = () => {
  return (
    <>
    <NavBarsocials />
    <div className="subHeader">
      <img src={logo} alt="logo" />
      <div className="title">
        <h3>Centro</h3>
        <h3>Cultural</h3>
        <h3>San Martin</h3>
      </div>
      <i><FaBars/></i>
      
    </div>
    
    </>
  )
}

export default NavBar