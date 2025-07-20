import React from "react";
import "./Configuracion.css";
import perfilPersonalIcon from "../../../Imagenes/Perfil_Personal.png";
import preferenciasIcon from "../../../Imagenes/Preferencias.png";
import tiposActividadesIcon from "../../../Imagenes/Tipos_de_Actividades.png";
import seguridadIcon from "../../../Imagenes/Seguridad.png";

const Configuracion = () => {
  return (
    <div className="vista-jefe-area-configuracion">
      {/* Contenedor Principal que envuelve todo */}
      <div className="vista-jefe-area-configuracion-main-container">
        <div className="vista-jefe-area-configuracion-cards-wrapper">
          <div className="vista-jefe-area-configuracion-left-cards">
            {/* Tarjeta 1: Perfil Personal */}
            <div className="vista-jefe-area-configuracion-card vista-jefe-area-configuracion-card1">
              <div className="vista-jefe-area-configuracion-card-header">
                <img
                  src={perfilPersonalIcon}
                  alt="Perfil Personal"
                  className="vista-jefe-area-configuracion-card-icon"
                />
                <div className="vista-jefe-area-configuracion-card-title">
                  <h3>Perfil Personal</h3>
                  <p>Información básica del usuario</p>
                </div>
              </div>
              <label className="vista-jefe-area-configuracion-label">
                Nombre Completo
              </label>
              <input
                type="text"
                className="vista-jefe-area-configuracion-input"
              />
              <label className="vista-jefe-area-configuracion-label">
                Email
              </label>
              <input
                type="email"
                className="vista-jefe-area-configuracion-input"
              />
              <label className="vista-jefe-area-configuracion-label">
                Código de Registro
              </label>
              <input
                type="text"
                className="vista-jefe-area-configuracion-input"
              />
              <label className="vista-jefe-area-configuracion-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="vista-jefe-area-configuracion-input"
              />
              <button className="vista-jefe-area-configuracion-update-button">
                Actualizar Información
              </button>
            </div>

            {/* Tarjeta 2: Preferencias */}
            <div className="vista-jefe-area-configuracion-card vista-jefe-area-configuracion-card2">
              <div className="vista-jefe-area-configuracion-card-header">
                <img
                  src={preferenciasIcon}
                  alt="Preferencias"
                  className="vista-jefe-area-configuracion-card-icon"
                />
                <div className="vista-jefe-area-configuracion-card-title">
                  <h3>Preferencias</h3>
                  <p>Configuración de la aplicación</p>
                </div>
              </div>
              <div className="vista-jefe-area-configuracion-preference-item">
                <div className="vista-jefe-area-configuracion-preference-text">
                  <strong>Notificaciones</strong>
                  <p>Recibir notificaciones de nuevas asignaciones</p>
                </div>
                <label className="vista-jefe-area-configuracion-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="vista-jefe-area-configuracion-slider"></span>
                </label>
              </div>
              <div className="vista-jefe-area-configuracion-preference-item">
                <div className="vista-jefe-area-configuracion-preference-text">
                  <strong>Recordatorios</strong>
                  <p>Recordatorios de reportes pendientes</p>
                </div>
                <label className="vista-jefe-area-configuracion-switch">
                  <input type="checkbox" />
                  <span className="vista-jefe-area-configuracion-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="vista-jefe-area-configuracion-right-cards">
            {/* Tarjeta 3: Tipos de Actividades */}
            <div className="vista-jefe-area-configuracion-card vista-jefe-area-configuracion-card3">
              <div className="vista-jefe-area-configuracion-card-header">
                <img
                  src={tiposActividadesIcon}
                  alt="Tipos de Actividades"
                  className="vista-jefe-area-configuracion-card-icon"
                />
                <div className="vista-jefe-area-configuracion-card-title">
                  <h3>Tipos de Actividades</h3>
                  <p>Configurar tipos de actividades disponibles</p>
                </div>
              </div>
              <div className="vista-jefe-area-configuracion-activity-items-container">
                <div className="vista-jefe-area-configuracion-activity-item vista-jefe-area-configuracion-purple-border">
                  <span>Control de Ingresos (Punto Fijo)</span>
                  <div className="vista-jefe-area-configuracion-activity-controls">
                    <button className="vista-jefe-area-configuracion-active-button">
                      Activo
                    </button>
                    <div className="vista-jefe-area-configuracion-gear-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65C4.53 11.34 4.5 11.66 4.5 12s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Z"
                          fill="#6c757d"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="vista-jefe-area-configuracion-activity-item vista-jefe-area-configuracion-green-border">
                  <span>Control de Llaves</span>
                  <div className="vista-jefe-area-configuracion-activity-controls">
                    <button className="vista-jefe-area-configuracion-active-button">
                      Activo
                    </button>
                    <div className="vista-jefe-area-configuracion-gear-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65C4.53 11.34 4.5 11.66 4.5 12s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Z"
                          fill="#6c757d"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="vista-jefe-area-configuracion-activity-item vista-jefe-area-configuracion-blue-border">
                  <span>Control de Espectáculos Públicos</span>
                  <div className="vista-jefe-area-configuracion-activity-controls">
                    <button className="vista-jefe-area-configuracion-active-button">
                      Activo
                    </button>
                    <div className="vista-jefe-area-configuracion-gear-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65C4.53 11.34 4.5 11.66 4.5 12s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Z"
                          fill="#6c757d"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Seguridad */}
            <div className="vista-jefe-area-configuracion-card vista-jefe-area-configuracion-card4">
              <div className="vista-jefe-area-configuracion-card-header">
                <div className="vista-jefe-area-configuracion-security-icon-container">
                  <img
                    src={seguridadIcon}
                    alt="Seguridad"
                    className="vista-jefe-area-configuracion-card-icon"
                  />
                </div>
                <div className="vista-jefe-area-configuracion-card-title">
                  <h3>Seguridad</h3>
                  <p>Configuración de contraseña y seguridad</p>
                </div>
              </div>

              <div className="vista-jefe-area-configuracion-security-content">
                <div className="vista-jefe-area-configuracion-password-fields-row">
                  <div className="vista-jefe-area-configuracion-password-field">
                    <label className="vista-jefe-area-configuracion-label">
                      Contraseña Actual
                    </label>
                    <input
                      type="password"
                      className="vista-jefe-area-configuracion-input"
                    />
                  </div>
                  <div className="vista-jefe-area-configuracion-password-field">
                    <label className="vista-jefe-area-configuracion-label">
                      Nueva Contraseña
                    </label>
                    <input
                      type="password"
                      className="vista-jefe-area-configuracion-input"
                    />
                  </div>
                </div>

                <div
                  className="vista-jefe-area-configuracion-password-field"
                  style={{ width: "48%" }}
                >
                  <label className="vista-jefe-area-configuracion-label">
                    Repetir Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    className="vista-jefe-area-configuracion-input"
                  />
                </div>

                <div className="vista-jefe-area-configuracion-requirements-box">
                  <div className="vista-jefe-area-configuracion-requirements-title">
                    Requisitos de contraseña
                  </div>
                  <ul className="vista-jefe-area-configuracion-requirements-list">
                    <li>Mínimo 8 caracteres</li>
                    <li>Al menos una mayúscula</li>
                    <li>Al menos un número</li>
                    <li>Al menos un carácter especial</li>
                  </ul>
                </div>

                <div className="vista-jefe-area-configuracion-button-container">
                  <button className="vista-jefe-area-configuracion-change-password-button">
                    Cambiar Contraseña
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIN del contenedor principal */}
    </div>
  );
};

export default Configuracion;
