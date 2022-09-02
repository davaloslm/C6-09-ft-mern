import React, { useState } from "react";
import "./../styles/globals.css";
import addPhoto from "./../assets/addPhoto.png";
import "./../styles/Registro.css";

const Registro = () => {
  const [confirmarContraseña, setConfirmarContraseña] = useState('')

  
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    dni: ''

  })

  function handleChange(e) {
    e.preventDefault()
    setDatosUsuario({
      ...datosUsuario,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  function confirmarContra () {
    if(datosUsuario.contraseña.toString() !== confirmarContraseña) {
      console.log(typeof datosUsuario.contraseña.toString())
      console.log(typeof confirmarContraseña)
      alert('Las contraseñas tienen que coincidir')
      return false;
    } else {
      return true;
    }
  }
  const crearUsuario = (e) => {
    e.preventDefault();
    const confirmado = confirmarContra();
    //const dataCrearUsuario = new FormData()
    if(confirmado) {
      console.log(datosUsuario)
     fetch('http://localhost:2000/api/registrarse', {
      method: 'POST',
      body: JSON.stringify(
        datosUsuario
      ),
      headers: {
        'Content-type': 'application/json'
      }
     })
      .then(res => res.json())
      .then(stringy => console.log(JSON.stringify(datosUsuario)))
      .then(stringy => console.log(datosUsuario))
      .catch(error => error)
      

      alert('Usuario creado exitosamente')
     document.getElementById('formularioCreacionUsuario').reset();
    }
  };
  return (
    <section id="registro">
      <p className="title-cs">Crear Cuenta</p>
      <h3>Registrate como usuario</h3>
      <br />
      <p>
        Para inscribirte a un curso y/o comprar una entrada a un espectáculo es
        necesario contar con una cuenta en el sistema.
      </p>
      <br />
      <div className="section-flex">
        <img src={addPhoto} alt="logo-agregartuFoto" />
        <form className="registro-form" id='formularioCreacionUsuario' onSubmit={crearUsuario}>
          <p className="registro-datos">
            Nombre
            <input minlength="3" required name='nombre' onChange={(e) => handleChange(e)} placeholder="Tu nombre" type="text" />
          </p>
          <p className="registro-datos">
            Apellido
            <input
              minlength="3"
              required
              name='apellido' onChange={(e) => handleChange(e)} placeholder="Tu apellido"
              type="text"
            />
          </p>
          <p className="registro-datos">
            Correo electrónico
            <input required name='email' onChange={(e) => handleChange(e)} placeholder="Tu correo electrónico" type="email" />
          </p>
          <p className="registro-datos">
            Contraseña
            <input
              minlength="5"
              required
              name='contraseña' onChange={(e) => handleChange(e)} placeholder="Tu contraseña"
              type="password"
            />
          </p>
          <p className="registro-datos">
            Confirmar contraseña
            <input
              minlength="5"
              required
              name='confirmarContraseña' onChange={(e) => setConfirmarContraseña(e.target.value)} placeholder="Confirmá tu contraseña"
              type="password"
            />
          </p>
          <p className="registro-datos">
            DNI
            <input
              required
              name='dni' onChange={(e) => handleChange(e)} placeholder="Tu número de documento"
              type="number"
            />
          </p>
          <button type="submit">Creá tu cuenta</button>
        </form>
      </div>
    </section>
  );
};

export default Registro;
