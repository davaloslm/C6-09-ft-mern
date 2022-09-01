import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalMessage, setOpenModalMessage] = useState(false);
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (nombre === "" || apellido === "" || email === "") {
      setOpenModalMessage(!openModalMessage);
    } else {
      setOpenModal(!openModal);
    }
  };

  const confirmarSuscripcion = async() => {
    console.log(nombre, apellido, email)

   await fetch(`http://localhost:2000/api/suscribirse`, {
      method: "POST",
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => console.log(res))
      //res.json())
    .catch(err=> console.log(err)) 
    console.log(nombre, apellido, email)
    console.log('Se guardo el email en la base de datos')
    console.log(process.env.REACT_APP_URL_API)
  }
  return (
    <section id="Formulario">
      <h1>Estemos en contacto</h1> <br/>
      <p>Dejanos tu correo electrónico  para enterarte de la programación del Centro Cultural San Martín.</p> <br/>
      <div className="formulario">
        <form onSubmit={enviarFormulario}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            className="formulario-input"
          />
          <label htmlFor="nombre" className="formulario-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            placeholder="Tu nombre"
            onChange={(e) => setNombre(e.target.value)}
            className="formulario-input"
          />
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            placeholder="Tu apellido"
            onChange={(e) => setApellido(e.target.value)}
            className="formulario-input"
          />
          <input
            id="open"
            type="submit"
            value="Enviar"
            className="formulario-boton"
          />
        </form>
        {openModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <h2>¿Desea confirmar su suscripción?</h2>
                <div className="buttons">
                <input
                  type="button"
                  name="si"
                  value="Si"
                  onClick={() => {
                    setOpenModal(!openModal);
                    confirmarSuscripcion();
                    setOpenModalConfirmation(!openModalConfirmation)}
                    
                  }
                  className="button-si"
                />
                <input
                  type="button"
                  name="no"
                  value="No"
                  id="close"
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                  className="button-no"
                />
                </div>
          </Modal>
        )}
        {openModalMessage && (
          <Modal
            openModal={openModalMessage}
            setOpenModal={setOpenModalMessage}
          >
                <h2>Por favor, complete todos los datos</h2>
                <p>
                  Algunos datos están incompletos. Por favor, revíselo y luego toque el botón "Enviar".
                </p>
          </Modal>
        )}
        {openModalConfirmation && (
          <Modal
            openModal={openModalConfirmation}
            setOpenModal={setOpenModalConfirmation}
          >
                <h2>Suscripción Confirmada</h2>
                <p>
                  Recibirás en tu correo las novedades y actividades del Centro
                  Cultural
                </p>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Formulario;
