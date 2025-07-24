import axios from 'axios';
import { API_CONFIG } from '../config/apiConfig';

// Función para validar los datos antes de enviar
export const validateRegistrationData = (activityType, description) => {
  if (!activityType || activityType === "") {
    throw new Error('Seleccione una actividad');
  }
  if (!description || description.trim() === "") {
    throw new Error('Debe ingresar datos para el registro');
  }
};

// Función para obtener el próximo activityId
export const getNextActivityId = async () => {
  try {
    const response = await axios.get(`${API_CONFIG.baseUrl}/activities/next-id`);
    return response.data.nextId;
  } catch (error) {
    console.error('Error al obtener el próximo activityId:', error);
    throw new Error('Error al obtener el próximo ID. Por favor, inténtelo nuevamente.');
  }
};

// Función para formatear la fecha y hora de registro
export const formatRegistrationDate = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();

  return `${formattedHours}:${minutes} ${ampm} -${now.getTimezoneOffset() / 60}, ${day}/${month}/${year}`;
};

// Función para crear una nueva actividad
export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(`${API_CONFIG.baseUrl}/activities`, activityData);
    return response.data;
  } catch (error) {
    console.error('Error al crear la actividad:', error);
    throw new Error('Error al crear la actividad. Por favor, inténtelo nuevamente.');
  }
};
