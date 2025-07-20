require('dotenv').config();
const express = require('express');
const { DynamoDBClient, GetItemCommand } = require('@aws-sdk/client-dynamodb');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/auth');

// Configurar CORS específicamente
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    exposedHeaders: ['Authorization'],
    optionsSuccessStatus: 200,
    maxAge: 86400
};

app.use(cors(corsOptions));

// Añadir middleware para manejar peticiones OPTIONS
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRoutes);

// Inicializar rutas
require('./routes')(app);

// Middleware de registro de peticiones
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// Configurar AWS
const dynamoDBClient = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// Rutas
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// Middleware de verificación de token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        console.log('Token no proporcionado');
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.role = decoded.role;
        console.log('Token válido para usuario:', decoded.userId);
        next();
    } catch (err) {
        console.error('Error al verificar token:', err);
        res.status(401).json({ message: 'Token inválido' });
    }
};

// Endpoint protegido
app.get('/protected', verifyToken, (req, res) => {
    console.log('Acceso protegido para usuario:', req.userId);
    res.json({ message: 'Acceso concedido', userId: req.userId, role: req.role });
});

// Middleware de registro de respuestas
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode}`);
        console.log('Respuesta:', res._getData());
    });
    next();
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        message: 'Error interno del servidor',
        error: err.message
    });
});

// Endpoint para login
app.post('/auth/login', async (req, res) => {
    try {
        const { code, password } = req.body;
        
        // Consulta a DynamoDB para verificar las credenciales
        const params = {
            TableName: 'Users',
            Key: {
                'userId': { S: code }
            }
        };

        const result = await dynamoDB.getItem(params).promise();
        
        if (!result.Item) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Aquí deberías comparar la contraseña con el hash almacenado
        // Por ahora, como es un ejemplo, solo verificamos si existe
        
        // Generar token JWT
        const token = jwt.sign(
            { userId: code, userType: result.Item.userType.S },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
