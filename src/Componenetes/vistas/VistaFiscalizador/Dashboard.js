import React from "react";
import "./Dashboard.css";
import Dash1 from "../../../Imagenes/Dash1.png";
import Dash2 from "../../../Imagenes/Dash2.png";
import Promedio from "../../../Imagenes/Promedio.png";
import Dash3 from "../../../Imagenes/Dash3.png";
import Dash4 from "../../../Imagenes/Dash4.png";

const Dashboard = () => {
  return (
    <div className="fiscalizador-main-container">
      <div className="fiscalizador-dashboard">
        <div className="fiscalizador-dashboard-content">
          {/* Stats Cards - EXACTAMENTE COMO FIGMA */}
          <div className="fiscalizador-dashboard-stats-grid">
            <div className="fiscalizador-dashboard-stat-card">
              <div className="fiscalizador-dashboard-stat-content">
                <div className="fiscalizador-dashboard-stat-info">
                  <h3 className="fiscalizador-dashboard-stat-title">
                    Total de Actividades
                  </h3>
                  <p className="fiscalizador-dashboard-stat-value">127</p>
                </div>
                <div className="fiscalizador-dashboard-stat-icon-wrapper">
                  <img
                    src={Dash1}
                    alt="Total Actividades"
                    className="fiscalizador-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="fiscalizador-dashboard-stat-card">
              <div className="fiscalizador-dashboard-stat-content">
                <div className="fiscalizador-dashboard-stat-info">
                  <h3 className="fiscalizador-dashboard-stat-title">
                    Promedio Diario
                  </h3>
                  <p className="fiscalizador-dashboard-stat-value">3.5</p>
                </div>
                <div className="fiscalizador-dashboard-stat-icon-wrapper">
                  <img
                    src={Dash2}
                    alt="Promedio Diario"
                    className="fiscalizador-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="fiscalizador-dashboard-stat-card">
              <div className="fiscalizador-dashboard-stat-content">
                <div className="fiscalizador-dashboard-stat-info">
                  <h3 className="fiscalizador-dashboard-stat-title">
                    Actividad más Frecuente
                  </h3>
                  <p className="fiscalizador-dashboard-stat-value fiscalizador-dashboard-stat-value-text">
                    Inspección
                  </p>
                </div>
                <div className="fiscalizador-dashboard-stat-icon-wrapper">
                  <img
                    src={Promedio}
                    alt="Actividad Frecuente"
                    className="fiscalizador-dashboard-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="fiscalizador-dashboard-stat-card">
              <div className="fiscalizador-dashboard-stat-content">
                <div className="fiscalizador-dashboard-stat-info">
                  <h3 className="fiscalizador-dashboard-stat-title">
                    Comparativa
                  </h3>
                  <div className="fiscalizador-dashboard-stat-comparative">
                    <img
                      src={Dash4}
                      alt="Comparativa"
                      className="fiscalizador-dashboard-comparative-icon"
                    />
                    <p className="fiscalizador-dashboard-stat-value fiscalizador-dashboard-stat-value-percentage">
                      +12%
                    </p>
                    <img
                      src={Dash3}
                      alt="Tendencia"
                      className="fiscalizador-dashboard-trend-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel de reportes recientes */}
          <div className="fiscalizador-dashboard-reports-panel">
            <h3 className="fiscalizador-dashboard-panel-title">
              Añadidos Recientemente
            </h3>
            <div className="fiscalizador-dashboard-recent-list">
              <div className="fiscalizador-dashboard-recent-item">
                <div className="fiscalizador-dashboard-recent-info">
                  <div className="fiscalizador-dashboard-recent-main">
                    <p className="fiscalizador-dashboard-recent-title">
                      Control de Llaves
                    </p>
                    <p className="fiscalizador-dashboard-recent-subtitle">
                      ARA-18-LOTE 44 URB PACIFICO
                    </p>
                  </div>
                  <div className="fiscalizador-dashboard-recent-dates">
                    <span className="fiscalizador-dashboard-recent-date">
                      Realización: 14/02/2025
                    </span>
                    <span className="fiscalizador-dashboard-recent-status">
                      Registro: 17/02/2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="fiscalizador-dashboard-recent-item">
                <div className="fiscalizador-dashboard-recent-info">
                  <div className="fiscalizador-dashboard-recent-main">
                    <p className="fiscalizador-dashboard-recent-title">
                      Inspecciones Laborales
                    </p>
                    <p className="fiscalizador-dashboard-recent-subtitle">
                      VILLA SAN LUIS URB ETERNA
                    </p>
                  </div>
                  <div className="fiscalizador-dashboard-recent-dates">
                    <span className="fiscalizador-dashboard-recent-date">
                      Realización: 14/02/2025
                    </span>
                    <span className="fiscalizador-dashboard-recent-status">
                      Registro: 17/02/2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="fiscalizador-dashboard-recent-item">
                <div className="fiscalizador-dashboard-recent-info">
                  <div className="fiscalizador-dashboard-recent-main">
                    <p className="fiscalizador-dashboard-recent-title">
                      Inspecciones Laborales
                    </p>
                    <p className="fiscalizador-dashboard-recent-subtitle">
                      ARA-18-LOTE 44 URB PACIFICO
                    </p>
                  </div>
                  <div className="fiscalizador-dashboard-recent-dates">
                    <span className="fiscalizador-dashboard-recent-date">
                      Realización: 14/02/2025
                    </span>
                    <span className="fiscalizador-dashboard-recent-status">
                      Registro: 17/02/2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="fiscalizador-dashboard-recent-item">
                <div className="fiscalizador-dashboard-recent-info">
                  <div className="fiscalizador-dashboard-recent-main">
                    <p className="fiscalizador-dashboard-recent-title">
                      Inspecciones Laborales
                    </p>
                    <p className="fiscalizador-dashboard-recent-subtitle">
                      AV PACIFICO URB 422 URB
                    </p>
                  </div>
                  <div className="fiscalizador-dashboard-recent-dates">
                    <span className="fiscalizador-dashboard-recent-date">
                      Realización: 14/02/2025
                    </span>
                    <span className="fiscalizador-dashboard-recent-status">
                      Registro: 17/02/2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="fiscalizador-dashboard-recent-item">
                <div className="fiscalizador-dashboard-recent-info">
                  <div className="fiscalizador-dashboard-recent-main">
                    <p className="fiscalizador-dashboard-recent-title">
                      Inspecciones Laborales
                    </p>
                    <p className="fiscalizador-dashboard-recent-subtitle">
                      AV PACIFICO URB 422 URB
                    </p>
                  </div>
                  <div className="fiscalizador-dashboard-recent-dates">
                    <span className="fiscalizador-dashboard-recent-date">
                      Realización: 14/02/2025
                    </span>
                    <span className="fiscalizador-dashboard-recent-status">
                      Registro: 17/02/2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico principal */}
          <div className="fiscalizador-dashboard-chart-container">
            <div className="fiscalizador-dashboard-chart-header">
              <h3 className="fiscalizador-dashboard-chart-title">
                Actividades Mensuales
              </h3>
              <select className="fiscalizador-dashboard-chart-filter">
                <option>Últimos 6 meses</option>
                <option>Último año</option>
                <option>Este mes</option>
              </select>
            </div>
            <div className="fiscalizador-dashboard-chart-content">
              <svg
                viewBox="0 0 900 400"
                className="fiscalizador-dashboard-line-chart"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="fiscalizador-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid lines horizontales */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={i}
                    x1="60"
                    y1={50 + i * 60}
                    x2="840"
                    y2={50 + i * 60}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Coordenadas exactas según datos: 25, 20, 15, 45, 35, 40 */}
                {(() => {
                  const data = [25, 20, 15, 45, 35, 40];
                  const maxValue = 50;
                  const chartHeight = 300;
                  const chartTop = 50;
                  const chartLeft = 60;
                  const chartRight = 840;
                  const chartWidth = chartRight - chartLeft;

                  const points = data.map((value, index) => ({
                    x: chartLeft + index * (chartWidth / (data.length - 1)),
                    y:
                      chartTop + chartHeight - (value / maxValue) * chartHeight,
                  }));

                  // Crear path con curvas suaves tipo Chart.js
                  const createSmoothPath = (points) => {
                    if (points.length < 2) return "";

                    let path = `M ${points[0].x} ${points[0].y}`;

                    for (let i = 1; i < points.length; i++) {
                      const cp1x =
                        points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
                      const cp1y = points[i - 1].y;
                      const cp2x =
                        points[i].x - (points[i].x - points[i - 1].x) / 3;
                      const cp2y = points[i].y;

                      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${points[i].x} ${points[i].y}`;
                    }

                    return path;
                  };

                  const smoothPath = createSmoothPath(points);

                  return (
                    <>
                      {/* Área bajo la curva con path suave */}
                      <path
                        d={`${smoothPath} L ${
                          points[points.length - 1].x
                        } 350 L ${points[0].x} 350 Z`}
                        fill="url(#fiscalizador-gradient)"
                      />

                      {/* Línea principal con curvas suaves como Chart.js */}
                      <path
                        d={smoothPath}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Puntos de datos */}
                      {points.map((point, i) => (
                        <circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="6"
                          fill="#3b82f6"
                          stroke="white"
                          strokeWidth="3"
                          style={{ cursor: "pointer" }}
                        />
                      ))}

                      {/* Labels del eje X */}
                      {[
                        "Enero",
                        "Febrero",
                        "Marzo",
                        "Abril",
                        "Mayo",
                        "Junio",
                      ].map((mes, i) => (
                        <text
                          key={mes}
                          x={points[i].x}
                          y={380}
                          textAnchor="middle"
                          className="fiscalizador-dashboard-chart-label"
                        >
                          {mes}
                        </text>
                      ))}
                    </>
                  );
                })()}

                {/* Labels del eje Y */}
                {[0, 10, 20, 30, 40, 50].map((val, i) => (
                  <text
                    key={val}
                    x="45"
                    y={355 - i * 60}
                    textAnchor="end"
                    className="fiscalizador-dashboard-chart-label"
                  >
                    {val}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
