import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';
import { API_CONFIG } from '../../../config/apiConfig';

const ACTIVITY_TYPES = [
    'Control de Ingresos (Punto Fijo)',
    'Control de Llaves',
    'Control de Espectáculos Publicos',
    'Sustentación de Mercaderías',
    'Control Móvil',
    'CIAE',
    'Inspecciones Laborales',
    'VECP',
    'VICOT - Fichas A',
    'VICOT - Fichas B',
    'Control de Imprentas',
    'Llamadas',
    'Archivos',
    'Otros'
];

const ActivityRegistration = () => {
    const { user } = useAuth();
    const [open, setOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [description, setDescription] = useState('');
    const [executionDate, setExecutionDate] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedActivity('');
        setDescription('');
        setExecutionDate(new Date());
    };

    const handleAddActivity = async () => {
        if (!selectedActivity || !description) {
            alert('Por favor, complete todos los campos');
            return;
        }

        try {
            setLoading(true);
            const activityId = `ACT#${Date.now()}`;
            const registrationDate = new Date();

            const activity = {
                activityId,
                userId: user.userId,
                supervisorId: user.supervisorId,
                activityType: selectedActivity,
                description,
                status: 'COMPLETADO',
                executionDate: format(executionDate, 'yyyy-MM-dd'),
                registrationDate: format(registrationDate, 'yyyy-MM-dd'),
                area: user.area
            };

            // Guardar en la base de datos
            await axios.post(`${API_CONFIG.baseUrl}/activities`, activity);

            // Actualizar la lista local
            setActivities(prev => [
                activity,
                ...prev
            ]);

            handleClose();
        } catch (error) {
            console.error('Error al agregar actividad:', error);
            alert('Error al agregar la actividad');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteActivity = async (activityId) => {
        try {
            if (window.confirm('¿Está seguro de eliminar esta actividad?')) {
                await axios.delete(`${API_CONFIG.baseUrl}/activities/${activityId}`);
                setActivities(prev => prev.filter(activity => activity.activityId !== activityId));
            }
        } catch (error) {
            console.error('Error al eliminar actividad:', error);
            alert('Error al eliminar la actividad');
        }
    };

    const handleEditActivity = async (activity) => {
        try {
            const updatedActivity = {
                ...activity,
                activityType: selectedActivity,
                description,
                executionDate: format(executionDate, 'yyyy-MM-dd')
            };

            await axios.put(`${API_CONFIG.baseUrl}/activities/${activity.activityId}`, updatedActivity);
            setActivities(prev => 
                prev.map(a => a.activityId === activity.activityId ? updatedActivity : a)
            );
        } catch (error) {
            console.error('Error al editar actividad:', error);
            alert('Error al editar la actividad');
        }
    };

    // Cargar actividades al iniciar
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(`${API_CONFIG.baseUrl}/activities?userId=${user.userId}`);
                setActivities(response.data);
            } catch (error) {
                console.error('Error al cargar actividades:', error);
            }
        };
        fetchActivities();
    }, [user.userId]);

    return (
        <Box sx={{ p: 3 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                sx={{ mb: 3 }}
            >
                Añadir Nueva Actividad
            </Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Tarea</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Fecha de Realización</TableCell>
                            <TableCell>Fecha de Registro</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((activity) => (
                            <TableRow key={activity.activityId}>
                                <TableCell>{activity.activityId}</TableCell>
                                <TableCell>{activity.activityType}</TableCell>
                                <TableCell>{activity.description}</TableCell>
                                <TableCell>{format(new Date(activity.executionDate), 'dd/MM/yyyy', { locale: es })}</TableCell>
                                <TableCell>{format(new Date(activity.registrationDate), 'dd/MM/yyyy', { locale: es })}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleEditActivity(activity)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteActivity(activity.activityId)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Nuevo Registro</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Tipo de Actividad</InputLabel>
                        <Select
                            value={selectedActivity}
                            onChange={(e) => setSelectedActivity(e.target.value)}
                            label="Tipo de Actividad"
                            required
                        >
                            {ACTIVITY_TYPES.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={3}
                        required
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        type="date"
                        label="Fecha de Realización"
                        value={format(executionDate, 'yyyy-MM-dd')}
                        onChange={(e) => setExecutionDate(new Date(e.target.value))}
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleAddActivity} disabled={loading}>
                        Añadir
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ActivityRegistration;
