import React, {useState} from 'react'
import { Link } from "react-router-dom";
import NavBarsocials from './NavBarSocials'
import { FaBars, FaSistrix, FaUserCircle } from 'react-icons/fa';
import logo from './../../assets/atomo.svg'
import lupa from './../../assets/lupa.png'
import perfil from './../../assets/ellipse.png'
import MenuProgramacion from "./NavBarMobile"
import './../../styles/navBar.css'
import Logo from './Logo'


const NavBar = () => {
  const [active, setActive] = useState("nav__menu")
  const [icon, setIcon] = useState("nav__toggler");


  const navToggle = () => {
    if(active === "nav__menu"){
      setActive("nav__menu nav__active")
    }else{
      setActive("nav__menu")
    }
    if(icon === "nav__toggler"){
      setIcon("nav__toggler toggle")
    } else {
      setIcon("nav__toggler")
    }
  }
  return (
    <>
    <NavBarsocials/>
    <div className='nav'>
      
        <div className='navHeader'>
          <Link to="/" className="a-header"><Logo /></Link>
          <div className ="menu-desktop">
          <Link to="/institucional" className="links-nav"><li>Institucional</li></Link>
                  <li><MenuProgramacion/> </li>
                  <Link to="/cursosytalleres" className="links-nav"><li>Cursos y talleres</li></Link>
                  <Link to="/preguntas-frecuentes" className="links-nav"><li>Preguntas Frecuentes</li></Link>
                  <li className="icon-nav"> <i className="icon-nav"> <FaSistrix/></i></li>
                  <Link to="/perfil" className="links-nav"><li className="icon-nav"><i className="icon-nav"><FaUserCircle/></i></li></Link>
                  
          </div>

          <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
        </div>

        <div className='menuOpen'>
            <ul className={active}>
                <Link to="/perfil" className="links-nav"><div className='divPerfilMenu'>
                <img src={perfil} alt='photoUser'/>
                    <h4>Ingresá a tu perfil</h4>
                </div></Link>
                
                <Link to="/institucional" className="links-nav"><li>Institucional</li></Link>
                  <hr/>
                  <li><MenuProgramacion/> </li>
                  <hr/>
                  <Link to="/cursosytalleres" className="links-nav"><li>Cursos y talleres</li></Link>
                  <hr/>
                  <Link to="/preguntas-frecuentes" className="links-nav"><li>Preguntas Frecuentes</li></Link>
                  <hr/>
                
                

                <div className='divBuscarMenu'>
                    <input placeholder='Buscar...' />
                    {/* <button> */}
                      <FaSistrix className="icon-header-mobile"/>
                    {/* <img src={lupa} alt="buscar"/> */}
                    {/* </button> */}
                </div>
                <hr/>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default NavBar