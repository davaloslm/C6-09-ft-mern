import React, { useState, useEffect } from "react";
import {  FaSistrix } from 'react-icons/fa';

const Buscador = () => {
  const [palabraBuscada, setPalabraBuscada] = useState('');
  const [inputEstado, setInputEstado] = useState(false)

    function abrirInput(e) {
      setInputEstado(true)
    }

   
    function enviarBusqueda(e) {
      e.preventDefault()

    }

  return (
    <div className="divBuscarMenu">
      <form onSubmit={enviarBusqueda}>
        <input onChange={(e) =>setPalabraBuscada(e.target.value)} placeholder="Buscar..." />
        {/* <button> */}
        <FaSistrix onClick={(e) => abrirInput(e)} className="icon-header-mobile" />
        {/* <img src={lupa} alt="buscar"/> */}
        {/* </button> */}
    </form>
    </div>

  );
};

export default Buscador;
