import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import CursosTalleres from "./pages/CursosTalleres"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
      
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/institucional" element ={<Institucional/>} />
          <Route path="/cursosytalleres" element ={<CursosTalleres/>} />

        </Routes>

        <Footer/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
