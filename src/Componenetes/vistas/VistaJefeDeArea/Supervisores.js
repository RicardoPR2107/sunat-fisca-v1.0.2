import React from "react";
import "./Supervisores.css";
import TotalDeFiscalizadores from "../../../Imagenes/TotalDeFiscalizadores.png";
import Lupa from "../../../Imagenes/Lupa.png";
import Promedio from "../../../Imagenes/Promedio.png";
import TotalDeReportes from "../../../Imagenes/TotalDeReportes.png";
import JpAzul from "../../../Imagenes/JpAzul.png";
import JpRojo from "../../../Imagenes/JpRojo.png";

const Supervisores = () => {
  const fiscalizadores = [
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc42@sunat.gob.pe",
      estado: "Activo",
      reportes: 6,
      eficiencia: 92,
      actividad: "Control de Ingresos - 09:30",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc43@sunat.gob.pe",
      estado: "Activo",
      reportes: 5,
      eficiencia: 89,
      actividad: "VECP - 10:15",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc44@sunat.gob.pe",
      estado: "Activo",
      reportes: 4,
      eficiencia: 85,
      actividad: "Control Móvil - 11:00",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc45@sunat.gob.pe",
      estado: "Activo",
      reportes: 3,
      eficiencia: 78,
      actividad: "CIAE - Pendiente",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc46@sunat.gob.pe",
      estado: "Activo",
      reportes: 2,
      eficiencia: 80,
      actividad: "Vívot - Ficha A",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      email: "tc47@sunat.gob.pe",
      estado: "Inactivo",
      reportes: 0,
      eficiencia: 0,
      actividad: "Recuperando horas",
    },
  ];

  return (
    <div className="vista-jefe-area-supervisores">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-supervisores-main-container">
        {/* Header Buttons Only */}
        <div className="vista-jefe-area-supervisores-header-section">
          <div className="vista-jefe-area-supervisores-header-buttons">
            <button className="vista-jefe-area-supervisores-btn-agregar">
              + Agregar Supervisor
            </button>
            <button className="vista-jefe-area-supervisores-btn-exportar">
              Exportar
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="vista-jefe-area-supervisores-stats-cards">
          <div className="vista-jefe-area-supervisores-stat-card">
            <h3>Total de Supervisores</h3>
            <div className="vista-jefe-area-supervisores-stat-card-content">
              <div className="vista-jefe-area-supervisores-stat-card-left">
                <p>1</p>
                <div className="vista-jefe-area-supervisores-sub-text green">
                  Activo
                </div>
              </div>
              <img
                src={TotalDeFiscalizadores}
                alt="Total de Supervisores"
                className="vista-jefe-area-supervisores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-supervisores-stat-card">
            <h3>Fiscalizadores Supervisados</h3>
            <div className="vista-jefe-area-supervisores-stat-card-content">
              <div className="vista-jefe-area-supervisores-stat-card-left">
                <p>8</p>
                <div className="vista-jefe-area-supervisores-sub-text blue">
                  Bajo supervisión
                </div>
              </div>
              <img
                src={Lupa}
                alt="Fiscalizadores Supervisados"
                className="vista-jefe-area-supervisores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-supervisores-stat-card">
            <h3>Eficiencia Promedio</h3>
            <div className="vista-jefe-area-supervisores-stat-card-content">
              <div className="vista-jefe-area-supervisores-stat-card-left">
                <p>87%</p>
                <div className="vista-jefe-area-supervisores-sub-text green">
                  +3% este mes
                </div>
              </div>
              <img
                src={Promedio}
                alt="Eficiencia Promedio"
                className="vista-jefe-area-supervisores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-supervisores-stat-card">
            <h3>Reportes Supervisados</h3>
            <div className="vista-jefe-area-supervisores-stat-card-content">
              <div className="vista-jefe-area-supervisores-stat-card-left">
                <p>47</p>
                <div className="vista-jefe-area-supervisores-sub-text green">
                  Hoy
                </div>
              </div>
              <img
                src={TotalDeReportes}
                alt="Reportes Supervisados"
                className="vista-jefe-area-supervisores-stat-card-icon"
              />
            </div>
          </div>
        </div>

        {/* Información del Supervisor */}
        <div className="vista-jefe-area-supervisores-supervisor-info-section">
          <h3 className="vista-jefe-area-supervisores-supervisor-info-header">
            Información del Supervisor
          </h3>

          <div className="vista-jefe-area-supervisores-supervisor-profile">
            <img
              src={JpAzul}
              alt="Juan Pérez"
              className="vista-jefe-area-supervisores-supervisor-avatar"
            />
            <div className="vista-jefe-area-supervisores-supervisor-details">
              <div className="vista-jefe-area-supervisores-supervisor-name">
                Juan Pérez
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-title">
                Supervisor de Área - Masivos
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-contact">
                TC42@sunat.gob.pe • +51 943 123 456 • TC42
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-since">
                Desde: 15/01/2023
              </div>
            </div>
            <div className="vista-jefe-area-supervisores-supervisor-status">
              Activo
            </div>
          </div>

          <div className="vista-jefe-area-supervisores-supervisor-stats">
            <div className="vista-jefe-area-supervisores-supervisor-stat blue">
              <div className="vista-jefe-area-supervisores-supervisor-stat-title">
                Fiscalizadores a Cargo
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-value">
                8
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-subtitle">
                Fiscalizadores
              </div>
            </div>
            <div className="vista-jefe-area-supervisores-supervisor-stat green">
              <div className="vista-jefe-area-supervisores-supervisor-stat-title">
                Reportes Supervisados
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-value">
                1,247
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-subtitle">
                Este mes
              </div>
            </div>
            <div className="vista-jefe-area-supervisores-supervisor-stat purple">
              <div className="vista-jefe-area-supervisores-supervisor-stat-title">
                Eficiencia del Equipo
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-value">
                87%
              </div>
              <div className="vista-jefe-area-supervisores-supervisor-stat-subtitle">
                Promedio
              </div>
            </div>
          </div>
        </div>

        {/* Fiscalizadores Asignados */}
        <div className="vista-jefe-area-supervisores-fiscalizadores-section">
          <div className="vista-jefe-area-supervisores-fiscalizadores-header">
            <h3>Fiscalizadores Asignados</h3>
            <div className="vista-jefe-area-supervisores-search-filter">
              <input
                type="text"
                placeholder="Buscar Fiscalizador..."
                className="vista-jefe-area-supervisores-search-input"
              />
              <select className="vista-jefe-area-supervisores-filter-select">
                <option>Todos los estados</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>

          <table className="vista-jefe-area-supervisores-fiscalizadores-table">
            <thead>
              <tr>
                <th>FISCALIZADOR</th>
                <th>ESTADO</th>
                <th>REPORTES HOY</th>
                <th>EFICIENCIA</th>
                <th>ÚLTIMA ACTIVIDAD</th>
              </tr>
            </thead>
            <tbody>
              {fiscalizadores.map((fiscalizador, index) => (
                <tr key={index}>
                  <td>
                    <div className="vista-jefe-area-supervisores-fiscalizador-info">
                      <img
                        src={fiscalizador.estado === "Activo" ? JpAzul : JpRojo}
                        alt={fiscalizador.nombre}
                        className="vista-jefe-area-supervisores-fiscalizador-avatar"
                      />
                      <div className="vista-jefe-area-supervisores-fiscalizador-details">
                        <div className="vista-jefe-area-supervisores-fiscalizador-name">
                          {fiscalizador.nombre}
                        </div>
                        <div className="vista-jefe-area-supervisores-fiscalizador-email">
                          {fiscalizador.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`vista-jefe-area-supervisores-status-badge ${fiscalizador.estado.toLowerCase()}`}
                    >
                      {fiscalizador.estado}
                    </span>
                  </td>
                  <td>{fiscalizador.reportes}</td>
                  <td>
                    <div className="vista-jefe-area-supervisores-efficiency-bar">
                      <div
                        className="vista-jefe-area-supervisores-efficiency-fill"
                        style={{ width: `${fiscalizador.eficiencia}%` }}
                      ></div>
                    </div>
                    <div className="vista-jefe-area-supervisores-efficiency-text">
                      {fiscalizador.eficiencia}%
                    </div>
                  </td>
                  <td>
                    <div className="vista-jefe-area-supervisores-activity-text">
                      {fiscalizador.actividad}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* FIN del contenedor principal */}
    </div>
  );
};

export default Supervisores;
