import React from 'react'
import './../styles/globals.css'
import addPhoto from './../assets/addPhoto.png'
import './../styles/Registro.css'

const Registro = () => {
  return (
    <section id="registro">
    <p className="title-cs">Crear Cuenta</p>
    <h3>Registrate como usuario</h3>
    <br/>
    <p>Para inscribirte a un curso y/o comprar una entrada a un espectáculo es necesario contar con una cuenta en el sistema.</p>
    <br/>
    <div className="section-flex">
    <img src={addPhoto} alt="logo-agregartuFoto"/>
    <form className="registro-form">
    <p className="registro-datos">Nombre<input minlength="3" required placeholder="Tu nombre" type="text" /></p>
    <p className="registro-datos">Apellido<input minlength="3" required placeholder="Tu apellido" type="text" /></p>
    <p className="registro-datos">Correo electrónico<input required placeholder="Tu correo electrónico" type="email" /></p>
    <p className="registro-datos">Contraseña<input minlength="5" required placeholder="Tu contraseña" type="password" /></p>
    <p className="registro-datos">Confirmar contraseña<input minlength="5" required placeholder="Confirmá tu contraseña" type="password" /></p>
    <p className="registro-datos">DNI<input required placeholder="Tu número de documento" type="number" /></p>
    <button type="submit">Creá tu cuenta</button>
   
    </form>
    </div>
    </section>
  )
}

export default Registro