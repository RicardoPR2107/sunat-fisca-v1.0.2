import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InicioSesion.css";
import logoSunat from "../../../Imagenes/Negro-sunat-fisca+.png";
import { USERS } from "../../../Utilidades/constantes";

const InicioSesion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const validateForm = () => {
    if (!code || !password) {
      return "Por favor, completa ambos campos: Código y Contraseña.";
    }

    const fiscalizadorCredentials = USERS.FISCALIZADOR;
    if (
      code !== fiscalizadorCredentials.code ||
      password !== fiscalizadorCredentials.password
    ) {
      return "Credenciales incorrectas. No eres un Fiscalizador. Verifica tu Código o Contraseña.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateForm();
    if (!message) {
      setSuccessMessage("¡Has iniciado sesión como Fiscalizador! 🚀");
      setErrorMessage("");
      setTimeout(() => navigate("/fiscalizador/dashboard"), 1000); // Redirección después de 1 segundo
    } else {
      setErrorMessage(message);
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    if (!code || !password) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  }, [code, password]);

  return (
    <div className="contenedor-principal">
      <div className="contenedor-secundario">
        <div className="contenedor-formulario">
          <img src={logoSunat} alt="Logo SUNAT" className="logo" />
          <div className="form-content">
            <h2>Bienvenido</h2>
            <p>Por favor ingrese su código de registro para continuar</p>
            <p>Código</p>
            <input
              type="text"
              placeholder="TC042"
              className="input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <p>Contraseña</p>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rememberMe"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="rememberMe">Mantener sesión iniciada</label>
            </div>
          </div>
          <button className="boton-ingresar" onClick={handleSubmit}>
            Ingresar
          </button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="contenedor-fondo"></div>
      </div>
    </div>
  );
};

export default InicioSesion;
