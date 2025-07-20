import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logoSunat from "../../../Imagenes/Blanco-sunat-fisca+.png";
import perfilPlaceholder from "../../../Imagenes/perfil-placeholder.png";
import "./PaginaSupervisor.css";

const PaginaSupervisor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/jefe-general/dashboard":
        return {
          title: "Dashboard - Supervisor",
          subtitle: "Área de Masivos-Chimbote",
        };
      case "/jefe-general/fiscalizadores":
        return {
          title: "Fiscalizadores",
          subtitle: "Área de Masivos-Chimbote",
        };
      case "/jefe-general/reportes":
        return {
          title: "Reportes",
          subtitle: "Área de Masivos-Chimbote",
        };
      case "/jefe-general/configuracion":
        return {
          title: "Configuración - Supervisor",
          subtitle: "Configuración del sistema y gestión de usuarios",
        };
      default:
        return {
          title: "Dashboard - Supervisor",
          subtitle: "Área de Masivos-Chimbote",
        };
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="supervisor-layout">
      <aside className="supervisor-sidebar">
        <div className="supervisor-logo">
          <img src={logoSunat} alt="SUNAT-Fisca+" />
        </div>
        <nav>
          <Link
            to="/jefe-general/dashboard"
            className={`supervisor-nav-item ${
              location.pathname === "/jefe-general/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/jefe-general/fiscalizadores"
            className={`supervisor-nav-item ${
              location.pathname === "/jefe-general/fiscalizadores"
                ? "active"
                : ""
            }`}
          >
            Fiscalizadores
          </Link>
          <Link
            to="/jefe-general/reportes"
            className={`supervisor-nav-item ${
              location.pathname === "/jefe-general/reportes" ? "active" : ""
            }`}
          >
            Reportes
          </Link>
          <Link
            to="/jefe-general/configuracion"
            className={`supervisor-nav-item ${
              location.pathname === "/jefe-general/configuracion"
                ? "active"
                : ""
            }`}
          >
            Configuracion
          </Link>
        </nav>
      </aside>
      <div className="supervisor-main">
        <header className="supervisor-header">
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
        <main className="supervisor-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PaginaSupervisor;
