import "./App.css"
import { Home } from "./components/Home";
import { About } from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FixedButtons from "./components/FixedButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa BrowserRouter, Route y Switch
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="keywords" content="tarot, sabadell, wicca, rituales, equinocio, espiritual, espirituales, magia, sesiones, consultas, cartas, tiradas"/>
      </Helmet>
        <div id="home"><Home/></div>
        <div id="about"><About /></div>
        <div id="work"><Work /></div>
        <div id="contact"><Contact /></div>
        <Footer />
        <FixedButtons/>
    </div>
    
    
  );
}

export default App;
