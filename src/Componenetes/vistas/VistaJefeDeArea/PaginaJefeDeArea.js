import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logoSunat from "../../../Imagenes/Blanco-sunat-fisca+.png";
import perfilPlaceholder from "../../../Imagenes/perfil-placeholder.png";
import "./PaginaJefeDeArea.css";

const PaginaJefeDeArea = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/jefe-area/dashboard":
        return {
          title: "Dashboard - Jefe de Área",
          subtitle: "Área de Masivos - Chimbote",
        };
      case "/jefe-area/supervisores":
        return {
          title: "Gestión de Supervisores",
          subtitle: "Área de Masivos - Chimbote",
        };
      case "/jefe-area/fiscalizadores":
        return {
          title: "Gestión de Fiscalizadores",
          subtitle: "Área de Masivos - Chimbote",
        };
      case "/jefe-area/reportes-consolidados":
        return {
          title: "Reportes Consolidados",
          subtitle: "Área de Masivos - Chimbote",
        };
      case "/jefe-area/analisis-metricas":
        return {
          title: "Análisis y Métricas",
          subtitle: "Área de Masivos - Chimbote",
        };
      case "/jefe-area/configuracion":
        return {
          title: "Configuración - Jefe de Área",
          subtitle: "Configuración del sistema y gestión de usuarios",
        };
      default:
        return {
          title: "Dashboard - Jefe de Área",
          subtitle: "Área de Masivos - Chimbote",
        };
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="jefe-area-layout">
      <aside className="jefe-area-sidebar">
        <div className="jefe-area-logo">
          <img src={logoSunat} alt="SUNAT-Fisca+" />
        </div>
        <nav>
          <Link
            to="/jefe-area/dashboard"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/jefe-area/supervisores"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/supervisores" ? "active" : ""
            }`}
          >
            Supervisores
          </Link>
          <Link
            to="/jefe-area/fiscalizadores"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/fiscalizadores" ? "active" : ""
            }`}
          >
            Fiscalizadores
          </Link>
          <Link
            to="/jefe-area/reportes-consolidados"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/reportes-consolidados"
                ? "active"
                : ""
            }`}
          >
            Reportes Consolidados
          </Link>
          <Link
            to="/jefe-area/analisis-metricas"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/analisis-metricas"
                ? "active"
                : ""
            }`}
          >
            Análisis y Métricas
          </Link>
          <Link
            to="/jefe-area/configuracion"
            className={`jefe-area-nav-item ${
              location.pathname === "/jefe-area/configuracion" ? "active" : ""
            }`}
          >
            Configuración
          </Link>
        </nav>
      </aside>
      <div className="jefe-area-main">
        <header className="jefe-area-header">
          <div className="header-title">
            <h2>{getHeaderContent().title}</h2>
            <p>{getHeaderContent().subtitle}</p>
          </div>
          <div className="header-profile">
            <img
              src={perfilPlaceholder}
              alt="Perfil"
              className="profile-icon"
            />
            <span className="profile-name">Juan Perez</span>
            <div
              className="profile-dropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="dropdown-arrow">▼</span>
              {isOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="jefe-area-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PaginaJefeDeArea;
