const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Configurar AWS
const dynamoDB = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Usuarios a actualizar
const users = [
    {
        userId: '7308',
        password: '7308' // El userId es la contraseña
    },
    {
        userId: '9943',
        password: '9943' // El userId es la contraseña
    }
];

// Función para actualizar la contraseña
async function updatePassword(userId, password) {
    try {
        // Hashear la contraseña
        const hash = await bcrypt.hash(password, 10);
        
        // Actualizar el usuario
        const params = new UpdateItemCommand({
            TableName: 'Users',
            Key: {
                PK: { S: `USER#${userId}` },
                SK: { S: 'METADATA' }
            },
            UpdateExpression: 'SET passwordHash = :hash',
            ExpressionAttributeValues: {
                ':hash': { S: hash }
            }
        });

        await dynamoDB.send(params);
        console.log(`Contraseña actualizada para usuario ${userId}`);
    } catch (error) {
        console.error(`Error al actualizar contraseña para ${userId}:`, error);
        throw error;
    }
}

// Función principal
async function updatePasswords() {
    try {
        for (const user of users) {
            await updatePassword(user.userId, user.password);
        }
        console.log('Todas las contraseñas han sido actualizadas exitosamente');
    } catch (error) {
        console.error('Error al actualizar contraseñas:', error);
    }
}

// Ejecutar
updatePasswords();
