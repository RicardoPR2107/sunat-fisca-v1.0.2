import axios from 'axios';

export const getActivityTypes = async () => {
    try {
        const response = await axios.get('http://localhost:3002/api/activityTypes');
        return response.data;
    } catch (error) {
        console.error('Error al obtener tipos de actividades:', error);
        return [];
    }
};
