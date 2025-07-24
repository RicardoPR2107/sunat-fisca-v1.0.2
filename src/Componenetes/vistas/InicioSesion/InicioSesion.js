import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InicioSesion.css";
import logoSunat from "../../../Imagenes/Negro-sunat-fisca+.png";
import { authService } from "../../../services/authService";


const InicioSesion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const validateForm = () => {
    if (!code.trim() || !password.trim()) {
      return "Por favor, completa ambos campos: Código y Contraseña.";
    }

    if (code.length < 3) {
      return "El código debe tener al menos 3 caracteres.";
    }

    if (password.length < 2) {
      return "La contraseña debe tener al menos 2 caracteres.";
    }

    return "";
  };

  const getUserRole = (role) => {
    switch (role) {
      case "FISCALIZADOR":
        return {
          role: "Fiscalizador",
          route: "/fiscalizador/dashboard",
          emoji: "🔍",
        };
      case "JEFE_AREA":
        return {
          role: "Jefe de Área",
          route: "/jefe-area/dashboard",
          emoji: "👨‍💼",
        };
      case "SUPERVISOR":
        return {
          role: "Supervisor",
          route: "/supervisor/dashboard",
          emoji: "👨‍💻",
        };
      default:
        return { role: "Usuario", route: "/dashboard", emoji: "👤" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = validateForm();
    if (message) {
      setErrorMessage(message);
      setSuccessMessage("");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    console.log("Iniciando login con:", {
      code: code.trim(),
      password: password.trim(),
    });

    try {
      const response = await authService.login(code.trim(), password.trim());
      console.log("Respuesta completa del backend:", response);
      console.log("Datos del usuario:", {
        role: response.role,
        userId: response.userId,
        success: response.success
      });
      console.log("Rol recibido:", response.role);

        if (response.success) {
          console.log("Login exitoso");
          
          // Redirigir según el código de usuario
          if (code === '7308') {
            navigate('/jefe-area/dashboard');
          } else if (code === '9943') {
            navigate('/jefe-general/dashboard');
          } else {
            navigate('/fiscalizador/dashboard');
          }
          return;
      }

      console.log("Login fallido:", response.message);
      setErrorMessage(response.message);
    } catch (error) {
      console.error("Error en login:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
        setErrorMessage(
          error.response.data.message ||
            error.response.data.error ||
            "Error en el servidor"
        );
      } else {
        console.error("Error de red:", error.message);
        setErrorMessage("Error de conexión con el servidor");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (!code.trim() || !password.trim()) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  }, [code, password]);

  // Recuperar sesión guardada al cargar
  useEffect(() => {
    const savedSession = localStorage.getItem("rememberedSession");
    if (savedSession) {
      const { code: savedCode, isChecked: savedChecked } =
        JSON.parse(savedSession);
      setCode(savedCode);
      setIsChecked(savedChecked);
    }
  }, []);

  // Guardar sesión cuando se marca el checkbox
  useEffect(() => {
    if (isChecked && code.trim()) {
      localStorage.setItem(
        "rememberedSession",
        JSON.stringify({ code: code.trim(), isChecked: true })
      );
    } else if (!isChecked) {
      localStorage.removeItem("rememberedSession");
    }
  }, [isChecked, code]);

  return (
    <div className="contenedor-principal">
      <div className="contenedor-secundario">
        <div className="contenedor-formulario">
          <div className="logo-container">
            <img src={logoSunat} alt="Logo SUNAT" className="logo" />
            <div className="logo-glow"></div>
          </div>

          <div className="form-content">
            <div className="header">
              <h2>Bienvenido</h2>
              <p className="subtitle">
                Por favor ingrese su código de registro para continuar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <div className="input-group">
                <label className="input-label">Código</label>
                <div
                  className={`input-container ${
                    focusedField === "code" ? "focused" : ""
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Ej: TC42, JefAre1, Supervi1"
                    className="input"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onFocus={() => handleFocus("code")}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Contraseña</label>
                <div
                  className={`input-container password-container ${
                    focusedField === "password" ? "focused" : ""
                  }`}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => handleFocus("password")}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    disabled={isLoading}
                  >
                    <i
                      className={
                        showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                      }
                    ></i>
                  </button>
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    disabled={isLoading}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    Mantener sesión iniciada
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`boton-ingresar ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Verificando...</span>
                  </>
                ) : (
                  <>
                    <span>Ingresar</span>
                    <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
            </form>

            {successMessage && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {errorMessage}
              </div>
            )}

            <div className="help-text">
              <p>
                ¿Olvidaste tu contraseña?{" "}
                <a href="#" className="help-link">
                  Contacta al administrador
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="contenedor-fondo">
          <div className="overlay"></div>
          <div className="background-content">
            <h3>Sistema de Fiscalización</h3>
            <p>
              Plataforma integral para la gestión y control de actividades
              fiscalizadoras
            </p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <span>Seguro</span>
              </div>
              <div className="feature">
                <i className="fas fa-chart-line"></i>
                <span>Eficiente</span>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <span>Colaborativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
