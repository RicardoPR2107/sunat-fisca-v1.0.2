require('dotenv').config();

// Importar el cliente de DynamoDB
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');

// Crear el cliente
const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'AKIAWSKW6GK2LSM5BO3M',
        secretAccessKey: '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'
    }
});

// Crear el cliente de DynamoDB Document
const docClient = DynamoDBDocumentClient.from(client);

async function describeTable() {
    try {
        // Usar GetCommand para obtener un item de prueba
        const params = {
            TableName: 'Users',
            Key: {
                PK: 'USER#TC42',
                SK: 'METADATA'
            }
        };

        const result = await docClient.send(new GetCommand(params));
        console.log('Resultado de la consulta:', result);
    } catch (error) {
        console.error('Error al describir la tabla:', error);
    }
}

describeTable();
