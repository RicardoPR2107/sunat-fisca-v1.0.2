require('dotenv').config();
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

// Configurar AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
});

const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

async function createUser(userData) {
    try {
        console.log('Iniciando creación de usuario:', userData.userId);
        
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(userData.userId, 10);
        console.log('Contraseña hasheada generada');
        
        // Crear el item para DynamoDB
        const params = {
            TableName: 'Users',
            Item: {
                userId: { S: userData.userId },
                name: { S: userData.name },
                email: { S: userData.email },
                phone: { S: userData.phone },
                role: { S: userData.role },
                status: { S: userData.status },
                createdAt: { S: new Date().toISOString() },
                supervisorId: { S: userData.supervisorId },
                area: { S: userData.area },
                lastLogin: { S: userData.lastLogin || '' },
                preferences: { M: { theme: { S: 'light' }, language: { S: 'es' }, notifications: { BOOL: true } } },
                passwordHash: { S: hashedPassword }
            }
        };

        console.log('Params para DynamoDB:', JSON.stringify(params, null, 2));
        
        // Insertar en DynamoDB
        const result = await dynamoDB.putItem(params).promise();
        console.log('Resultado de DynamoDB:', result);
        console.log(`Usuario ${userData.userId} creado exitosamente`);
    } catch (error) {
        console.error('Error detallado:', {
            message: error.message,
            code: error.code,
            name: error.name,
            stack: error.stack
        });
        throw error;
    }
}

async function main() {
    console.log('Iniciando creación de usuarios...');
    
    // Datos del usuario de prueba
    const userData = {
        userId: 'TC42',
        name: 'Ricardo Palma',
        email: 'prac-rpalma@sunat.gob.pe',
        phone: '974498839',
        role: 'Fiscalizador',
        status: 'activo',
        supervisorId: '7308',
        area: 'Masivos-ITI-Chimbote',
        preferences: {
            theme: 'light',
            language: 'es',
            notifications: true
        }
    };

    // Crear el usuario de prueba
    await createUser(userData);
    
    console.log('Proceso de creación de usuarios completado');
}

// Ejecutar el script
main();
