import React from "react";
import "./Configuracion.css";

const Configuracion = () => {
  return (
    <div className="configuracion">
      <h2>Configuración - Fiscalizador</h2>
      <p>Configuración del sistema y gestión de usuarios</p>
      <div className="sections">
        <div className="section">
          <h3>Perfil Personal</h3>
          <p>Información básica del usuario</p>
          <input type="text" placeholder="Nombre Completo" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Código de Registro" />
          <input type="tel" placeholder="Teléfono" />
          <button>Actualizar Información</button>
        </div>
        <div className="section">
          <h3>Tipos de Actividades</h3>
          <p>Tipos de actividades que puede realizar</p>
          <div>
            Control de Ingresos (Punto Fijo) <span>Habilitado</span>
          </div>
          <div>
            Control de Ingresos (Punto Fijo) <span>Habilitado</span>
          </div>
          <div>
            Control de Ingresos (Punto Fijo) <span>Habilitado</span>
          </div>
        </div>
        <div className="section">
          <h3>Seguridad</h3>
          <p>Configurado de contraseña y seguridad</p>
          <p>Contraseña Actual</p>
          <input type="password" placeholder="Repetir Nueva Contraseña" />
          <button>Cambiar Contraseña</button>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
