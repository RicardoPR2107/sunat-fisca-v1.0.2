import axios from 'axios';
import { API_CONFIG } from '../config/apiConfig';

const api = axios.create({
    baseURL: API_CONFIG.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const authService = {
    validateUser: async (code) => {
        try {
            console.log('Validando usuario:', { code });
            const response = await api.post(API_CONFIG.endpoints.validateUser, { code });
            console.log('Respuesta de validación:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al validar usuario:', error);
            if (error.response) {
                console.error('Respuesta del servidor:', error.response.data);
            }
            throw error;
        }
    },

    login: async (code, password) => {
        try {
            console.log('Iniciando login con:', { code, password });
            // Primero limpiar cualquier token existente
            delete api.defaults.headers.common['Authorization'];
            
            const response = await api.post(API_CONFIG.endpoints.login, { code, password });
            console.log('Respuesta del backend:', response.data);
            
            if (response.data && response.data.success && response.data.token) {
                // Guardar el token en el servicio
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                
                // También guardarlo en localStorage para persistencia
                localStorage.setItem('token', response.data.token);
                
                return {
                    success: true,
                    ...response.data
                };
            }
            
            return {
                success: false,
                message: response.data?.message || 'Error en el inicio de sesión'
            };
        } catch (error) {
            console.error('Error en el login:', error);
            let errorMessage = 'Error en el servidor';
            
            if (error.response) {
                console.error('Respuesta del servidor:', error.response.data);
                errorMessage = error.response.data?.message || errorMessage;
            } else if (error.request) {
                errorMessage = 'No se pudo conectar con el servidor';
            } else {
                errorMessage = error.message;
            }
            
            return {
                success: false,
                message: errorMessage
            };
        }
    },

    setToken: (token) => {
        console.log('Guardando token:', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token', token);
    },

    clearToken: () => {
        console.log('Limpiando token');
        delete api.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
    },

    getToken: () => {
        return localStorage.getItem('token');
    }
};
