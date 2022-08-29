import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import CursosTalleres from "./pages/CursosTalleres";
import Detail from "./pages/Detail";
import Perfil from "./pages/Perfil";
import NavBarSocials from "../src/components/navBar/NavBarSocials"
import ArtesEscenicasPage from './pages/Artes-Escenicas.js'
import ArtesVisualesPage from './pages/Artes-Visuales.js'
import Musica from './pages/Musica.js'
import Cine from './pages/CinePage.js'
import PreguntasFrecuentes from './../src/pages/PreguntasFrecuentes'
import ComprarEvento from "./components/comprar/ComprarEvento";
import TicketEvento from "./components/comprar/TicketEvento";
import ComprarCurso from "./components/comprar/ComprarCurso";
import TicketCurso from "./components/comprar/TicketCurso";



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
      
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/institucional" element ={<Institucional/>} />
          <Route path="/cursosytalleres" element ={<CursosTalleres/>} />

          <Route path="/detail" element = {<Detail/>} />
          <Route path="/perfil" element = {<Perfil/>} />


          <Route path="/artes-escenicas" element ={<ArtesEscenicasPage/>} />
          <Route path="/artes-visuales" element ={<ArtesVisualesPage/>} />
          <Route path="/musica" element ={<Musica/>} />
          <Route path="/cine" element ={<Cine/>} />
          <Route path="/preguntas-frecuentes" element ={<PreguntasFrecuentes/>} />
          <Route path="/comprar-evento" element ={<ComprarEvento/>} />
          <Route path="/ticket-evento" element ={<TicketEvento/>} />
          <Route path="/comprar-curso" element ={<ComprarCurso/>} />
          <Route path="/ticket-curso" element ={<TicketCurso/>} />


        </Routes>

        <NavBarSocials/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
