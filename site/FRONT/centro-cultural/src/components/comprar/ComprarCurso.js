import React, { useEffect, useState } from "react";
import "../../styles/eventos.css";
import brandBlancoCard from "../../assets/centroCard.png";
import bsAsCard from "../../assets/bsAsCard.png";
import { useNavigate, useParams } from "react-router-dom";
import { useCreditCardValidator, images } from "react-creditcard-validator";

const ComprarCurso = () => {
  const [cursoComprar, setCursoComprar] = useState({});
  const [datosUsuario, setDatosUsuario] = useState({});
  const [cursoInscripto, setCursoInscripto] = useState({});
  const [cargandoData, setCargandoData] = useState(true);
  const navigate = useNavigate();
  const idCurso = useParams();
  const [datosTarjeta, setDatosTarjeta] = useState({
    numerosTarjeta: '',
    fechaVencimiento: '',
    cvc: '',
    nombreYapellido: ''
  })

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();


  useEffect(() => {
    setCargandoData(true);
    console.log(`http://localhost:2000/api/curso/${idCurso.idCurso}`);
    fetch(`http://localhost:2000/api/curso/${idCurso.idCurso}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCursoComprar(data))
      .catch((error) => console.log(error))
      .finally(() => setCargandoData(false));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const datos = JSON.parse(localStorage.getItem("datosUsuario"));
    setDatosUsuario({
      ...datos,
    });
    console.log(datos);
    console.log(token);
    if (token === null) {
      navigate("/");
    }
  }, []);

  function handleChange (e) {
    setDatosTarjeta({
      ...datosTarjeta,
      [e.target.name] : e.target.value
    })
  }

  const enviarDatos = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    fetch(`http://localhost:2000/api/inscribir/${datosUsuario._id}/${idCurso.idCurso}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCursoInscripto(data))
      .catch((error) => console.log(error))
    alert('Se ha inscripto al curso correctamente')
    console.log("curso inscrito correctamente...");
  };

  console.log(datosUsuario);
  return cargandoData ? (
    <p>La informacion esta cargando</p>
  ) : (
    <div className="comprarContainer">
      <div className="divTitleComprar divTitleComprarCurso">
        <h2 className="titleComprar">Comprar</h2>
      </div>
      <div className="divCurso divComprarCurso">
        <div className="divComprarCursoSmall">
          <div className="divTextosComprar">
            <h2 className="titleCurso">
              {cursoComprar.curso ? cursoComprar.curso.nombre : null}
            </h2>
            <h3 className="subTitleCurso">
              {cursoComprar.curso ? cursoComprar.curso.categoriaCurso : null}
            </h3>
            <h4 className="coordinaComprarCurso">
              Coordina:{" "}
              {cursoComprar.curso ? cursoComprar.curso.coordinador : null}
            </h4>
          </div>

          <div className="divBrandsCard divBrandsCardComprarCurso ">
            <img src={brandBlancoCard} alt="brand-blanco" />
            <img src={bsAsCard} alt="brand-bs-as" />
          </div>
        </div>
      </div>

      <div className="divInfoCurso">
        <div className="divInfo">
          <h2>Dias</h2>
          <h3>{cursoComprar.curso ? cursoComprar.curso.diasDeCurso : null}</h3>
        </div>
        <div className="divInfo">
          <h2>Horarios</h2>
          <h3>
            {cursoComprar.curso ? cursoComprar.curso.horariosDeCurso : null}
          </h3>
        </div>
        <div className="divInfo">
          <h2>Arancel</h2>
          <h3>
            ${cursoComprar.curso ? cursoComprar.curso.precio : null} (pago
            único)
          </h3>
        </div>
        <div className="divInfo">
          <h2>Coordina</h2>
          <h3>{cursoComprar.curso ? cursoComprar.curso.coordinador : null}</h3>
        </div>
      </div>

      <div className="divImporte">
        <h2>Importe</h2>
        <h2>${cursoComprar.curso ? cursoComprar.curso.precio : null}-Ars</h2>
      </div>

      <div className="divFormulariosComprarCurso">
        <form className="formPersonal">
          <h2>Tus Datos</h2>
          <h3>Nombre</h3>
          <p className="datoCuenta">
            {datosUsuario ? datosUsuario.nombre : null}
          </p>
          <h3>Apellido</h3>
          <p className="datoCuenta">
            {datosUsuario ? datosUsuario.apellido : null}
          </p>
          <h3>Correo Electrónico</h3>
          <p className="datoCuenta">
            {datosUsuario ? datosUsuario.email : null}
          </p>
          <h3>DNI</h3>
          <p className="datoCuenta">{datosUsuario ? datosUsuario.dni : null}</p>
        </form>

        <form className="formPagoTarjeta" onSubmit={enviarDatos}>
          <h2>Datos de Pago</h2>
          <label>
            Número de la Tarjeta
            <input
              type="number"
              placeholder="ingresa los 16 dígitos de la tarjeta"
              className="inputPago"
              name="numerosTarjeta"
              required
              {...getCardNumberProps()}
              onChange={(e) => handleChange(e)}
            ></input>
            <small>
              {erroredInputs.cardNumber && erroredInputs.cardNumber}
            </small>
          </label>
          <br/>

          <label>
            Fecha de Vencimiento
            <input
              type="number"
              placeholder="mm/aa"
              className="inputPago"
              name="fechaVencimiento"
              required
              {...getExpiryDateProps()}
              onChange={(e) => handleChange(e)}
            ></input>
            <small>
              {erroredInputs.expiryDate && erroredInputs.expiryDate}
            </small>
          </label>
          <br/>

          <label>
            Código de Seguridad
            <input
              type="number"
              placeholder="xxx"
              className="inputPago"
              name="cvc"
              required
              {...getCVCProps()}
              onChange={(e) => handleChange(e)}
            ></input>
            <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
          </label>
          <br/>

          <label>
            {" "}
            Nombre y Apellido
            <input
              type="num"
              placeholder="Nombre y Apellido como figura en la tarjeta"
              className="inputPago"
              name="nombreYapellido"
              required
              onChange={(e) => handleChange(e)}
            ></input>
          </label>
          <button type="submit" className="btnComprarCurso">
        Comprar
      </button>
        </form>
      </div>

      
    </div>
  );
};

export default ComprarCurso;
