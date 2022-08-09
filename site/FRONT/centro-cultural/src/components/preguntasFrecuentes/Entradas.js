import React from 'react';

const Entradas = () => {
    return (
        <div className='faq-container'>
            <span className='faq'>
                ¿Cómo puedo Comprar una Entrada?
            </span>
            <p>
            Primero deberás registrarte con un perfíl de usuario.
            <br/>
            Luego, tendrás que elegir el evento al cual quieras asistir y efectuar el pago del mismo.
            <br/>  
            Te llegará un correo con un código QR, o mismo podrás verlo en tu perfil en la sección Mis Entradas. Ese código deberás presentarlo el día del evento.
            </p>
        </div>
    );
};

export default Entradas;