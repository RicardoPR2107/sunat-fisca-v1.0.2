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

// Función para generar hash de contraseña
async function generatePasswordHash(userId) {
    try {
        const hash = await bcrypt.hash(userId, 10);
        return hash;
    } catch (error) {
        console.error('Error al generar hash de contraseña:', error);
        throw error;
    }
}

// Función para actualizar la contraseña de un usuario
async function updatePassword(userId) {
    try {
        // Generar hash de la contraseña usando el userId
        const passwordHash = await generatePasswordHash(userId);

        // Actualizar el usuario
        const params = {
            TableName: 'Users',
            Key: {
                PK: { S: `USER#${userId}` },
                SK: { S: 'METADATA' }
            },
            UpdateExpression: 'SET passwordHash = :hash',
            ExpressionAttributeValues: {
                ':hash': { S: passwordHash }
            }
        };

        await dynamoDB.send(new UpdateItemCommand(params));
        console.log(`Contraseña actualizada para usuario ${userId}`);
    } catch (error) {
        console.error(`Error al actualizar contraseña para ${userId}:`, error);
        throw error;
    }
}

// Actualizar contraseñas de usuarios específicos
async function updateUserPasswords() {
    try {
        const userIds = ['7308', '9943'];
        
        for (const userId of userIds) {
            await updatePassword(userId);
        }
        console.log('Todas las contraseñas han sido actualizadas exitosamente');
    } catch (error) {
        console.error('Error al actualizar contraseñas:', error);
    }
}

// Ejecutar
updateUserPasswords();
