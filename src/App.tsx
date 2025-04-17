import Home from './pages/home/Home'
import './App.css'
import './index.css'
import SobreNos from './pages/sobre_nos/SobreNos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
             <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
        <h1>SmartRH</h1>
        <p>Texto exemplificativo</p>
        <Home />
        <SobreNos />

      </BrowserRouter>
    </>
  )
}

export default App
