import React from "react";
import "./AnalisisYMétricas.css";
import TotalDeFiscalizadores from "../../../Imagenes/TotalDeFiscalizadores.png";
import TotalDeReportes from "../../../Imagenes/TotalDeReportes.png";
import Estrella from "../../../Imagenes/Estrella.png";
import Seguridad from "../../../Imagenes/Seguridad.png";

const AnalisisYMétricas = () => {
  const actividadesData = [
    {
      nombre: "Control de Ingresos",
      asignadas: 400,
      completadas: 320,
      porcentaje: 80,
    },
    {
      nombre: "Control de Llave",
      asignadas: 400,
      completadas: 280,
      porcentaje: 70,
    },
    {
      nombre: "Control de Espectáculos Públicos",
      asignadas: 400,
      completadas: 150,
      porcentaje: 38,
    },
    {
      nombre: "Sustentación de Mercaderías",
      asignadas: 400,
      completadas: 200,
      porcentaje: 50,
    },
    {
      nombre: "Control Móvil",
      asignadas: 400,
      completadas: 180,
      porcentaje: 45,
    },
    { nombre: "CIAE", asignadas: 400, completadas: 100, porcentaje: 25 },
    {
      nombre: "Inspecciones de Mercaderías",
      asignadas: 400,
      completadas: 90,
      porcentaje: 23,
    },
    { nombre: "VECP", asignadas: 400, completadas: 110, porcentaje: 28 },
    {
      nombre: "Vivot-Fichas A",
      asignadas: 400,
      completadas: 70,
      porcentaje: 18,
    },
    {
      nombre: "Vivot-Fichas B",
      asignadas: 400,
      completadas: 60,
      porcentaje: 15,
    },
    {
      nombre: "Control de Imprentas",
      asignadas: 400,
      completadas: 50,
      porcentaje: 13,
    },
    { nombre: "Llamadas", asignadas: 400, completadas: 40, porcentaje: 10 },
    { nombre: "Archivos", asignadas: 400, completadas: 30, porcentaje: 8 },
    { nombre: "Otros", asignadas: 400, completadas: 20, porcentaje: 5 },
  ];

  const fiscalizadoresData = [
    {
      iniciales: "JP",
      nombre: "Juan Pérez",
      actividad: "Control de Ingresos",
      reportes: 187,
      eficiencia: "89% eficiencia",
      clase: "jp",
    },
    {
      iniciales: "CD",
      nombre: "Carmen Díaz",
      actividad: "VECP",
      reportes: 156,
      eficiencia: "92% eficiencia",
      clase: "cd",
    },
    {
      iniciales: "MG",
      nombre: "María García",
      actividad: "Inspecciones Laborales",
      reportes: 143,
      eficiencia: "85% eficiencia",
      clase: "mg",
    },
    {
      iniciales: "CM",
      nombre: "Carlos Mendoza",
      actividad: "Control de Llaves",
      reportes: 134,
      eficiencia: "88% eficiencia",
      clase: "cm",
    },
    {
      iniciales: "AT",
      nombre: "Ana Torres",
      actividad: "Control Móvil",
      reportes: 128,
      eficiencia: "83% eficiencia",
      clase: "at",
    },
    {
      iniciales: "LM",
      nombre: "Luis Mendoza",
      actividad: "CIAE",
      reportes: 121,
      eficiencia: "90% eficiencia",
      clase: "lm",
    },
    {
      iniciales: "CD",
      nombre: "Carmen Díaz",
      actividad: "VECP",
      reportes: 118,
      eficiencia: "87% eficiencia",
      clase: "cd",
    },
    {
      iniciales: "AT",
      nombre: "Ana Torres",
      actividad: "Control Móvil",
      reportes: 107,
      eficiencia: "86% eficiencia",
      clase: "at",
    },
  ];

  return (
    <div className="vista-jefe-area-analisis-metricas">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-analisis-metricas-main-container">
        {/* Header */}
        <div className="vista-jefe-area-analisis-metricas-header-section">
          <div className="vista-jefe-area-analisis-metricas-header-left">
            <select className="vista-jefe-area-analisis-metricas-period-selector">
              <option>Este Mes</option>
              <option>Mes Anterior</option>
              <option>Últimos 3 Meses</option>
              <option>Este Año</option>
            </select>
          </div>
          <button className="vista-jefe-area-analisis-metricas-btn-exportar">
            Exportar
          </button>
        </div>

        {/* Stats Cards */}
        <div className="vista-jefe-area-analisis-metricas-stats-cards">
          <div className="vista-jefe-area-analisis-metricas-stat-card">
            <h3>Total Fiscalizadores</h3>
            <div className="vista-jefe-area-analisis-metricas-stat-card-content">
              <div className="vista-jefe-area-analisis-metricas-stat-card-left">
                <p>8</p>
                <div className="vista-jefe-area-analisis-metricas-sub-text green">
                  +5% vs. período anterior
                </div>
              </div>
              <img
                src={TotalDeFiscalizadores}
                alt="Total Fiscalizadores"
                className="vista-jefe-area-analisis-metricas-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-analisis-metricas-stat-card">
            <h3>Reportes Completados</h3>
            <div className="vista-jefe-area-analisis-metricas-stat-card-content">
              <div className="vista-jefe-area-analisis-metricas-stat-card-left">
                <p>1200</p>
                <div className="vista-jefe-area-analisis-metricas-sub-text green">
                  +8% vs. período anterior
                </div>
              </div>
              <img
                src={TotalDeReportes}
                alt="Reportes Completados"
                className="vista-jefe-area-analisis-metricas-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-analisis-metricas-stat-card">
            <h3>Eficiencia General</h3>
            <div className="vista-jefe-area-analisis-metricas-stat-card-content">
              <div className="vista-jefe-area-analisis-metricas-stat-card-left">
                <p>89%</p>
                <div className="vista-jefe-area-analisis-metricas-sub-text green">
                  +3% vs. período general
                </div>
              </div>
              <img
                src={Estrella}
                alt="Eficiencia General"
                className="vista-jefe-area-analisis-metricas-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-analisis-metricas-stat-card">
            <h3>Alertas Pendientes</h3>
            <div className="vista-jefe-area-analisis-metricas-stat-card-content">
              <div className="vista-jefe-area-analisis-metricas-stat-card-left">
                <p>3</p>
                <div className="vista-jefe-area-analisis-metricas-sub-text red">
                  -10% vs. período anterior
                </div>
              </div>
              <img
                src={Seguridad}
                alt="Alertas Pendientes"
                className="vista-jefe-area-analisis-metricas-stat-card-icon"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="vista-jefe-area-analisis-metricas-main-content">
          {/* Distribución de Actividades por Tipo */}
          <div className="vista-jefe-area-analisis-metricas-distribucion-section">
            <div className="vista-jefe-area-analisis-metricas-section-header">
              <h3>Distribución de Actividades por Tipo</h3>
            </div>
            <table className="vista-jefe-area-analisis-metricas-distribucion-table">
              <thead>
                <tr>
                  <th>Tipo de Actividad</th>
                  <th>Actividades Asignadas</th>
                  <th>Actividades Completadas</th>
                  <th>Progreso</th>
                  <th>% Cumplimiento</th>
                </tr>
              </thead>
              <tbody>
                {actividadesData.map((actividad, index) => (
                  <tr key={index}>
                    <td>
                      <div className="vista-jefe-area-analisis-metricas-actividad-name">
                        {actividad.nombre}
                      </div>
                    </td>
                    <td>
                      <div className="vista-jefe-area-analisis-metricas-actividad-count">
                        {actividad.asignadas}
                      </div>
                    </td>
                    <td>
                      <div className="vista-jefe-area-analisis-metricas-actividad-count">
                        {actividad.completadas}
                      </div>
                    </td>
                    <td>
                      <div className="vista-jefe-area-analisis-metricas-progress-container">
                        <div className="vista-jefe-area-analisis-metricas-progress-bar">
                          <div
                            className="vista-jefe-area-analisis-metricas-progress-fill"
                            style={{ width: `${actividad.porcentaje}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="vista-jefe-area-analisis-metricas-progress-percentage">
                        {actividad.porcentaje}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rendimiento por Fiscalizador */}
          <div className="vista-jefe-area-analisis-metricas-rendimiento-section">
            <div className="vista-jefe-area-analisis-metricas-section-header">
              <h3>Rendimiento por Fiscalizador</h3>
            </div>
            <div className="vista-jefe-area-analisis-metricas-fiscalizadores-rendimiento">
              {fiscalizadoresData.map((fiscalizador, index) => (
                <div
                  key={index}
                  className="vista-jefe-area-analisis-metricas-fiscalizador-rendimiento-item"
                >
                  <div
                    className={`vista-jefe-area-analisis-metricas-fiscalizador-avatar ${fiscalizador.clase}`}
                  >
                    {fiscalizador.iniciales}
                  </div>
                  <div className="vista-jefe-area-analisis-metricas-fiscalizador-info">
                    <div className="vista-jefe-area-analisis-metricas-fiscalizador-name">
                      {fiscalizador.nombre}
                    </div>
                    <div className="vista-jefe-area-analisis-metricas-fiscalizador-activity">
                      {fiscalizador.actividad}
                    </div>
                  </div>
                  <div className="vista-jefe-area-analisis-metricas-fiscalizador-stats">
                    <div className="vista-jefe-area-analisis-metricas-fiscalizador-count">
                      {fiscalizador.reportes} reportes
                    </div>
                    <div className="vista-jefe-area-analisis-metricas-fiscalizador-efficiency">
                      {fiscalizador.eficiencia}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* FIN del contenedor principal */}
    </div>
  );
};

export default AnalisisYMétricas;
