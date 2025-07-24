import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import InicioSesion from "./Componenetes/vistas/InicioSesion/InicioSesion";
import PaginaFiscalizador from "./Componenetes/vistas/VistaFiscalizador/PaginaFiscalizador";
import Dashboard from "./Componenetes/vistas/VistaFiscalizador/Dashboard";
import Registrar from "./Componenetes/vistas/VistaFiscalizador/Registro";
import Configuracion from "./Componenetes/vistas/VistaFiscalizador/Configuracion";
import PaginaJefeDeArea from "./Componenetes/vistas/VistaJefeDeArea/PaginaJefeDeArea";
import DashboardJefe from "./Componenetes/vistas/VistaJefeDeArea/Dashboard";
import ConfiguracionJefe from "./Componenetes/vistas/VistaJefeDeArea/Configuracion";
import ReportesConsolidados from "./Componenetes/vistas/VistaJefeDeArea/ReportesConsolidados";
import AnalisisYMétricas from "./Componenetes/vistas/VistaJefeDeArea/AnalisisYMétricas";
import Supervisores from "./Componenetes/vistas/VistaJefeDeArea/Supervisores";
import Fiscalizadores from "./Componenetes/vistas/VistaJefeDeArea/Fiscalizadores";
import PaginaSupervisor from "./Componenetes/vistas/VistaSupervisor/PaginaSupervisor";
import DashboardSupervisor from "./Componenetes/vistas/VistaSupervisor/Dashboard";
import FiscalizadoresSupervisor from "./Componenetes/vistas/VistaSupervisor/Fiscalizadores";
import ReportesSupervisor from "./Componenetes/vistas/VistaSupervisor/Reportes";
import ConfiguracionSupervisor from "./Componenetes/vistas/VistaSupervisor/Configuracion";
import RoleRedirect from "./components/RoleRedirect";

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
        <Route path="/jefe-area/*" element={<PaginaJefeDeArea />}>
          <Route path="dashboard" element={<DashboardJefe />} />
          <Route path="configuracion" element={<ConfiguracionJefe />} />
          <Route
            path="reportes-consolidados"
            element={<ReportesConsolidados />}
          />
          <Route path="analisis-metricas" element={<AnalisisYMétricas />} />
          <Route path="supervisores" element={<Supervisores />} />
          <Route path="fiscalizadores" element={<Fiscalizadores />} />
        </Route>
        <Route path="/jefe-general/*" element={<PaginaSupervisor />}>
          <Route path="dashboard" element={<DashboardSupervisor />} />
          <Route path="fiscalizadores" element={<FiscalizadoresSupervisor />} />
          <Route path="reportes" element={<ReportesSupervisor />} />
          <Route path="configuracion" element={<ConfiguracionSupervisor />} />
        </Route>
        <Route path="/redirect" element={<RoleRedirect />} />
        <Route
          path="/logout"
          element={<div>Cerrar Sesión (implementar redirección)</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
