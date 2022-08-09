import React from "react";
import "./../styles/globals.css";
import "./../styles/institucional.css";
import "./../styles/navBar.css";
import imgInstitucional from "./../assets/institucional.svg";

const Institucional = () => {
	return (
		<section id="institucional">
			<p className="title-cs">Institucional</p>
			<img src={imgInstitucional} alt="centro-cultural-sanMartin" />
			<h3>Misiones y Funciones</h3>
			<p>
				En sus más de 50 años de historia, El Cultural San Martín se erige como
				una institución innovadora, amplia, diversa e inclusiva. De fuerte
				mística pluralista y multicultural, cuenta con el apoyo del Ministerio
				de Cultura en todas sus actividades, para llegar a contenidos de
				excelencia.
			</p>
			<br />
			<p>
				Este es un espacio donde florecen las más heterogéneas experiencias en
				teatro, danza, música, cine, literatura y cultura digital. También, El
				Cultural San Martín fue el sitio donde funcionó el centro de cómputos en
				la vuelta a la democracia y fue la casa de la Conadep.
			</p>
			<h3>Responsibilades Primarias</h3>
			<ul>
				<li>
					Formular y ejecutar las políticas destinadas a estimular y favorecer
					la producción y expresión cultural en todas sus formas.
				</li>
				<li>
					Diseñar, planificar; realizar el seguimiento y control de los
					programas, actividades, acciones y servicios que presta el Centro
					Cultural General San Martín.
				</li>
				<li>
					Promover políticas de integración e intercambio con distintas
					instituciones Culturales de nivel local, nacional e internacional.
				</li>
				<li>
					Crear planes educativos, experimentales y de investigación en materia
					de arte, pensamiento y cultura.
				</li>
				<li>
					Elaborar estrategias de comunicación y difusión de los distintos
					programas y actividades que se realizan en coordinación con la
					Secretaría de Medios.
				</li>
			</ul>
			<h3>Objetivos</h3>
			<ul>
				<li>
					Dar lugar a proyectos, sirviendo de espacio de muestra, experimentando
					y propiciando su posterior reflexión.
				</li>
				<li>
					Impulsar los encuentros de distintos actores de la cultura para llevar
					adelante un profundo debate de ideas.
				</li>
				<li>
					Promover proyectos emergentes, estimulando la exhibición de obra de
					nuevos creadores
				</li>
				<li>Generar y construir nuevos públicos.</li>
				<li>
					Ser hogar de las comunidades emergentes, del cruce entre las artes, la
					tecnología y los debates contemporáneos.
				</li>
			</ul>
		</section>
	);
};

export default Institucional;
