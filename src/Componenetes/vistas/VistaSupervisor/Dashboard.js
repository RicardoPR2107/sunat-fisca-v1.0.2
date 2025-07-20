import React from "react";
import "./Dashboard.css";
import TotalDeFiscalizadoresIcon from "../../../Imagenes/TotalDeFiscalizadores.png";
import ReportesDelDiaIcon from "../../../Imagenes/ReportesDelDia.png";
import PromedioIcon from "../../../Imagenes/Promedio.png";
import EficienciaIcon from "../../../Imagenes/Eficiencia.png";

const Dashboard = () => {
  // Datos para el gráfico
  const chartData = [
    { mes: "Enero", valor: 25 },
    { mes: "Febrero", valor: 20 },
    { mes: "Marzo", valor: 45 },
    { mes: "Abril", valor: 50 },
    { mes: "Mayo", valor: 35 },
    { mes: "Junio", valor: 40 },
  ];

  return (
    <div className="supervisor-dashboard-main-container">
      <div className="supervisor-dashboard">
        <div className="supervisor-dashboard-content">
          {/* Tarjetas de estadísticas */}
          <div className="supervisor-dashboard-stats-grid">
            <div className="supervisor-dashboard-stat-card">
              <div className="supervisor-dashboard-stat-content">
                <div className="supervisor-dashboard-stat-info">
                  <h3 className="supervisor-dashboard-stat-title">
                    Total de Fiscalizadores
                  </h3>
                  <p className="supervisor-dashboard-stat-value">8</p>
                  <span className="supervisor-dashboard-stat-status supervisor-dashboard-stat-status-positive">
                    Bajo supervisión
                  </span>
                </div>
                <div className="supervisor-dashboard-stat-icon-wrapper">
                  <img
                    src={TotalDeFiscalizadoresIcon}
                    alt="Fiscalizadores"
                    className="supervisor-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="supervisor-dashboard-stat-card">
              <div className="supervisor-dashboard-stat-content">
                <div className="supervisor-dashboard-stat-info">
                  <h3 className="supervisor-dashboard-stat-title">
                    Reportes del Día
                  </h3>
                  <p className="supervisor-dashboard-stat-value">45</p>
                  <span className="supervisor-dashboard-stat-status supervisor-dashboard-stat-status-positive">
                    +8% vs ayer
                  </span>
                </div>
                <div className="supervisor-dashboard-stat-icon-wrapper">
                  <img
                    src={ReportesDelDiaIcon}
                    alt="Reportes"
                    className="supervisor-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="supervisor-dashboard-stat-card">
              <div className="supervisor-dashboard-stat-content">
                <div className="supervisor-dashboard-stat-info">
                  <h3 className="supervisor-dashboard-stat-title">
                    Promedio por Fiscalizador
                  </h3>
                  <p className="supervisor-dashboard-stat-value">3.8</p>
                  <span className="supervisor-dashboard-stat-status">
                    Reportes/día
                  </span>
                </div>
                <div className="supervisor-dashboard-stat-icon-wrapper">
                  <img
                    src={PromedioIcon}
                    alt="Promedio"
                    className="supervisor-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="supervisor-dashboard-stat-card">
              <div className="supervisor-dashboard-stat-content">
                <div className="supervisor-dashboard-stat-info">
                  <h3 className="supervisor-dashboard-stat-title">
                    Eficiencia del Área
                  </h3>
                  <p className="supervisor-dashboard-stat-value">92%</p>
                  <span className="supervisor-dashboard-stat-status supervisor-dashboard-stat-status-positive">
                    +3% vs mes anterior
                  </span>
                </div>
                <div className="supervisor-dashboard-stat-icon-wrapper">
                  <img
                    src={EficienciaIcon}
                    alt="Eficiencia"
                    className="supervisor-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sección de gráficos */}
          <div className="supervisor-dashboard-charts-section">
            {/* Gráfico principal */}
            <div className="supervisor-dashboard-chart-container supervisor-dashboard-main-chart">
              <div className="supervisor-dashboard-chart-header">
                <h3 className="supervisor-dashboard-chart-title">
                  Tendencia de Reportes
                </h3>
                <select className="supervisor-dashboard-chart-filter">
                  <option>Últimos 6 meses</option>
                  <option>Último año</option>
                  <option>Este mes</option>
                </select>
              </div>
              <div className="supervisor-dashboard-chart-content">
                <svg
                  viewBox="0 0 800 400"
                  className="supervisor-dashboard-line-chart"
                >
                  <defs>
                    <linearGradient
                      id="supervisor-gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="50"
                      y1={50 + i * 75}
                      x2="750"
                      y2={50 + i * 75}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Area bajo la curva */}
                  <path
                    d="M 100 250 Q 200 280 300 200 T 500 150 Q 600 130 700 180 L 700 350 L 100 350 Z"
                    fill="url(#supervisor-gradient)"
                  />

                  {/* Línea principal */}
                  <path
                    d="M 100 250 Q 200 280 300 200 T 500 150 Q 600 130 700 180"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />

                  {/* Puntos de datos */}
                  {[
                    { x: 100, y: 250 },
                    { x: 300, y: 200 },
                    { x: 500, y: 150 },
                    { x: 700, y: 180 },
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Labels del eje X */}
                  {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"].map(
                    (mes, i) => (
                      <text
                        key={mes}
                        x={100 + i * 120}
                        y={380}
                        textAnchor="middle"
                        className="supervisor-dashboard-chart-label"
                      >
                        {mes}
                      </text>
                    )
                  )}

                  {/* Labels del eje Y */}
                  {[0, 10, 20, 30, 40, 50].map((val, i) => (
                    <text
                      key={val}
                      x="30"
                      y={355 - i * 60}
                      textAnchor="end"
                      className="supervisor-dashboard-chart-label"
                    >
                      {val}
                    </text>
                  ))}
                </svg>
              </div>
            </div>

            {/* Panel lateral de reportes */}
            <div className="supervisor-dashboard-reports-panel">
              <h3 className="supervisor-dashboard-panel-title">
                Reportes por Fiscalizador
              </h3>
              <div className="supervisor-dashboard-fiscalizador-list">
                {[
                  {
                    nombre: "Juan Pérez",
                    reportes: 89,
                    avatar: "JP",
                    color: "#f59e0b",
                  },
                  {
                    nombre: "Juan Pérez",
                    reportes: 89,
                    avatar: "JP",
                    color: "#6b7280",
                  },
                  {
                    nombre: "Juan Pérez",
                    reportes: 89,
                    avatar: "JP",
                    color: "#3b82f6",
                  },
                  {
                    nombre: "Juan Pérez",
                    reportes: 89,
                    avatar: "JP",
                    color: "#3b82f6",
                  },
                ].map((fiscal, index) => (
                  <div
                    key={index}
                    className="supervisor-dashboard-fiscalizador-item"
                  >
                    <div
                      className="supervisor-dashboard-fiscalizador-avatar"
                      style={{ backgroundColor: fiscal.color }}
                    >
                      {fiscal.avatar}
                    </div>
                    <div className="supervisor-dashboard-fiscalizador-info">
                      <p className="supervisor-dashboard-fiscalizador-nombre">
                        {fiscal.nombre}
                      </p>
                      <p className="supervisor-dashboard-fiscalizador-reportes">
                        {fiscal.reportes} reportes este mes
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
