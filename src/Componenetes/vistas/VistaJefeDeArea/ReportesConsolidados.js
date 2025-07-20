import React from "react";
import "./ReportesConsolidados.css";
import Lupa from "../../../Imagenes/Lupa.png";
import Completados from "../../../Imagenes/Completados.png";
import RelogArena from "../../../Imagenes/RelogArena.png";
import Promedio from "../../../Imagenes/Promedio.png";
import EficienciaGlobal from "../../../Imagenes/EficienciaGlobal.png";
import JpAzul from "../../../Imagenes/JpAzul.png";
import CsAzul from "../../../Imagenes/CsAzul.png";

const ReportesConsolidados = () => {
  const reportesRecientes = [
    {
      fecha: "04/04/2025",
      hora: "11:30 AM",
      fiscalizador: "Juan Pérez",
      codigo: "Cod: TC42",
      tipo: "Control de Ingresos",
      descripcion: "Mercado Central",
      estado: "Completado",
      supervisor: "Carlos Mendoza",
    },
    {
      fecha: "04/04/2025",
      hora: "11:30 AM",
      fiscalizador: "Juan Pérez",
      codigo: "Cod: TC43",
      tipo: "VECP",
      descripcion: "AV. Pardo 245",
      estado: "Completado",
      supervisor: "Carlos Mendoza",
    },
    {
      fecha: "04/04/2025",
      hora: "11:30 AM",
      fiscalizador: "Juan Pérez",
      codigo: "Cod: TC44",
      tipo: "Control Móvil",
      descripcion: "Zona industrial",
      estado: "Completado",
      supervisor: "Carlos Mendoza",
    },
    {
      fecha: "04/04/2025",
      hora: "11:30 AM",
      fiscalizador: "Juan Pérez",
      codigo: "Cod: TC42",
      tipo: "CIAE",
      descripcion: "Jr. Comercio 123",
      estado: "Completado",
      supervisor: "Carlos Mendoza",
    },
  ];

  return (
    <div className="vista-jefe-area-reportes-consolidados">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-reportes-consolidados-main-container">
        {/* Header Button */}
        <div className="vista-jefe-area-reportes-consolidados-header-section">
          <div className="vista-jefe-area-reportes-consolidados-header-buttons">
            <button className="vista-jefe-area-reportes-consolidados-btn-exportar">
              Exportar
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="vista-jefe-area-reportes-consolidados-stats-cards">
          <div className="vista-jefe-area-reportes-consolidados-stat-card">
            <h3>Total de Reportes</h3>
            <div className="vista-jefe-area-reportes-consolidados-stat-card-content">
              <div className="vista-jefe-area-reportes-consolidados-stat-card-left">
                <p>124</p>
                <div className="vista-jefe-area-reportes-consolidados-sub-text green">
                  Este mes
                </div>
              </div>
              <img
                src={Lupa}
                alt="Total de Reportes"
                className="vista-jefe-area-reportes-consolidados-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-reportes-consolidados-stat-card">
            <h3>Completados</h3>
            <div className="vista-jefe-area-reportes-consolidados-stat-card-content">
              <div className="vista-jefe-area-reportes-consolidados-stat-card-left">
                <p>198</p>
                <div className="vista-jefe-area-reportes-consolidados-sub-text green">
                  96.1%
                </div>
              </div>
              <img
                src={Completados}
                alt="Completados"
                className="vista-jefe-area-reportes-consolidados-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-reportes-consolidados-stat-card">
            <h3>Pendientes</h3>
            <div className="vista-jefe-area-reportes-consolidados-stat-card-content">
              <div className="vista-jefe-area-reportes-consolidados-stat-card-left">
                <p>49</p>
                <div className="vista-jefe-area-reportes-consolidados-sub-text orange">
                  3.9%
                </div>
              </div>
              <img
                src={RelogArena}
                alt="Pendientes"
                className="vista-jefe-area-reportes-consolidados-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-reportes-consolidados-stat-card">
            <h3>Promedio Diario</h3>
            <div className="vista-jefe-area-reportes-consolidados-stat-card-content">
              <div className="vista-jefe-area-reportes-consolidados-stat-card-left">
                <p>47</p>
                <div className="vista-jefe-area-reportes-consolidados-sub-text green">
                  +8% vs mes anterior
                </div>
              </div>
              <img
                src={Promedio}
                alt="Promedio Diario"
                className="vista-jefe-area-reportes-consolidados-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-reportes-consolidados-stat-card">
            <h3>Eficiencia Global</h3>
            <div className="vista-jefe-area-reportes-consolidados-stat-card-content">
              <div className="vista-jefe-area-reportes-consolidados-stat-card-left">
                <p>87%</p>
                <div className="vista-jefe-area-reportes-consolidados-sub-text green">
                  +3% este mes
                </div>
              </div>
              <img
                src={EficienciaGlobal}
                alt="Eficiencia Global"
                className="vista-jefe-area-reportes-consolidados-stat-card-icon"
              />
            </div>
          </div>
        </div>

        {/* Filtros de Búsqueda */}
        <div className="vista-jefe-area-reportes-consolidados-filtros-section">
          <div className="vista-jefe-area-reportes-consolidados-filtros-header">
            <h3>Filtros de Búsqueda</h3>
            <span className="vista-jefe-area-reportes-consolidados-limpiar-filtros">
              Limpiar Filtros
            </span>
          </div>
          <div className="vista-jefe-area-reportes-consolidados-filtros-inputs">
            <div className="vista-jefe-area-reportes-consolidados-filtro-group">
              <label className="vista-jefe-area-reportes-consolidados-filtro-label">
                Fecha Desde
              </label>
              <input
                type="date"
                defaultValue="2025-04-01"
                className="vista-jefe-area-reportes-consolidados-filtro-input"
              />
            </div>
            <div className="vista-jefe-area-reportes-consolidados-filtro-group">
              <label className="vista-jefe-area-reportes-consolidados-filtro-label">
                Fecha Hasta
              </label>
              <input
                type="date"
                defaultValue="2025-04-04"
                className="vista-jefe-area-reportes-consolidados-filtro-input"
              />
            </div>
            <div className="vista-jefe-area-reportes-consolidados-filtro-group">
              <label className="vista-jefe-area-reportes-consolidados-filtro-label">
                Tipo de Actividad
              </label>
              <select className="vista-jefe-area-reportes-consolidados-filtro-select">
                <option>Todas las actividades</option>
                <option>Control de Ingresos</option>
                <option>VECP</option>
                <option>Control Móvil</option>
                <option>CIAE</option>
              </select>
            </div>
            <div className="vista-jefe-area-reportes-consolidados-filtro-group">
              <label className="vista-jefe-area-reportes-consolidados-filtro-label">
                Estado
              </label>
              <select className="vista-jefe-area-reportes-consolidados-filtro-select">
                <option>Todos los estados</option>
                <option>Completado</option>
                <option>Pendiente</option>
                <option>En Proceso</option>
              </select>
            </div>
            <div className="vista-jefe-area-reportes-consolidados-filtro-group">
              <label className="vista-jefe-area-reportes-consolidados-filtro-label">
                Fiscalizador
              </label>
              <select className="vista-jefe-area-reportes-consolidados-filtro-select">
                <option>Todos los fiscalizadores</option>
                <option>Juan Pérez</option>
                <option>Carmen Silva</option>
                <option>Carlos López</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="vista-jefe-area-reportes-consolidados-content-sections">
          {/* Reportes por Tipo de Actividad */}
          <div className="vista-jefe-area-reportes-consolidados-reportes-tipo-section">
            <div className="vista-jefe-area-reportes-consolidados-section-header">
              <h3>Reportes por Tipo de Actividad</h3>
            </div>
            <div className="vista-jefe-area-reportes-consolidados-reportes-tipo-list">
              <div className="vista-jefe-area-reportes-consolidados-reporte-tipo-item">
                <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-name">
                  Control de Ingresos (Punto Fijo)
                </span>
                <div className="vista-jefe-area-reportes-consolidados-reporte-tipo-stats">
                  <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-count">
                    187
                  </span>
                  <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-percentage">
                    15.0%
                  </span>
                </div>
              </div>
              <div className="vista-jefe-area-reportes-consolidados-reporte-tipo-item">
                <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-name">
                  VECP
                </span>
                <div className="vista-jefe-area-reportes-consolidados-reporte-tipo-stats">
                  <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-count">
                    156
                  </span>
                  <span className="vista-jefe-area-reportes-consolidados-reporte-tipo-percentage">
                    12.5%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Rendimiento por Fiscalizador */}
          <div className="vista-jefe-area-reportes-consolidados-rendimiento-section">
            <div className="vista-jefe-area-reportes-consolidados-section-header">
              <h3>Rendimiento por Fiscalizador</h3>
              <a
                href="#"
                className="vista-jefe-area-reportes-consolidados-ver-todos"
              >
                Ver todos los fiscalizadores
              </a>
            </div>
            <div className="vista-jefe-area-reportes-consolidados-fiscalizadores-rendimiento">
              <div className="vista-jefe-area-reportes-consolidados-fiscalizador-rendimiento-item">
                <img
                  src={CsAzul}
                  alt="Carmen Silva"
                  className="vista-jefe-area-reportes-consolidados-fiscalizador-avatar"
                />
                <div className="vista-jefe-area-reportes-consolidados-fiscalizador-info">
                  <div className="vista-jefe-area-reportes-consolidados-fiscalizador-name">
                    Carmen Silva
                  </div>
                </div>
                <div className="vista-jefe-area-reportes-consolidados-fiscalizador-rendimiento-stats">
                  <span className="vista-jefe-area-reportes-consolidados-fiscalizador-count">
                    187
                  </span>
                  <span className="vista-jefe-area-reportes-consolidados-fiscalizador-percentage">
                    15.0%
                  </span>
                </div>
              </div>
              <div className="vista-jefe-area-reportes-consolidados-fiscalizador-rendimiento-item">
                <img
                  src={JpAzul}
                  alt="Juan Pérez"
                  className="vista-jefe-area-reportes-consolidados-fiscalizador-avatar"
                />
                <div className="vista-jefe-area-reportes-consolidados-fiscalizador-info">
                  <div className="vista-jefe-area-reportes-consolidados-fiscalizador-name">
                    Juan Pérez
                  </div>
                </div>
                <div className="vista-jefe-area-reportes-consolidados-fiscalizador-rendimiento-stats">
                  <span className="vista-jefe-area-reportes-consolidados-fiscalizador-count">
                    156
                  </span>
                  <span className="vista-jefe-area-reportes-consolidados-fiscalizador-percentage">
                    12.5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reportes Recientes */}
        <div className="vista-jefe-area-reportes-consolidados-reportes-recientes-section">
          <div className="vista-jefe-area-reportes-consolidados-reportes-recientes-header">
            <h3>Reportes Recientes (50 más recientes)</h3>
            <div className="vista-jefe-area-reportes-consolidados-reportes-info">
              <span>Mostrando 50 de 1,247 reportes</span>
              <a
                href="#"
                className="vista-jefe-area-reportes-consolidados-ver-todos"
                style={{ marginLeft: "20px" }}
              >
                Ver todos
              </a>
            </div>
          </div>

          <table className="vista-jefe-area-reportes-consolidados-reportes-table">
            <thead>
              <tr>
                <th>FECHA/HORA</th>
                <th>FISCALIZADOR</th>
                <th>TIPO DE ACTIVIDAD</th>
                <th>DESCRIPCIÓN</th>
                <th>ESTADO</th>
                <th>SUPERVISOR</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {reportesRecientes.map((reporte, index) => (
                <tr key={index}>
                  <td>
                    <div className="vista-jefe-area-reportes-consolidados-fecha-hora">
                      <div className="vista-jefe-area-reportes-consolidados-fecha">
                        {reporte.fecha}
                      </div>
                      <div className="vista-jefe-area-reportes-consolidados-hora">
                        {reporte.hora}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="vista-jefe-area-reportes-consolidados-fiscalizador-table-info">
                      <img
                        src={JpAzul}
                        alt={reporte.fiscalizador}
                        className="vista-jefe-area-reportes-consolidados-fiscalizador-table-avatar"
                      />
                      <div className="vista-jefe-area-reportes-consolidados-fiscalizador-table-details">
                        <div className="vista-jefe-area-reportes-consolidados-fiscalizador-table-name">
                          {reporte.fiscalizador}
                        </div>
                        <div className="vista-jefe-area-reportes-consolidados-fiscalizador-table-code">
                          {reporte.codigo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{reporte.tipo}</td>
                  <td>{reporte.descripcion}</td>
                  <td>
                    <span className="vista-jefe-area-reportes-consolidados-status-badge completado">
                      {reporte.estado}
                    </span>
                  </td>
                  <td>{reporte.supervisor}</td>
                  <td>
                    <div className="vista-jefe-area-reportes-consolidados-actions-buttons">
                      <button className="vista-jefe-area-reportes-consolidados-action-btn ver">
                        Ver
                      </button>
                      <button className="vista-jefe-area-reportes-consolidados-action-btn descargar">
                        Descargar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="vista-jefe-area-reportes-consolidados-pagination">
            <div className="vista-jefe-area-reportes-consolidados-pagination-info">
              Mostrando 1-5 de 1,247 reportes
            </div>
            <div className="vista-jefe-area-reportes-consolidados-pagination-controls">
              <button
                className="vista-jefe-area-reportes-consolidados-pagination-btn"
                disabled
              >
                Anterior
              </button>
              <button className="vista-jefe-area-reportes-consolidados-pagination-btn active">
                1
              </button>
              <button className="vista-jefe-area-reportes-consolidados-pagination-btn">
                2
              </button>
              <button className="vista-jefe-area-reportes-consolidados-pagination-btn">
                3
              </button>
              <span>...</span>
              <button className="vista-jefe-area-reportes-consolidados-pagination-btn">
                250
              </button>
              <button className="vista-jefe-area-reportes-consolidados-pagination-btn">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FIN del contenedor principal */}
    </div>
  );
};

export default ReportesConsolidados;
