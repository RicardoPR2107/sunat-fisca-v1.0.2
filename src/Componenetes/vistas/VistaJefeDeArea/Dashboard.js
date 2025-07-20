import React from "react";
import "./Dashboard.css";
import TotalDeFiscalizadores from "../../../Imagenes/TotalDeFiscalizadores.png";
import ReportesDelDia from "../../../Imagenes/ReportesDelDia.png";
import Promedio from "../../../Imagenes/Promedio.png";
import Seguridad from "../../../Imagenes/Seguridad.png";
import JpAzul from "../../../Imagenes/JpAzul.png";

const Dashboard = () => {
  return (
    <div className="vista-jefe-area-dashboard">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-main-container">
        {/* Header Button */}
        <div className="vista-jefe-area-header-section">
          <div className="vista-jefe-area-header-buttons">
            <button className="vista-jefe-area-btn-exportar">
              Exportar Reporte
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="vista-jefe-area-stats">
          <div className="vista-jefe-area-stat-card">
            <h3>Total de Personal</h3>
            <div className="vista-jefe-area-stat-card-content">
              <div className="vista-jefe-area-stat-card-left">
                <p>9</p>
                <div className="vista-jefe-area-sub-text green">
                  1 Supervisor + 8 Fiscalizadores
                </div>
              </div>
              <img
                src={TotalDeFiscalizadores}
                alt="Total de Fiscalizadores"
                className="vista-jefe-area-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-stat-card">
            <h3>Reportes Hoy</h3>
            <div className="vista-jefe-area-stat-card-content">
              <div className="vista-jefe-area-stat-card-left">
                <p>47</p>
                <div className="vista-jefe-area-sub-text green">
                  +12% vs ayer
                </div>
              </div>
              <img
                src={ReportesDelDia}
                alt="Reportes del Día"
                className="vista-jefe-area-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-stat-card">
            <h3>Eficiencia General</h3>
            <div className="vista-jefe-area-stat-card-content">
              <div className="vista-jefe-area-stat-card-left">
                <p>87%</p>
                <div className="vista-jefe-area-sub-text green">
                  +5% este mes
                </div>
              </div>
              <img
                src={Promedio}
                alt="Promedio"
                className="vista-jefe-area-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-stat-card">
            <h3>Alertas Pendientes</h3>
            <div className="vista-jefe-area-stat-card-content">
              <div className="vista-jefe-area-stat-card-left">
                <p>3</p>
                <div className="vista-jefe-area-sub-text red">
                  Requieren atención
                </div>
              </div>
              <img
                src={Seguridad}
                alt="Seguridad"
                className="vista-jefe-area-stat-card-icon large"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="vista-jefe-area-main-content">
          {/* Rendimiento por Supervisor */}
          <div className="vista-jefe-area-rendimiento-section">
            <div className="vista-jefe-area-section-header">
              <h3>Rendimiento por Supervisor</h3>
              <a href="#" className="vista-jefe-area-ver-detalles">
                Ver Detalles
              </a>
            </div>
            <div className="vista-jefe-area-supervisor-item">
              <img
                src={JpAzul}
                alt="Juan Pérez"
                className="vista-jefe-area-supervisor-avatar"
              />
              <div className="vista-jefe-area-supervisor-info">
                <div className="vista-jefe-area-supervisor-name">
                  Juan Pérez
                </div>
                <div className="vista-jefe-area-supervisor-count">
                  8 Fiscalizadores
                </div>
              </div>
              <div>
                <div className="vista-jefe-area-supervisor-percentage">87%</div>
                <div className="vista-jefe-area-supervisor-efficiency">
                  Eficiencia
                </div>
              </div>
            </div>
          </div>

          {/* Actividades del Día */}
          <div className="vista-jefe-area-actividades-section">
            <div className="vista-jefe-area-section-header">
              <h3>Actividades del Día</h3>
              <a href="#" className="vista-jefe-area-ver-detalles">
                Ver Todos
              </a>
            </div>
            <div className="vista-jefe-area-actividades-list">
              <div className="vista-jefe-area-actividad-item completed">
                <div className="vista-jefe-area-actividad-icon completed"></div>
                <div className="vista-jefe-area-actividad-info">
                  <div className="vista-jefe-area-actividad-title">
                    Control de Llaves
                  </div>
                  <div className="vista-jefe-area-actividad-subtitle">
                    Completado por Juan Pérez - 09:30
                  </div>
                </div>
              </div>
              <div className="vista-jefe-area-actividad-item completed">
                <div className="vista-jefe-area-actividad-icon completed"></div>
                <div className="vista-jefe-area-actividad-info">
                  <div className="vista-jefe-area-actividad-title">VECP</div>
                  <div className="vista-jefe-area-actividad-subtitle">
                    Completado por Juan Pérez - 10:15
                  </div>
                </div>
              </div>
              <div className="vista-jefe-area-actividad-item pending">
                <div className="vista-jefe-area-actividad-icon pending"></div>
                <div className="vista-jefe-area-actividad-info">
                  <div className="vista-jefe-area-actividad-title">
                    Control Móvil
                  </div>
                  <div className="vista-jefe-area-actividad-subtitle">
                    Pendiente - Juan Pérez
                  </div>
                </div>
              </div>
              <div className="vista-jefe-area-actividad-item pending">
                <div className="vista-jefe-area-actividad-icon pending"></div>
                <div className="vista-jefe-area-actividad-info">
                  <div className="vista-jefe-area-actividad-title">CIAE</div>
                  <div className="vista-jefe-area-actividad-subtitle">
                    Pendiente - Juan Pérez
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="vista-jefe-area-bottom-sections">
          {/* Tipos de Actividades */}
          <div className="vista-jefe-area-tipos-actividades">
            <h3>Tipos de Actividades</h3>
            <div className="vista-jefe-area-actividades-tipos-list">
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Control de Ingresos (Punto Fijo)
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">8</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Control de Llaves
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">5</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Control de Espectáculos Públicos
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">3</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Sustentación de Mercaderías
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">6</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Control Móvil
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">7</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  CIAE
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">4</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  Inspecciones Laborales
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">2</span>
              </div>
              <div className="vista-jefe-area-actividad-tipo-item">
                <span className="vista-jefe-area-actividad-tipo-name">
                  VECP
                </span>
                <span className="vista-jefe-area-actividad-tipo-count">9</span>
              </div>
            </div>
          </div>

          {/* Estado del Personal */}
          <div className="vista-jefe-area-estado-personal">
            <h3>Estado del Personal</h3>
            <div className="vista-jefe-area-estado-personal-list">
              <div className="vista-jefe-area-estado-personal-item">
                <span className="vista-jefe-area-estado-personal-name">
                  Fiscalizadores Activos
                </span>
                <span className="vista-jefe-area-estado-personal-count">
                  8/9
                </span>
              </div>
              <div className="vista-jefe-area-estado-personal-item">
                <span className="vista-jefe-area-estado-personal-name">
                  Supervisores Activos
                </span>
                <span className="vista-jefe-area-estado-personal-count">
                  1/1
                </span>
              </div>
              <div className="vista-jefe-area-estado-personal-item">
                <span className="vista-jefe-area-estado-personal-name">
                  En Licencia
                </span>
                <span className="vista-jefe-area-estado-personal-count">1</span>
              </div>
              <div className="vista-jefe-area-estado-personal-item">
                <span className="vista-jefe-area-estado-personal-name">
                  En Reunión
                </span>
                <span className="vista-jefe-area-estado-personal-count">1</span>
              </div>
              <div className="vista-jefe-area-estado-personal-item">
                <span className="vista-jefe-area-estado-personal-name">
                  Otros
                </span>
                <span className="vista-jefe-area-estado-personal-count">0</span>
              </div>
            </div>
          </div>

          {/* Acciones Rápidas */}
          <div className="vista-jefe-area-acciones-rapidas">
            <h3>Acciones Rápidas</h3>
            <div className="vista-jefe-area-acciones-rapidas-list">
              <button className="vista-jefe-area-accion-button primary">
                + Agregar Fiscalizador
              </button>
              <button className="vista-jefe-area-accion-button success">
                + Agregar Supervisor
              </button>
              <button className="vista-jefe-area-accion-button purple">
                Reasignar Personal
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FIN del contenedor principal */}
    </div>
  );
};

export default Dashboard;
