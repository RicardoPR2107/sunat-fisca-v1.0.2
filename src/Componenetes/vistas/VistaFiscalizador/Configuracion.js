import React from "react";
import "./Configuracion.css";
import perfilPersonalIcon from "../../../Imagenes/Perfil_Personal.png";
import preferenciasIcon from "../../../Imagenes/Preferencias.png";
import tiposActividadesIcon from "../../../Imagenes/Tipos_de_Actividades.png";
import seguridadIcon from "../../../Imagenes/Seguridad.png";

const Configuracion = () => {
  return (
    <div className="fiscalizador-configuracion-main-container">
      <div className="fiscalizador-configuracion">
        <div className="fiscalizador-configuracion-content">
          <div className="fiscalizador-configuracion-cards-wrapper">
            <div className="fiscalizador-configuracion-left-cards">
              {/* Tarjeta 1: Perfil Personal */}
              <div className="fiscalizador-configuracion-card fiscalizador-configuracion-card1">
                <div className="fiscalizador-configuracion-card-header">
                  <img
                    src={perfilPersonalIcon}
                    alt="Perfil Personal"
                    className="fiscalizador-configuracion-card-icon"
                  />
                  <div className="fiscalizador-configuracion-card-title">
                    <h3>Perfil Personal</h3>
                    <p>Información básica del usuario</p>
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
                <button className="fiscalizador-configuracion-update-button">
                  Actualizar Información
                </button>
              </div>

              {/* Tarjeta 2: Preferencias */}
              <div className="fiscalizador-configuracion-card fiscalizador-configuracion-card2">
                <div className="fiscalizador-configuracion-card-header">
                  <img
                    src={preferenciasIcon}
                    alt="Preferencias"
                    className="fiscalizador-configuracion-card-icon"
                  />
                  <div className="fiscalizador-configuracion-card-title">
                    <h3>Preferencias</h3>
                    <p>Configuración de la aplicación</p>
                  </div>
                </div>
                <div className="fiscalizador-configuracion-preference-item">
                  <div className="fiscalizador-configuracion-preference-text">
                    <strong>Notificaciones</strong>
                    <p>Recibir notificaciones de nuevas asignaciones</p>
                  </div>
                  <label className="fiscalizador-configuracion-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="fiscalizador-configuracion-slider"></span>
                  </label>
                </div>
                <div className="fiscalizador-configuracion-preference-item">
                  <div className="fiscalizador-configuracion-preference-text">
                    <strong>Recordatorios</strong>
                    <p>Recordatorios de reportes pendientes</p>
                  </div>
                  <label className="fiscalizador-configuracion-switch">
                    <input type="checkbox" />
                    <span className="fiscalizador-configuracion-slider"></span>
                  </label>
                </div>
                <div className="fiscalizador-configuracion-preference-item">
                  <div className="fiscalizador-configuracion-preference-text">
                    <strong>Reportes Automáticos</strong>
                    <p>Generar reportes automáticamente</p>
                  </div>
                  <label className="fiscalizador-configuracion-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="fiscalizador-configuracion-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="fiscalizador-configuracion-right-cards">
              {/* Tarjeta 3: Tipos de Actividades */}
              <div className="fiscalizador-configuracion-card fiscalizador-configuracion-card3">
                <div className="fiscalizador-configuracion-card-header">
                  <img
                    src={tiposActividadesIcon}
                    alt="Tipos de Actividades"
                    className="fiscalizador-configuracion-card-icon"
                  />
                  <div className="fiscalizador-configuracion-card-title">
                    <h3>Tipos de Actividades</h3>
                    <p>Tipos de actividades que puede realizar</p>
                  </div>
                </div>
                <div className="fiscalizador-configuracion-activity-items-container">
                  <div className="fiscalizador-configuracion-activity-item">
                    <span>Control de Ingresos (Punto Fijo)</span>
                    <button className="fiscalizador-configuracion-enabled-button">
                      Habilitado
                    </button>
                  </div>
                  <div className="fiscalizador-configuracion-activity-item">
                    <span>Control de Ingresos (Punto Fijo)</span>
                    <button className="fiscalizador-configuracion-enabled-button">
                      Habilitado
                    </button>
                  </div>
                  <div className="fiscalizador-configuracion-activity-item">
                    <span>Control de Ingresos (Punto Fijo)</span>
                    <button className="fiscalizador-configuracion-enabled-button">
                      Habilitado
                    </button>
                  </div>
                </div>
              </div>

              {/* Tarjeta 4: Seguridad - EXACTAMENTE COMO FIGMA */}
              <div className="fiscalizador-configuracion-card fiscalizador-configuracion-card4">
                <div className="fiscalizador-configuracion-card-header">
                  <img
                    src={seguridadIcon}
                    alt="Seguridad"
                    className="fiscalizador-configuracion-card-icon"
                  />
                  <div className="fiscalizador-configuracion-card-title">
                    <h3>Seguridad</h3>
                    <p>Configuración de contraseña y seguridad</p>
                  </div>
                </div>

                <div className="fiscalizador-configuracion-security-content">
                  {/* Fila de campos: Contraseña Actual y Nueva Contraseña */}
                  <div className="fiscalizador-configuracion-password-fields-row">
                    <div className="fiscalizador-configuracion-password-field">
                      <label>Contraseña Actual</label>
                      <input type="password" />
                    </div>
                    <div className="fiscalizador-configuracion-password-field">
                      <label>Nueva Contraseña</label>
                      <input type="password" />
                    </div>
                  </div>

                  {/* Segunda fila: Repetir Nueva Contraseña - SOLO EL PRIMER CAMPO */}
                  <div className="fiscalizador-configuracion-password-fields-row">
                    <div className="fiscalizador-configuracion-password-field">
                      <label>Repetir Nueva Contraseña</label>
                      <input type="password" />
                    </div>
                    <div className="fiscalizador-configuracion-password-field-empty">
                      {/* Campo vacío para mantener la estructura */}
                    </div>
                  </div>

                  {/* Caja de requisitos - exactamente como Figma */}
                  <div className="fiscalizador-configuracion-requirements-box">
                    <div className="fiscalizador-configuracion-requirements-title">
                      Requisitos de contraseña
                    </div>
                    <ul className="fiscalizador-configuracion-requirements-list">
                      <li>Mínimo 8 caracteres</li>
                      <li>Al menos una mayúscula</li>
                      <li>Al menos un número</li>
                      <li>Al menos un carácter especial</li>
                    </ul>
                  </div>

                  {/* Botón exactamente como Figma */}
                  <div className="fiscalizador-configuracion-button-container">
                    <button className="fiscalizador-configuracion-change-password-button">
                      Cambiar Contraseña
                    </button>
                  </div>
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
