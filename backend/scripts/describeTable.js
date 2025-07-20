require('dotenv').config();
const AWS = require('aws-sdk');

// Configurar AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
});

// Crear cliente de DynamoDB
const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function describeTable() {
    try {
        const params = {
            TableName: 'Users'
        };

        const result = await dynamoDB.describeTable(params).promise();
        console.log('Descripción de la tabla:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Error al describir la tabla:', error);
    }
}

describeTable();
