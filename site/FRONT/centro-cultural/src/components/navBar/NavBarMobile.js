import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {FaAngleDown} from 'react-icons/fa';
import './../../styles/navBarMobile.css'

const NavBarMobile = () => {
    const [isActiveAccordion, setIsActiveAccordion] = useState(false);
    const handleClick = () => {
        setIsActiveAccordion(prevState => !prevState)
    }
  return (
    <div className = {`accordion ${isActiveAccordion ? "open" : ""}`}>
        <div className="menu-desplegable" onClick ={handleClick}>
            <h5>Programación</h5>
            <div className ="arrow-down">
                <i><FaAngleDown/></i> 
            </div>
        </div>
    <ul className="ulMenuProgramacion">
        <Link to="/artes-escenicas" className="links-nav"><div className="container-li-programacion"><li><div className ="puntosubmenu"></div>Artes Escénicas</li></div></Link>
        <Link to="/artes-visuales" className="links-nav"><li><div className ="puntosubmenu"></div>Artes Visuales</li></Link>
        <Link to="/musica" className="links-nav"><li><div className ="puntosubmenu"></div>Música</li></Link>
        <Link to="/cine" className="links-nav"><li><div className ="puntosubmenu"></div>Cine</li></Link>
    </ul>
    </div>
  )
}

export default NavBarMobile