import React from "react";
import "./gridCard.css";
import { Link } from "react-router-dom";
import imgArtesEscenicas from "../../assets/img/artesEscenicas.png";
import imgArtesVisuales from "../../assets/img/artesVisuales.png";
import imgMusica from "../../assets/img/musica.png";
import imgCine from "../../assets/img/cine.png";

const GridCard = () => {
	return (
		<div className="gridProgramacionContainerBig">
			<div className="gridProgramacionContainer">
				<h2 className="subtitle">Programacion</h2>

				<div className="gridProgracion">
					<Link to="/artes-escenicas">
						<div className="cardGridUno">
							<img src={imgArtesEscenicas} alt="" />

							<h3>Artes Escenicas</h3>
						</div>
					</Link>

					<Link to="/artes-visuales">
						<div className="cardGridDos">
							<img src={imgArtesVisuales} alt="" />

							<h3>Artes Visuales</h3>
						</div>
					</Link>

					<Link to="/cine">
						<div className="cardGridUno">
							<img src={imgCine} alt="" />

							<h3>Cine</h3>
						</div>
					</Link>

					<Link to="/musica">
						<div className="cardGridDos">
							<img src={imgMusica} alt="" />

							<h3>Música</h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GridCard;
