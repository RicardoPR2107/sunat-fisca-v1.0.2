import React from "react";
import "./Registro.css";

const Registrar = () => {
  return (
    <div className="registrar">
      <h2>Registrar - Área de Masivos-Chimbote</h2>
      <p>Feb 12, 2025 - Hoy</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Descripción</th>
            <th>Fecha de Realización</th>
            <th>Fecha de Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Inspecciones Laborales</td>
            <td>MZA. LOTE 14 VILLA MARIA...</td>
            <td>12/02/2025</td>
            <td>12/02/2025</td>
            <td>
              <button>Editar</button> <button>Eliminar</button>
            </td>
          </tr>
          {/* Agrega más filas según necesites */}
        </tbody>
      </table>
      <div className="pagination">
        <button>Anterior</button>
        <span>1 2 3</span>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default Registrar;
