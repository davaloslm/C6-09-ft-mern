import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoTest from "./../assets/logoTest.png";
import "./../styles/TuCuenta.css";

const TuCuenta = () => {
  const [datosUsuario, setDatosUsuario] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const datos = JSON.parse(localStorage.getItem('datosUsuario'))
    setDatosUsuario({
      ...datosUsuario,
      datos
    })
    console.log(datos)
    console.log(token)
    if(token === null){
      navigate('/')
    }
  }, [])
  console.log(datosUsuario)
	return (
		<section id="tucuenta">
			<p className="title-cs">Tu Perfil</p>
			<div className="micuenta-flex">
				<img src={logoTest} alt="tuLogo" />
				<div className="contain-datos">
					<h3>Nombre</h3>
					<p className="datoCuenta">{datosUsuario ? datosUsuario.datos.nombre : null}</p>
					<h3>Apellido</h3>
					<p className="datoCuenta">{datosUsuario ? datosUsuario.datos.apellido : null}</p>
					<h3>Correo Electrónico</h3>
					<p className="datoCuenta">{datosUsuario ? datosUsuario.datos.email : null}</p>
					<h3>DNI</h3>
					<p className="datoCuenta">{datosUsuario ? datosUsuario.datos.dni : null}</p>
				</div>
			</div>

			<div className="container-entradasycursos">
				<div className="contain-entrada">
					<label htmlFor="checkbox-entradas">
						<p className="contain-cuenta">Tus Entradas</p>
					</label>
					<input
						id="checkbox-entradas"
						className="hiddenCheckbox"
						type="checkbox"
					></input>
					<div className="card-inscripto card-entradas">
						<h1>Eternidades</h1>
						<p>Té póstumo en hall de cine</p>
						<p>Idea, dirección y puesta de Pablo Gorlero</p>
						<p>Viernes 8 de julio - 20:30hs</p>
					</div>
				</div>
				<div className="contain-curso">
					<label htmlFor="checkbox-cursos">
						<p className="contain-cuenta">Tus Cursos y Talleres</p>
					</label>
					<input
						id="checkbox-cursos"
						className="hiddenCheckbox"
						type="checkbox"
					></input>
					<div className="card-inscripto card-cursos">
						<h1>Imagen, Diseño y Creatividad en el Vestuario</h1>
						<p>Artes Escénicas</p>
						<p>9,16,23 y 30 de agosto - 19 a 21hs</p>
					</div>
				</div>
			</div>
			<button>Modificar</button>
			<p className="cerrarsesion">Cerrar sesión</p>
		</section>
	);
};

export default TuCuenta;
