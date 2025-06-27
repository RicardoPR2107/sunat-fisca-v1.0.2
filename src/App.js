import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import InicioSesion from "./Componenetes/vistas/InicioSesion/InicioSesion";
import PaginaFiscalizador from "./Componenetes/vistas/VistaFiscalizador/PaginaFiscalizador";
import Dashboard from "./Componenetes/vistas/VistaFiscalizador/Dashboard";
import Registrar from "./Componenetes/vistas/VistaFiscalizador/Registro";
import Configuracion from "./Componenetes/vistas/VistaFiscalizador/Configuracion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/fiscalizador/*" element={<PaginaFiscalizador />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
