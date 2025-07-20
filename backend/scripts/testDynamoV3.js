require('dotenv').config();
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');
const { fromIni } = require('@aws-sdk/credential-provider-ini');

// Configurar cliente de DynamoDB
const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: fromIni({
        profile: 'default',
        filename: process.env.AWS_CREDENTIALS_FILE || '~/.aws/credentials'
    })
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

async function testConnection() {
    try {
        console.log('Probando conexión a DynamoDB...');
        
        // Intentar crear un item simple
        const params = {
            TableName: 'Users',
            Item: {
                userId: 'TEST123',
                name: 'Test User'
            }
        };

        console.log('Intentando crear item de prueba...');
        const result = await dynamoDB.send(new PutCommand(params));
        console.log('Item creado exitosamente:', result);
    } catch (error) {
        console.error('Error detallado:', {
            message: error.message,
            code: error.code,
            name: error.name,
            stack: error.stack,
            details: error.details
        });
        throw error;
    }
}

testConnection();
