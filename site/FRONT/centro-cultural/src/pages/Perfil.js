import React from "react";
import "../styles/perfil.css";
import Loginform from "../components/LoginForm/Loginform.jsx";

const Perfil = () => {
  return (
    <section id="perfil">
      <p className="perfil">Perfil</p>
      <h1> Ingresar </h1> <br />
      <Loginform />
      <br />
    </section>
  );
};

export default Perfil;
