import React, { useState } from 'react';
import './formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  const formularioEnviado = (e) => {
    e.preventDefault();
    console.log(`${nombre} ${apellido} ${email}`)
    window.alert("Tus datos han sido enviados")
  
  }
  
  return (
    <>
      <div className="formulario">
        <form onSubmit={formularioEnviado}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            className="formulario-input"
            required
          />
          <label
            htmlFor="nombre" 
            className="formulario-label"
            >Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={nombre}
            placeholder="Tu nombre"
            onChange={(e) => setNombre(e.target.value)}
            className="formulario-input"
            required
          />
          <label htmlFor="apellido">Apellido:</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido" 
            value={apellido}
            placeholder="Tu apellido" 
            onChange={(e) => setApellido(e.target.value)}
            className="formulario-input"
            required
          />
          <input 
            type="submit" 
            value="Enviar" 
            className="formulario-boton"
             />
        </form>    
      </div>
    </>
  )
}

export default Formulario