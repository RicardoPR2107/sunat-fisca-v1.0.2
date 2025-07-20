const express = require('express');
const router = express.Router();
const { DynamoDBClient, QueryCommand, GetItemCommand, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Configurar AWS
const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Función para obtener el usuario por userId o email
async function getUser(code) {
    try {
        // Buscar usando la clave primaria
        const params = new GetItemCommand({
            TableName: 'Users',
            Key: {
                'PK': { S: `USER#${code}` },
                'SK': { S: 'METADATA' }
            }
        });

        const result = await client.send(params);
        
        if (!result.Item) {
            return null;
        }

        const user = unmarshall(result.Item);
        
        // Verificar si el código coincide con userId o email
        if (user.userId === code || user.email === code) {
            return user;
        }
        
        return null;
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        throw error;
    }
}

// Validaciones para login
const loginValidation = [
    body('code').trim().notEmpty().withMessage('El código es requerido'),
    body('password').trim().notEmpty().withMessage('La contraseña es requerida')
];

// Middleware de validación
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: errors.array()[0].msg
        });
    }
    next();
};

// Endpoint para validar usuario
router.post('/', loginValidation, validate, async (req, res) => {
    try {
        const { code } = req.body;
        
        // Buscar usuario por userId o email
        const user = await getUser(code);
        
        if (user) {
            return res.status(200).json({
                exists: true,
                userId: user.userId,
                email: user.email,
                role: user.role,
                status: user.status
            });
        }
        
        return res.status(200).json({
            exists: false
        });
    } catch (error) {
        console.error('Error al validar usuario:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

// Endpoint de login
router.post('/login', loginValidation, validate, async (req, res) => {
    try {
        console.log('=== Inicio de login ===');
        console.log('Datos recibidos:', req.body);
        
        const { code, password } = req.body;

        // Obtener el usuario
        console.log('Buscando usuario con code:', code);
        const user = await getUser(code);
        console.log('Usuario encontrado:', user);
        
        if (!user) {
            console.log('Usuario no encontrado');
            return res.status(401).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        // Verificar la contraseña
        console.log('Verificando contraseña...');
        console.log('Password recibida:', password);
        console.log('Password hash almacenada:', user.passwordHash);
        
        // Comparar la contraseña usando bcrypt
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        console.log('Resultado de la verificación:', passwordMatch);
        
        if (!passwordMatch) {
            console.log('Contraseña no coincide');
            return res.status(401).json({
                success: false,
                message: 'Contraseña incorrecta'
            });
        }

        // Verificar que el usuario esté activo
        console.log('Estado del usuario:', user.status);
        if (user.status !== 'ACTIVO') {
            console.log('Usuario inactivo');
            return res.status(401).json({
                success: false,
                message: 'Usuario inactivo'
            });
        }

        // Generar token JWT
        const token = jwt.sign(
            {
                userId: user.userId,
                role: user.role,
                area: user.area
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Determinar el dashboard según el rol
        let dashboardPath;
        switch (user.role) {
            case 'FISCALIZADOR':
                dashboardPath = '/fiscalizador/dashboard';
                break;
            case 'JEFE_AREA':
                dashboardPath = '/jefe-area/dashboard';
                break;
            case 'SUPERVISOR':
                dashboardPath = '/supervisor/dashboard';
                break;
            default:
                return res.status(401).json({
                    success: false,
                    message: 'Rol no válido'
                });
        }

        // Actualizar lastLogin
        const updateParams = new UpdateItemCommand({
            TableName: 'Users',
            Key: {
                PK: { S: user.PK },
                SK: { S: user.SK }
            },
            UpdateExpression: 'SET lastLogin = :lastLogin',
            ExpressionAttributeValues: {
                ':lastLogin': { S: new Date().toISOString() }
            }
        });
        await client.send(updateParams);

        // Respuesta exitosa
        res.status(200).json({
            success: true,
            token,
            userId: user.userId,
            role: user.role,
            area: user.area,
            dashboardPath
        });

    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

module.exports = router;
