import React from "react";
import '../LoginForm/loginform.css';

const Loginform = () => {
    return (
        <>
        <form>
            <label>Correo electronico</label><br />
            <input 
            type="text" 
            name="usermail" 
            placeholder="Tu correo electronico"/><br />
            <br />

            <label>Contraseña</label><br />
            <input 
            type="password" 
            name="password" 
            placeholder="Tu contraseña"/><br />
            <br />
            
            <p>¿Olvidaste tu correo electrónico con el que te registraste 
            o tu contraseña? hace click aqui.</p> <br />

            <button>Ingresar</button>
            <br />
            <br />

            <h2>Registrate como usuario</h2><br />
            <p>Para inscribirte a un curso y/o comprar una entrada a un espectáculo, es necesario contar con una cuenta en el sistema.
            </p>
            <br />


            <button>Crea tu cuenta</button>
            

        </form>
        </>
    )
}


export default Loginform