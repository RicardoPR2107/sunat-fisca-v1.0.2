import React from "react";
import "./Fiscalizadores.css";
import Lupa from "../../../Imagenes/Lupa.png";
import ReportesDelDia from "../../../Imagenes/ReportesDelDia.png";
import Promedio from "../../../Imagenes/Promedio.png";
import Seguridad from "../../../Imagenes/Seguridad.png";
import PuntoRojo from "../../../Imagenes/PuntoRojo.png";
import JpAzul from "../../../Imagenes/JpAzul.png";
import JpRojo from "../../../Imagenes/JpRojo.png";

const Fiscalizadores = () => {
  const fiscalizadores = [
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC42",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 6,
      eficiencia: 92,
      actividad: "Control de Ingresos - 09:30",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC43",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 5,
      eficiencia: 89,
      actividad: "VECP - 10:15",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC44",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 4,
      eficiencia: 85,
      actividad: "Control Móvil - 11:00",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC45",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 3,
      eficiencia: 78,
      actividad: "CIAE - Pendiente",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC46",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 7,
      eficiencia: 94,
      actividad: "Sustentación de Mercaderías - 08:45",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC47",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 5,
      eficiencia: 88,
      actividad: "Control de Llaves - 09:15",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC48",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 6,
      eficiencia: 91,
      actividad: "Inspecciones Laborales - 10:30",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC49",
      estado: "Activo",
      supervisor: "Carlos Mendoza",
      reportes: 3,
      eficiencia: 89,
      actividad: "Control de Ingresos - 09:30",
    },
    {
      id: "JP",
      nombre: "Juan Pérez",
      codigo: "Reg: TC50",
      estado: "Inactivo",
      supervisor: "Carlos Mendoza",
      reportes: 0,
      eficiencia: 0,
      actividad: "En licencia",
    },
  ];

  return (
    <div className="vista-jefe-area-fiscalizadores">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-fiscalizadores-main-container">
        {/* Header Buttons */}
        <div className="vista-jefe-area-fiscalizadores-header-section">
          <div className="vista-jefe-area-fiscalizadores-header-buttons">
            <button className="vista-jefe-area-fiscalizadores-btn-agregar">
              + Agregar Fiscalizador
            </button>
            <button className="vista-jefe-area-fiscalizadores-btn-exportar">
              Exportar
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="vista-jefe-area-fiscalizadores-stats-cards">
          <div className="vista-jefe-area-fiscalizadores-stat-card">
            <h3>Total de Fiscalizadores</h3>
            <div className="vista-jefe-area-fiscalizadores-stat-card-content">
              <div className="vista-jefe-area-fiscalizadores-stat-card-left">
                <p>8</p>
                <div className="vista-jefe-area-fiscalizadores-sub-text green">
                  Activos
                </div>
              </div>
              <img
                src={Lupa}
                alt="Total de Fiscalizadores"
                className="vista-jefe-area-fiscalizadores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-fiscalizadores-stat-card">
            <h3>Reportes Hoy</h3>
            <div className="vista-jefe-area-fiscalizadores-stat-card-content">
              <div className="vista-jefe-area-fiscalizadores-stat-card-left">
                <p>47</p>
                <div className="vista-jefe-area-fiscalizadores-sub-text green">
                  +12% vs ayer
                </div>
              </div>
              <img
                src={ReportesDelDia}
                alt="Reportes Hoy"
                className="vista-jefe-area-fiscalizadores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-fiscalizadores-stat-card">
            <h3>Eficiencia Promedio</h3>
            <div className="vista-jefe-area-fiscalizadores-stat-card-content">
              <div className="vista-jefe-area-fiscalizadores-stat-card-left">
                <p>87%</p>
                <div className="vista-jefe-area-fiscalizadores-sub-text green">
                  +5% este mes
                </div>
              </div>
              <img
                src={Promedio}
                alt="Eficiencia Promedio"
                className="vista-jefe-area-fiscalizadores-stat-card-icon"
              />
            </div>
          </div>

          <div className="vista-jefe-area-fiscalizadores-stat-card">
            <h3>En Licencia</h3>
            <div className="vista-jefe-area-fiscalizadores-stat-card-content">
              <div className="vista-jefe-area-fiscalizadores-stat-card-left">
                <p>1</p>
                <div className="vista-jefe-area-fiscalizadores-sub-text orange">
                  Temporal
                </div>
              </div>
              <img
                src={Seguridad}
                alt="En Licencia"
                className="vista-jefe-area-fiscalizadores-stat-card-icon large"
              />
            </div>
          </div>

          <div className="vista-jefe-area-fiscalizadores-stat-card">
            <h3>Actividades Pendientes</h3>
            <div className="vista-jefe-area-fiscalizadores-stat-card-content">
              <div className="vista-jefe-area-fiscalizadores-stat-card-left">
                <p>3</p>
                <div className="vista-jefe-area-fiscalizadores-sub-text red">
                  Requieren atención
                </div>
              </div>
              <img
                src={PuntoRojo}
                alt="Actividades Pendientes"
                className="vista-jefe-area-fiscalizadores-stat-card-icon"
              />
            </div>
          </div>
        </div>

        {/* Filtros de Búsqueda */}
        <div className="vista-jefe-area-fiscalizadores-filtros-section">
          <div className="vista-jefe-area-fiscalizadores-filtros-header">
            <h3>Filtros de Búsqueda</h3>
            <span className="vista-jefe-area-fiscalizadores-limpiar-filtros">
              Limpiar Filtros
            </span>
          </div>
          <div className="vista-jefe-area-fiscalizadores-filtros-inputs">
            <div className="vista-jefe-area-fiscalizadores-filtro-group">
              <label className="vista-jefe-area-fiscalizadores-filtro-label">
                Buscar Fiscalizador
              </label>
              <input
                type="text"
                placeholder="Nombre o Código de Registros"
                className="vista-jefe-area-fiscalizadores-filtro-input"
              />
            </div>
            <div className="vista-jefe-area-fiscalizadores-filtro-group">
              <label className="vista-jefe-area-fiscalizadores-filtro-label">
                Estado
              </label>
              <select className="vista-jefe-area-fiscalizadores-filtro-select">
                <option>Todos los estados</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
            <div className="vista-jefe-area-fiscalizadores-filtro-group">
              <label className="vista-jefe-area-fiscalizadores-filtro-label">
                Eficiencia
              </label>
              <select className="vista-jefe-area-fiscalizadores-filtro-select">
                <option>Todas las eficiencias</option>
                <option>90% - 100%</option>
                <option>80% - 89%</option>
                <option>70% - 79%</option>
                <option>Menos del 70%</option>
              </select>
            </div>
          </div>
        </div>

        {/* Información Fiscalizadores */}
        <div className="vista-jefe-area-fiscalizadores-fiscalizadores-section">
          <div className="vista-jefe-area-fiscalizadores-fiscalizadores-header">
            <h3>Información Fiscalizadores</h3>
            <span className="vista-jefe-area-fiscalizadores-mostrar-info">
              Mostrando 8 de 8 fiscalizadores
            </span>
          </div>

          <table className="vista-jefe-area-fiscalizadores-fiscalizadores-table">
            <thead>
              <tr>
                <th>FISCALIZADOR</th>
                <th>ESTADO</th>
                <th>SUPERVISOR</th>
                <th>REPORTES HOY</th>
                <th>EFICIENCIA</th>
                <th>ÚLTIMA ACTIVIDAD</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {fiscalizadores.map((fiscalizador, index) => (
                <tr key={index}>
                  <td>
                    <div className="vista-jefe-area-fiscalizadores-fiscalizador-info">
                      <img
                        src={fiscalizador.estado === "Activo" ? JpAzul : JpRojo}
                        alt={fiscalizador.nombre}
                        className="vista-jefe-area-fiscalizadores-fiscalizador-avatar"
                      />
                      <div className="vista-jefe-area-fiscalizadores-fiscalizador-details">
                        <div className="vista-jefe-area-fiscalizadores-fiscalizador-name">
                          {fiscalizador.nombre}
                        </div>
                        <div className="vista-jefe-area-fiscalizadores-fiscalizador-code">
                          {fiscalizador.codigo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`vista-jefe-area-fiscalizadores-status-badge ${fiscalizador.estado.toLowerCase()}`}
                    >
                      {fiscalizador.estado}
                    </span>
                  </td>
                  <td>
                    <div className="vista-jefe-area-fiscalizadores-supervisor-name">
                      {fiscalizador.supervisor}
                    </div>
                  </td>
                  <td>{fiscalizador.reportes}</td>
                  <td>
                    <div className="vista-jefe-area-fiscalizadores-efficiency-container">
                      <div className="vista-jefe-area-fiscalizadores-efficiency-bar">
                        <div
                          className="vista-jefe-area-fiscalizadores-efficiency-fill"
                          style={{ width: `${fiscalizador.eficiencia}%` }}
                        ></div>
                      </div>
                      <div className="vista-jefe-area-fiscalizadores-efficiency-text">
                        {fiscalizador.eficiencia}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="vista-jefe-area-fiscalizadores-activity-text">
                      {fiscalizador.actividad}
                    </div>
                  </td>
                  <td>
                    <div className="vista-jefe-area-fiscalizadores-actions-buttons">
                      <button className="vista-jefe-area-fiscalizadores-action-btn ver">
                        Ver
                      </button>
                      <button className="vista-jefe-area-fiscalizadores-action-btn editar">
                        Editar
                      </button>
                      <button className="vista-jefe-area-fiscalizadores-action-btn reasignar">
                        Reasignar
                      </button>
                      {fiscalizador.estado === "Activo" ? (
                        <button className="vista-jefe-area-fiscalizadores-action-btn desactivar">
                          Desactivar
                        </button>
                      ) : (
                        <button className="vista-jefe-area-fiscalizadores-action-btn activar">
                          Activar
                        </button>
                      )}
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

export default Fiscalizadores;
