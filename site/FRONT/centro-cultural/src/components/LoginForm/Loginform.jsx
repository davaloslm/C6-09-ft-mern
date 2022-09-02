import React, { useState } from "react";
import '../LoginForm/loginform.css';
import "../../styles/perfil.css";
import { Link, useNavigate } from "react-router-dom";



const Loginform = () => {
  const [data, setData] = useState({
    email: '',
    contraseña: ''
  });
  const navigate = useNavigate()

  function handleChange (e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const iniciarSesion = async(e) => {
    e.preventDefault();
    console.log(data)
    console.log('antes del fetch')
    
    await fetch('http://localhost:2000/api/iniciarSesion', {
      method: 'POST',
      body: JSON.stringify(
        data
      ),
      headers: {
        'Content-type': 'application/json'
      }
     })
      .then(res => res.json())
      .then(data => {
        if(data.mensaje){
          alert('El usuario no existe.')
        }
        const token = data.token;
        const datosUsuario = data.usuario;
        localStorage.setItem('token', token)
        localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('datosUsuario'))
        console.log(JSON.parse(localStorage.getItem('datosUsuario')))
        navigate('/cuenta')
      })
      .then(stringy => console.log(data))
      .catch(error => console.log(error))
    
      

    }
      /*
    if(data.email && data.contraseña){
      console.log(data)
      console.log('esta es la data')
      fetch('http://localhost:2000/api/iniciarSesion', {
       method: 'POST',
        body: JSON.stringify({
          email: data.email,
          contraseña: data.contraseña
        }
        
      ),
        headers: {
        'Content-type': 'application/json'
      }
      })
    
    }*/
 

    return (
        <>
        <div className="ContainerLogin">
        <h1>Ingresar</h1>
        <form className="CajaFORM" id='formularioLogin' onSubmit={iniciarSesion}>
            
        
            <label className="LoginLabel">Correo electronico</label><br />
            <input 
            className= "InputLogin"
            type="text" 
            name="email" 
            onChange={(e) => handleChange(e)}
            required
            placeholder="Tu correo electronico"/><br />
            <br />

            <label class="LoginLabel">Contraseña</label><br />
            <input 
            className= "InputLogin"
            type="password" 
            name="contraseña"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Tu contraseña"/><br />
            <br />
            
            <p>¿Olvidaste tu correo electrónico con el que te registraste 
            o tu contraseña? hace click aqui.</p> <br />

            <button>Ingresar</button>
            </form>
            </div>
            <br />
            <br />

            <div className="Register">
            <h1>Registrate como usuario</h1>
            <p>Para inscribirte a un curso y/o comprar una entrada a un espectáculo, es necesario contar con una cuenta en el sistema.
            </p>
            <br />

            <Link to='/registro'>
              <button>Crea tu cuenta</button>
              </Link>
            </div>

            

            
            

        
        </>
    )
}


export default Loginform