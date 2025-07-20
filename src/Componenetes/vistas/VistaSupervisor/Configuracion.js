import React from "react";
import "./Configuracion.css";
import perfilPersonalIcon from "../../../Imagenes/Perfil_Personal.png";
import preferenciasIcon from "../../../Imagenes/Preferencias.png";
import tiposActividadesIcon from "../../../Imagenes/Tipos_de_Actividades.png";
import seguridadIcon from "../../../Imagenes/Seguridad.png";

const Configuracion = () => {
  return (
    <div className="supervisor-configuracion-main-container">
      <div className="supervisor-configuracion-page">
        <div className="supervisor-configuracion-content">
          <div className="supervisor-configuracion-cards-wrapper">
            <div className="supervisor-configuracion-left-cards">
              {/* Tarjeta 1: Perfil del Supervisor */}
              <div className="supervisor-configuracion-card1">
                <div className="supervisor-configuracion-card-header">
                  <img
                    src={perfilPersonalIcon}
                    alt="Perfil Personal"
                    className="supervisor-configuracion-card-icon"
                  />
                  <div className="supervisor-configuracion-card-title">
                    <h3>Perfil del Supervisor</h3>
                    <p>Información personal y configuración de cuenta</p>
                  </div>
                </div>
                <label>Nombre Completo</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Código de Registro</label>
                <input type="text" />
                <label>Teléfono</label>
                <input type="tel" />
                <button className="supervisor-configuracion-update-button">
                  Actualizar Información
                </button>
              </div>

              {/* Tarjeta 2: Notificaciones */}
              <div className="supervisor-configuracion-card2">
                <div className="supervisor-configuracion-card-header">
                  <img
                    src={preferenciasIcon}
                    alt="Notificaciones"
                    className="supervisor-configuracion-card-icon"
                  />
                  <div className="supervisor-configuracion-card-title">
                    <h3>Notificaciones</h3>
                    <p>Configurar alertas y notificaciones</p>
                  </div>
                </div>
                <div className="supervisor-configuracion-preference-item">
                  <div className="supervisor-configuracion-preference-text">
                    <strong>Alertas de Reportes</strong>
                    <p>Notificaciones cuando se generen nuevos reportes</p>
                  </div>
                  <label className="supervisor-configuracion-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="supervisor-configuracion-slider"></span>
                  </label>
                </div>
                <div className="supervisor-configuracion-preference-item">
                  <div className="supervisor-configuracion-preference-text">
                    <strong>Recordatorios de Supervisión</strong>
                    <p>
                      Alertas sobre actividades pendientes de fiscalizadores
                    </p>
                  </div>
                  <label className="supervisor-configuracion-switch">
                    <input type="checkbox" />
                    <span className="supervisor-configuracion-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="supervisor-configuracion-right-cards">
              {/* Tarjeta 3: Seguridad */}
              <div className="supervisor-configuracion-card3">
                <div className="supervisor-configuracion-card-header">
                  <div className="supervisor-configuracion-security-icon-container">
                    <img
                      src={seguridadIcon}
                      alt="Seguridad"
                      className="supervisor-configuracion-card-icon"
                    />
                  </div>
                  <div className="supervisor-configuracion-card-title">
                    <h3>Seguridad</h3>
                    <p>Configuración de contraseña y seguridad</p>
                  </div>
                </div>

                <div className="supervisor-configuracion-security-content">
                  <div className="supervisor-configuracion-password-field1">
                    <label>Contraseña Actual</label>
                    <input type="password" />
                  </div>
                  <div className="supervisor-configuracion-password-field2">
                    <label>Nueva Contraseña</label>
                    <input type="password" />
                  </div>
                  <div className="supervisor-configuracion-password-field3">
                    <label>Confirmar Nueva Contraseña</label>
                    <input type="password" />
                  </div>

                  <div className="supervisor-configuracion-requirements-box">
                    <div className="supervisor-configuracion-requirements-title">
                      Requisitos de contraseña
                    </div>
                    <ul className="supervisor-configuracion-requirements-list">
                      <li>Mínimo 8 caracteres</li>
                      <li>Al menos una mayúscula</li>
                      <li>Al menos un número</li>
                      <li>Al menos un carácter especial</li>
                    </ul>
                  </div>

                  <button className="supervisor-configuracion-change-password-button">
                    Cambiar Contraseña
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

export default Configuracion;
