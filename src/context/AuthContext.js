import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cargar el usuario desde el token al iniciar
    useEffect(() => {
        const token = authService.getToken();
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                setUser({
                    userId: decoded.userId,
                    name: decoded.name || 'Usuario',
                    role: decoded.role,
                    area: decoded.area
                });
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
        setLoading(false);
    }, []);

    // Función para actualizar el usuario
    const updateUser = (userData) => {
        setUser(userData);
    };

    // Función para cerrar sesión
    const logout = () => {
        authService.clearToken();
        setUser(null);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, updateUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};
