import React from "react";
import '../LoginForm/loginform.css';
import "../../styles/perfil.css";



const Loginform = () => {
    return (
        <>
        <div className="ContainerLogin">
        <h1>Ingresar</h1>
        <form className="CajaFORM">
            
        
            <label className="LoginLabel">Correo electronico</label><br />
            <input 
            className= "InputLogin"
            type="text" 
            name="usermail" 
            placeholder="Tu correo electronico"/><br />
            <br />

            <label class="LoginLabel">Contraseña</label><br />
            <input 
            className= "InputLogin"
            type="password" 
            name="password" 
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


            <button>Crea tu cuenta</button>
            </div>

            

            
            

        
        </>
    )
}


export default Loginform