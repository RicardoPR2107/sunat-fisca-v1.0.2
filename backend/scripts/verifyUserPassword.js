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

async function verifyUser() {
    try {
        // Obtener el usuario
        const params = {
            TableName: 'Users',
            Key: {
                PK: { S: 'USER#TC42' },
                SK: { S: 'METADATA' }
            }
        };

        const result = await dynamoDB.getItem(params).promise();
        const user = result.Item;

        if (!user) {
            console.log('Usuario no encontrado');
            return;
        }

        // Verificar la contraseña
        const passwordMatch = await bcrypt.compare('TC42', user.passwordHash.S);
        console.log('Usuario encontrado:', {
            userId: user.userId.S,
            email: user.email.S,
            status: user.status.S,
            passwordMatch: passwordMatch
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

verifyUser();
