import React, { useState } from "react";
import "./Fiscalizadores.css";
import TotalDeFiscalizadores from "../../../Imagenes/TotalDeFiscalizadores.png";
import ReportesDelDia from "../../../Imagenes/ReportesDelDia.png";
import ActividadesCompletadas from "../../../Imagenes/ActividadesCompletadas.png";
import Seguridad from "../../../Imagenes/Seguridad.png";
import JpAzul from "../../../Imagenes/JpAzul.png";
import JpPlomo from "../../../Imagenes/JpRojo.png";

const Fiscalizadores = () => {
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");
  const [actividadesFiltro, setActividadesFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const fiscalizadoresData = [
    {
      id: 1,
      nombre: "Juan Pérez",
      codigo: "JP",
      actividadesAsignadas: 12,
      reportesHoy: 8,
      reportesMes: 156,
      estado: "Activo",
      avatar: JpAzul,
    },
    {
      id: 2,
      nombre: "María López",
      codigo: "ML",
      actividadesAsignadas: 15,
      reportesHoy: 12,
      reportesMes: 234,
      estado: "Activo",
      avatar: JpAzul,
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      codigo: "CR",
      actividadesAsignadas: 8,
      reportesHoy: 0,
      reportesMes: 98,
      estado: "Inactivo",
      avatar: JpPlomo,
    },
    {
      id: 4,
      nombre: "Ana García",
      codigo: "AG",
      actividadesAsignadas: 20,
      reportesHoy: 15,
      reportesMes: 289,
      estado: "Activo",
      avatar: JpAzul,
    },
    {
      id: 5,
      nombre: "Pedro Martínez",
      codigo: "PM",
      actividadesAsignadas: 10,
      reportesHoy: 7,
      reportesMes: 145,
      estado: "Activo",
      avatar: JpAzul,
    },
    {
      id: 6,
      nombre: "Laura Sánchez",
      codigo: "LS",
      actividadesAsignadas: 18,
      reportesHoy: 14,
      reportesMes: 267,
      estado: "Activo",
      avatar: JpAzul,
    },
    {
      id: 7,
      nombre: "Roberto Díaz",
      codigo: "RD",
      actividadesAsignadas: 5,
      reportesHoy: 0,
      reportesMes: 45,
      estado: "Inactivo",
      avatar: JpPlomo,
    },
    {
      id: 8,
      nombre: "Carmen Flores",
      codigo: "CF",
      actividadesAsignadas: 22,
      reportesHoy: 18,
      reportesMes: 312,
      estado: "Activo",
      avatar: JpAzul,
    },
  ];

  const itemsPorPagina = 8;
  const totalPaginas = Math.ceil(fiscalizadoresData.length / itemsPorPagina);

  const handlePaginaAnterior = () => {
    const grupoActual = Math.floor((paginaActual - 1) / 3);
    if (grupoActual > 0) {
      setPaginaActual(grupoActual * 3);
    }
  };

  const handlePaginaSiguiente = () => {
    const grupoActual = Math.floor((paginaActual - 1) / 3);
    const siguienteGrupo = (grupoActual + 1) * 3 + 1;
    if (siguienteGrupo <= totalPaginas) {
      setPaginaActual(siguienteGrupo);
    }
  };

  const getPaginasVisibles = () => {
    const inicio = Math.floor((paginaActual - 1) / 3) * 3 + 1;
    const fin = Math.min(inicio + 2, totalPaginas);
    const paginas = [];
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  };

  return (
    <div className="supervisor-fiscalizadores-main-container">
      <div className="supervisor-fiscalizadores-page">
        <div className="supervisor-fiscalizadores-content">
          <div className="supervisor-fiscalizadores-main-container-inner">
            <div className="supervisor-fiscalizadores-stats-cards">
              <div className="supervisor-fiscalizadores-stat-card">
                <div className="supervisor-fiscalizadores-stat-content">
                  <div className="supervisor-fiscalizadores-stat-text">
                    <h3>Total de Fiscalizadores</h3>
                    <p className="supervisor-fiscalizadores-stat-number">8</p>
                    <p className="supervisor-fiscalizadores-stat-description">
                      Área Masivos
                    </p>
                  </div>
                  <img
                    src={TotalDeFiscalizadores}
                    alt="Total"
                    className="supervisor-fiscalizadores-stat-icon"
                  />
                </div>
              </div>

              <div className="supervisor-fiscalizadores-stat-card">
                <div className="supervisor-fiscalizadores-stat-content">
                  <div className="supervisor-fiscalizadores-stat-text">
                    <h3>Reportes del Día</h3>
                    <p className="supervisor-fiscalizadores-stat-number">45</p>
                    <p className="supervisor-fiscalizadores-stat-description">
                      Total del Día
                    </p>
                  </div>
                  <img
                    src={ReportesDelDia}
                    alt="Reportes"
                    className="supervisor-fiscalizadores-stat-icon"
                  />
                </div>
              </div>

              <div className="supervisor-fiscalizadores-stat-card">
                <div className="supervisor-fiscalizadores-stat-content">
                  <div className="supervisor-fiscalizadores-stat-text">
                    <h3>Actividades Completadas</h3>
                    <p className="supervisor-fiscalizadores-stat-number">
                      59/88
                    </p>
                    <p className="supervisor-fiscalizadores-stat-description">
                      67% completado
                    </p>
                  </div>
                  <img
                    src={ActividadesCompletadas}
                    alt="Actividades"
                    className="supervisor-fiscalizadores-stat-icon"
                  />
                </div>
              </div>

              <div className="supervisor-fiscalizadores-stat-card">
                <div className="supervisor-fiscalizadores-stat-content">
                  <div className="supervisor-fiscalizadores-stat-text">
                    <h3>Sin Reportar</h3>
                    <p className="supervisor-fiscalizadores-stat-number">2</p>
                    <p className="supervisor-fiscalizadores-stat-description">
                      Fiscalizadores
                    </p>
                  </div>
                  <img
                    src={Seguridad}
                    alt="Sin Reportar"
                    className="supervisor-fiscalizadores-stat-icon"
                  />
                </div>
              </div>
            </div>

            <div className="supervisor-fiscalizadores-filters-container">
              <div className="supervisor-fiscalizadores-filter-group">
                <label>Estado:</label>
                <select
                  value={estadoFiltro}
                  onChange={(e) => setEstadoFiltro(e.target.value)}
                  className="supervisor-fiscalizadores-filter-select"
                >
                  <option value="Todos">Todos</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              <div className="supervisor-fiscalizadores-filter-group">
                <label>Actividades:</label>
                <select
                  value={actividadesFiltro}
                  onChange={(e) => setActividadesFiltro(e.target.value)}
                  className="supervisor-fiscalizadores-filter-select"
                >
                  <option value="Todos">Todos</option>
                  <option value="Completadas">Completadas</option>
                  <option value="Pendientes">Pendientes</option>
                </select>
              </div>

              <div className="supervisor-fiscalizadores-search-container">
                <input
                  type="text"
                  placeholder="Buscar fiscalizador..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="supervisor-fiscalizadores-search-input"
                />
              </div>
            </div>

            <div className="supervisor-fiscalizadores-list-section">
              <h2>Lista de Fiscalizadores - Área Masivos</h2>

              <div className="supervisor-fiscalizadores-table-container">
                <table className="supervisor-fiscalizadores-table">
                  <thead>
                    <tr>
                      <th>FISCALIZADOR</th>
                      <th>ACTIVIDADES ASIGNADAS</th>
                      <th>REPORTES HOY</th>
                      <th>REPORTES MES</th>
                      <th>ESTADO</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiscalizadoresData.map((fiscalizador) => (
                      <tr
                        key={fiscalizador.id}
                        className={
                          fiscalizador.estado === "Inactivo"
                            ? "supervisor-fiscalizadores-row-inactive"
                            : "supervisor-fiscalizadores-row-active"
                        }
                      >
                        <td>
                          <div className="supervisor-fiscalizadores-info">
                            <img
                              src={fiscalizador.avatar}
                              alt={fiscalizador.codigo}
                              className="supervisor-fiscalizadores-avatar"
                            />
                            <div>
                              <p className="supervisor-fiscalizadores-nombre">
                                {fiscalizador.nombre}
                              </p>
                              <p className="supervisor-fiscalizadores-codigo">
                                Código: {fiscalizador.codigo}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="supervisor-fiscalizadores-text-center">
                          {fiscalizador.actividadesAsignadas}
                        </td>
                        <td className="supervisor-fiscalizadores-text-center">
                          {fiscalizador.reportesHoy}
                        </td>
                        <td className="supervisor-fiscalizadores-text-center">
                          {fiscalizador.reportesMes}
                        </td>
                        <td>
                          <span
                            className={`supervisor-fiscalizadores-estado ${fiscalizador.estado.toLowerCase()}`}
                          >
                            {fiscalizador.estado}
                          </span>
                        </td>
                        <td>
                          <div className="supervisor-fiscalizadores-acciones">
                            <button className="supervisor-fiscalizadores-btn-ver">
                              Ver
                            </button>
                            <button className="supervisor-fiscalizadores-btn-editar">
                              Editar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="supervisor-fiscalizadores-pagination-container">
                <div className="supervisor-fiscalizadores-pagination-info">
                  Mostrando 1 a 8 de fiscalizadores
                </div>
                <div className="supervisor-fiscalizadores-pagination-controls">
                  <button
                    className="supervisor-fiscalizadores-pagination-btn"
                    onClick={handlePaginaAnterior}
                    disabled={Math.floor((paginaActual - 1) / 3) === 0}
                  >
                    Anterior
                  </button>

                  {getPaginasVisibles().map((pagina) => (
                    <button
                      key={pagina}
                      className={`supervisor-fiscalizadores-pagination-number ${
                        paginaActual === pagina ? "active" : ""
                      }`}
                      onClick={() => setPaginaActual(pagina)}
                    >
                      {pagina}
                    </button>
                  ))}

                  <button
                    className="supervisor-fiscalizadores-pagination-btn"
                    onClick={handlePaginaSiguiente}
                    disabled={
                      Math.floor((paginaActual - 1) / 3) ===
                      Math.floor((totalPaginas - 1) / 3)
                    }
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiscalizadores;
