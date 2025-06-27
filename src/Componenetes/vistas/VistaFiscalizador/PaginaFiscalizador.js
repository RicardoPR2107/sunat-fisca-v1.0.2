import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./PaginaFiscalizador.css";
import logoSunat from "../../../Imagenes/Blanco-sunat-fisca+.png";

const PaginaFiscalizador = () => {
  return (
    <div className="fiscalizador-layout">
      <aside className="sidebar">
        <div className="logo">
          <img src={logoSunat} alt="SUNAT-Fisca+" />
        </div>
        <nav>
          <Link to="/fiscalizador/dashboard" className="nav-item">
            Dashboard
          </Link>
          <Link to="/fiscalizador/registrar" className="nav-item">
            Registrar
          </Link>
          <Link to="/fiscalizador/configuracion" className="nav-item">
            Configuración
          </Link>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default PaginaFiscalizador;
