import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import {FaAngleDown} from 'react-icons/fa';
import './../../styles/navBarMobile.css'

const NavBarMobile = () => {
  const [data, setData] = useState({});
    const [isActiveAccordion, setIsActiveAccordion] = useState(false);
    const handleClick = () => {
        setIsActiveAccordion(prevState => !prevState)
    }
    useEffect(() => {
      console.log("ingresando al useefect");
      /*const data = async()=> {
      await fetch('http://localhost:2000/api/categorias')
    }*/
      fetch("http://localhost:2000/api/categorias")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log("Hubo un prolema al llamar a la api"));
    }, []);
  console.log(data)
  return (
    <div className = {`accordion ${isActiveAccordion ? "open" : ""}`}>
    <div className="menu-desplegable"  onClick ={handleClick}>
            <h5>Programación</h5>
            <div className ="arrow-down">
                <i><FaAngleDown/></i> 
            </div>
        </div>
    <ul className="ulMenuProgramacion">
        <Link to={(`/eventos/${data.categorias ? data.categorias[0]._id : null}`)} className="links-nav"><div className="container-li-programacion"><li><div className ="puntosubmenu"></div>Artes Escénicas</li></div></Link>
        <Link to={(`/eventos/${data.categorias ? data.categorias[1]._id : null}`)} className="links-nav"><li><div className ="puntosubmenu"></div>Artes Visuales</li></Link>
        <Link to={(`/eventos/${data.categorias ? data.categorias[3]._id : null}`)} className="links-nav"><li><div className ="puntosubmenu"></div>Música</li></Link>
        <Link to={(`/eventos/${data.categorias ? data.categorias[2]._id : null}`)} className="links-nav"><li><div className ="puntosubmenu"></div>Cine</li></Link>
    </ul>
    </div>
  )
}

export default NavBarMobile