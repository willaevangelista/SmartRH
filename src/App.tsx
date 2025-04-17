import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobre_nos/SobreNos";
import Produto from "./pages/produto/Produto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[81vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/Produto' element={<Produto />} />
            <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;