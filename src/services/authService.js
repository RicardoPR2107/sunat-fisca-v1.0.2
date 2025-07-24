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
            
            // Si el código es 7308 o 9943, aceptar sin validar la contraseña
            if (code === '7308' || code === '9943') {
                // Crear un token simulado
                const token = `simulated_token_${code}`;
                
                // Guardar el token en localStorage
                localStorage.setItem('token', token);
                
                // Actualizar el token en la instancia de axios
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                // Guardar información del usuario
                const userData = {
                    userId: code,
                    role: code === '7308' ? 'JEFE DE AREA' : 'Supervisor',
                    area: 'Area de prueba'
                };
                localStorage.setItem('user', JSON.stringify(userData));
                
                return {
                    success: true,
                    token: token,
                    userId: code,
                    role: userData.role,
                    area: userData.area
                };
            }
            
            // Para otros códigos, hacer la validación normal
            const response = await api.post(API_CONFIG.endpoints.login, { code, password });
            console.log('Respuesta del backend:', response.data);
            
            if (response.data && response.data.success && response.data.token) {
                // Guardar el token en localStorage
                localStorage.setItem('token', response.data.token);
                
                // Actualizar el token en la instancia de axios
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                
                // Guardar información del usuario
                const userData = {
                    userId: response.data.userId,
                    role: response.data.role,
                    area: response.data.area
                };
                localStorage.setItem('user', JSON.stringify(userData));
                
                return {
                    success: true,
                    ...response.data
                };
            }
            
            return {
                success: false,
                message: 'Código o contraseña incorrectos'
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
