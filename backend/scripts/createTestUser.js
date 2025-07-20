require('dotenv').config();
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');

// Configurar AWS
AWS.config.update({
    accessKeyId: 'AKIAWSKW6GK2LSM5BO3M',
    secretAccessKey: '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',
    region: 'us-east-1'
});

// Crear cliente de DynamoDB
const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function createTestUser() {
    try {
        console.log('=== Creando usuario de prueba ===');
        
        // Datos del usuario
        const userData = {
            userId: 'TEST123',
            name: 'Usuario de Prueba',
            email: 'test@sunat.gob.pe',
            phone: '999999999',
            role: 'FISCALIZADOR',
            status: 'ACTIVO',
            supervisorId: '7308',
            area: 'Test',
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
        const params = {
            TableName: 'Users',
            Item: {
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
            }
        };

        console.log('=== Insertando usuario en DynamoDB ===');
        const result = await dynamoDB.putItem(params).promise();
        console.log('Usuario creado exitosamente:', result);
        
        // Verificar la contraseña
        const verifyParams = {
            TableName: 'Users',
            Key: {
                PK: { S: `USER#${userData.userId}` },
                SK: { S: 'METADATA' }
            }
        };
        
        const user = await dynamoDB.getItem(verifyParams).promise();
        const passwordMatch = await bcrypt.compare(userData.userId, user.Item.passwordHash.S);
        console.log('Verificación de contraseña:', {
            userId: user.Item.userId.S,
            passwordMatch: passwordMatch
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

createTestUser();
