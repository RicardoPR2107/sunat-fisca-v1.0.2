import React, { useState, useContext } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logoSunat from "../../../Imagenes/Blanco-sunat-fisca+.png";
import perfilPlaceholder from "../../../Imagenes/perfil-placeholder.png";
import "./PaginaFiscalizador.css";
import { useAuth } from "../../../context/AuthContext";

const PaginaFiscalizador = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/fiscalizador/dashboard":
        return {
          title: "Dashboard - Fiscalizador",
          subtitle: "Área de Masivos-Chimbote",
        };
      case "/fiscalizador/registrar":
        return { title: "Registrar", subtitle: "Área de Masivos-Chimbote" };
      case "/fiscalizador/configuracion":
        return {
          title: "Configuración - Fiscalizador",
          subtitle: "Configuración del sistema y gestión de usuarios",
        };
      default:
        return {
          title: "Dashboard - Fiscalizador",
          subtitle: "Área de Masivos-Chimbote",
        };
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="fiscalizador-layout">
      <aside className="fiscalizador-sidebar">
        <div className="fiscalizador-logo">
          <img src={logoSunat} alt="SUNAT-Fisca+" />
        </div>
        <nav>
          <Link
            to="/fiscalizador/dashboard"
            className={`fiscalizador-nav-item ${
              location.pathname === "/fiscalizador/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/fiscalizador/registrar"
            className={`fiscalizador-nav-item ${
              location.pathname === "/fiscalizador/registrar" ? "active" : ""
            }`}
          >
            Registrar
          </Link>
          <Link
            to="/fiscalizador/configuracion"
            className={`fiscalizador-nav-item ${
              location.pathname === "/fiscalizador/configuracion"
                ? "active"
                : ""
            }`}
          >
            Configuración
          </Link>
        </nav>
      </aside>
      <div className="fiscalizador-main">
        <header className="fiscalizador-header">
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
            <span className="profile-name">{user?.name || 'Usuario'}</span>
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
        <main className="fiscalizador-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PaginaFiscalizador;
