import React, {useState} from 'react'
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
        <li><div className ="puntosubmenu"></div>Artes Escénicas</li>
        <li><div className ="puntosubmenu"></div>Artes Visuales</li>
        <li><div className ="puntosubmenu"></div>Música</li>
        <li><div className ="puntosubmenu"></div>Talleres</li>
    </ul>
    </div>
  )
}

export default NavBarMobile