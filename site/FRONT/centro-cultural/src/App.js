import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
<<<<<<< HEAD
import CursosTalleres from "./pages/CursosTalleres";
import Detail from "./pages/Detail";
import Perfil from "./pages/Perfil";
=======
import CursosTalleres from "./pages/CursosTalleres"
import NavBarSocials from "../src/components/navBar/NavBarSocials"
>>>>>>> 8f4de6826d0a4368b063268e77d717708196d8f5

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


        </Routes>

        <NavBarSocials/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
