import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const RoleRedirect = ({ children }) => {
    const navigate = useNavigate();

    // Obtener el token
    const token = authService.getToken();
    if (!token) {
        navigate('/');
        return null;
    }

    // Obtener el código de usuario desde localStorage
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    const code = userData.userId;
    
    // Redirigir según el código
    if (code === '7308') {
        navigate('/jefe-area/dashboard');
    } else if (code === '9943') {
        navigate('/jefe-general/dashboard');
    } else {
        navigate('/fiscalizador/dashboard');
    }

    return null;
};

export default RoleRedirect;
