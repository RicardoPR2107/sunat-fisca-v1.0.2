import React, { useState } from "react";
import "./Reportes.css";
import TotalDeReportesIcon from "../../../Imagenes/TotalDeReportes.png";
import CompletadosIcon from "../../../Imagenes/Completados.png";
import PendientesIcon from "../../../Imagenes/Pendientes.png";

const Reportes = () => {
  const [selectedDate, setSelectedDate] = useState("dd/mm/aaaa");
  const [selectedStatus, setSelectedStatus] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Datos de ejemplo para la tabla
  const reportData = [
    {
      codigo: "TC42",
      fiscalizador: "Juan Pérez",
      fechaRealizacion: "28-03-2025",
      fechaRegistro: "29-03-2025",
      tipo: "Control de Llaves",
      estado: "Completado",
    },
    {
      codigo: "TC42",
      fiscalizador: "Juan Pérez",
      fechaRealizacion: "28-03-2025",
      fechaRegistro: "-",
      tipo: "Control de Llaves",
      estado: "Pendiente",
    },
    {
      codigo: "TC42",
      fiscalizador: "Juan Pérez",
      fechaRealizacion: "28-03-2025",
      fechaRegistro: "29-03-2025",
      tipo: "Control de Llaves",
      estado: "Completado",
    },
    {
      codigo: "TC42",
      fiscalizador: "Juan Pérez",
      fechaRealizacion: "28-03-2025",
      fechaRegistro: "-",
      tipo: "Control de Llaves",
      estado: "Pendiente",
    },
    {
      codigo: "TC42",
      fiscalizador: "Juan Pérez",
      fechaRealizacion: "28-03-2025",
      fechaRegistro: "29-03-2025",
      tipo: "Control de Llaves",
      estado: "Completado",
    },
  ];

  return (
    <div className="supervisor-reportes-main-container">
      <div className="supervisor-reportes">
        <div className="supervisor-reportes-content">
          {/* Tarjetas de estadísticas */}
          <div className="supervisor-reportes-stats-container">
            <div className="supervisor-reportes-stat-card supervisor-reportes-stat-total">
              <div className="supervisor-reportes-stat-content">
                <div className="supervisor-reportes-stat-text">
                  <span className="supervisor-reportes-stat-label">
                    Total de Reportes
                  </span>
                  <div className="supervisor-reportes-stat-value">148</div>
                  <span className="supervisor-reportes-stat-description">
                    Este mes
                  </span>
                </div>
                <div className="supervisor-reportes-stat-icon">
                  <img src={TotalDeReportesIcon} alt="Total de Reportes" />
                </div>
              </div>
            </div>

            <div className="supervisor-reportes-stat-card supervisor-reportes-stat-completed">
              <div className="supervisor-reportes-stat-content">
                <div className="supervisor-reportes-stat-text">
                  <span className="supervisor-reportes-stat-label">
                    Completados
                  </span>
                  <div className="supervisor-reportes-stat-value">134</div>
                  <span className="supervisor-reportes-stat-description">
                    91% del total
                  </span>
                </div>
                <div className="supervisor-reportes-stat-icon">
                  <img src={CompletadosIcon} alt="Completados" />
                </div>
              </div>
            </div>

            <div className="supervisor-reportes-stat-card supervisor-reportes-stat-pending">
              <div className="supervisor-reportes-stat-content">
                <div className="supervisor-reportes-stat-text">
                  <span className="supervisor-reportes-stat-label">
                    Pendientes
                  </span>
                  <div className="supervisor-reportes-stat-value">14</div>
                  <span className="supervisor-reportes-stat-description">
                    9% del total
                  </span>
                </div>
                <div className="supervisor-reportes-stat-icon">
                  <img src={PendientesIcon} alt="Pendientes" />
                </div>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="supervisor-reportes-filters-container">
            <div className="supervisor-reportes-filter-group">
              <label>Fecha</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="supervisor-reportes-filter-select"
              >
                <option>dd/mm/aaaa</option>
                <option>Hoy</option>
                <option>Esta semana</option>
                <option>Este mes</option>
              </select>
            </div>

            <div className="supervisor-reportes-filter-group">
              <label>Estado:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="supervisor-reportes-filter-select"
              >
                <option>Todos</option>
                <option>Completado</option>
                <option>Pendiente</option>
              </select>
            </div>

            <div className="supervisor-reportes-filter-group">
              <label>Tipo:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="supervisor-reportes-filter-select"
              >
                <option>Todos</option>
                <option>Control de Llaves</option>
                <option>Inspección</option>
                <option>Auditoría</option>
              </select>
            </div>

            <div className="supervisor-reportes-search-container">
              <input
                type="text"
                placeholder="Buscar fiscalizador..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="supervisor-reportes-search-input"
              />
            </div>
          </div>

          {/* Tabla de reportes */}
          <div className="supervisor-reportes-table-container">
            <h3 className="supervisor-reportes-table-title">
              Lista de Reportes
            </h3>

            <table className="supervisor-reportes-table">
              <thead>
                <tr>
                  <th>Cód.</th>
                  <th>FISCALIZADOR</th>
                  <th>FECHA REALIZACIÓN</th>
                  <th>FECHA REGISTRO</th>
                  <th>TIPO DE ACTIVIDAD</th>
                  <th>ESTADO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index} className="supervisor-reportes-table-row">
                    <td>{report.codigo}</td>
                    <td>{report.fiscalizador}</td>
                    <td>{report.fechaRealizacion}</td>
                    <td>{report.fechaRegistro}</td>
                    <td>{report.tipo}</td>
                    <td>
                      <span
                        className={`supervisor-reportes-status-badge ${report.estado.toLowerCase()}`}
                      >
                        {report.estado}
                      </span>
                    </td>
                    <td>
                      <div className="supervisor-reportes-action-buttons">
                        <button className="supervisor-reportes-btn-ver">
                          Ver Detalle
                        </button>
                        <button className="supervisor-reportes-btn-descargar">
                          Descargar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Paginación */}
            <div className="supervisor-reportes-pagination">
              <span className="supervisor-reportes-pagination-info">
                Mostrando 1 a 8 de 148 reportes
              </span>
              <div className="supervisor-reportes-pagination-controls">
                <button className="supervisor-reportes-pagination-btn">
                  Anterior
                </button>
                <button className="supervisor-reportes-pagination-btn active">
                  1
                </button>
                <button className="supervisor-reportes-pagination-btn">
                  2
                </button>
                <button className="supervisor-reportes-pagination-btn">
                  3
                </button>
                <button className="supervisor-reportes-pagination-btn">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
