require('dotenv').config();
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

// Configurar AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
});

// Crear cliente de DynamoDB
const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function createUser() {
    try {
        console.log('=== Creando nuevo usuario ===');
        
        // Datos del usuario
        const userData = {
            userId: 'TC42',
            name: 'Ricardo Palma',
            email: 'prac-rpalma@sunat.gob.pe',
            phone: '974498839',
            role: 'FISCALIZADOR',
            status: 'ACTIVO',
            supervisorId: '7308',
            area: 'Masivos-ITI-Chimbote',
            createdAt: new Date().toISOString(),
            preferences: {
                theme: 'light',
                language: 'es',
                notifications: true
            }
        };
        
        // Generar hash de la contraseña (usando userId como contraseña por defecto)
        const passwordHash = await bcrypt.hash(userData.userId, 10);
        
        // Crear el item para DynamoDB
        const item = {
            PK: { S: `USER#${userData.userId}` },
            SK: { S: 'METADATA' },
            userId: { S: userData.userId },
            passwordHash: { S: passwordHash },
            name: { S: userData.name },
            email: { S: userData.email },
            phone: { S: userData.phone },
            role: { S: userData.role },
            status: { S: userData.status },
            createdAt: { S: userData.createdAt },
            supervisorId: { S: userData.supervisorId },
            area: { S: userData.area },
            lastLogin: { S: '' },
            preferences: { M: {
                theme: { S: userData.preferences.theme },
                language: { S: userData.preferences.language },
                notifications: { BOOL: userData.preferences.notifications }
            } }
        };
        
        console.log('\n=== Datos del usuario ===');
        console.log('userId:', userData.userId);
        console.log('Contraseña por defecto:', userData.userId);
        console.log('Nombre:', userData.name);
        console.log('Email:', userData.email);
        console.log('Teléfono:', userData.phone);
        console.log('Rol:', userData.role);
        console.log('Área:', userData.area);
        
        // Insertar el usuario en DynamoDB
        const params = {
            TableName: 'Users',
            Item: item
        };
        
        console.log('\n=== Insertando usuario en DynamoDB ===');
        await dynamoDB.putItem(params).promise();
        console.log('Usuario insertado exitosamente');
        
        console.log('\n=== Operación completada ===');
        
    } catch (error) {
        console.error('\n=== Error ===');
        console.error('Mensaje:', error.message);
        console.error('Código:', error.code);
        console.error('Nombre:', error.name);
        console.error('Stack:', error.stack);
        throw error;
    }
}

createUser();
