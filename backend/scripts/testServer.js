const express = require('express');
const app = express();

// Middleware básico
app.use(express.json());
app.use((req, res, next) => {
    console.log('\n=== Nueva petición ===');
    console.log('Método:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// Endpoint de prueba
app.get('/', (req, res) => {
    console.log('=== Respondiendo GET ===');
    res.json({ message: 'Servidor funcionando correctamente' });
});

app.post('/test', (req, res) => {
    console.log('=== Respondiendo POST ===');
    res.json({ 
        message: 'Endpoint de prueba funcionando',
        received: req.body
    });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error('\n=== Error ===');
    console.error('Mensaje:', err.message);
    console.error('Stack:', err.stack);
    res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n=== Servidor escuchando en http://localhost:${PORT} ===`);
    console.log('=== Intenta acceder a: http://localhost:3001 ===');
});
