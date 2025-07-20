require('dotenv').config();
const AWS = require('aws-sdk');

// Configurar AWS con credenciales directas
const AWS_CONFIG = {
    accessKeyId: 'AKIAWSKW6GK2LSM5BO3M',
    secretAccessKey: 'AKIAWSKW6GK2LSM5BO3M',
    region: 'us-east-2'  // Intentando con una región diferente
};

AWS.config.update(AWS_CONFIG);

const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

async function testConnection() {
    try {
        console.log('Probando conexión a DynamoDB...');
        
        // Intentar listar las tablas
        const tables = await dynamoDB.listTables().promise();
        console.log('Tablas disponibles:', tables.TableNames);
        
        // Intentar crear un item simple
        const params = {
            TableName: 'Users',
            Item: {
                userId: { S: 'TEST123' },
                name: { S: 'Test User' }
            }
        };

        console.log('Intentando crear item de prueba...');
        const result = await dynamoDB.putItem(params).promise();
        console.log('Item creado exitosamente:', result);
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

testConnection();
