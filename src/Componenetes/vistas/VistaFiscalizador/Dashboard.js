import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard - Fiscalizador</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total de Actividades</h3>
          <p>127</p>
        </div>
        <div className="stat-card">
          <h3>Promedio Diario</h3>
          <p>3.5</p>
        </div>
        <div className="stat-card">
          <h3>Actividad más Frecuente</h3>
          <p>Inspección</p>
        </div>
        <div className="stat-card">
          <h3>Comparativa</h3>
          <p>+12%</p>
        </div>
      </div>
      <div className="chart">
        <h3>Actividades Mensuales</h3>
        <div className="chart-placeholder">
          Gráfico aquí (implementar con Chart.js)
        </div>
      </div>
      <div className="recent">
        <h3>Añadidos Recientemente</h3>
        <ul>
          <li>Control de Lotes de Uva</li>
          <li>Inspecciones Laborales</li>
          <li>Villa San Esteban</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
