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

async function createIndexes() {
    try {
        console.log('=== Creando índices para la tabla Users ===');

        // Definir índices globales secundarios
        const params = {
            TableName: 'Users',
            GlobalSecondaryIndexUpdates: [
                {
                    Create: {
                        IndexName: 'EmailIndex',
                        KeySchema: [
                            { AttributeName: 'email', KeyType: 'HASH' }
                        ],
                        Projection: {
                            ProjectionType: 'ALL'
                        },
                        ProvisionedThroughput: {
                            ReadCapacityUnits: 5,
                            WriteCapacityUnits: 5
                        }
                    }
                },
                {
                    Create: {
                        IndexName: 'UserIdIndex',
                        KeySchema: [
                            { AttributeName: 'userId', KeyType: 'HASH' }
                        ],
                        Projection: {
                            ProjectionType: 'ALL'
                        },
                        ProvisionedThroughput: {
                            ReadCapacityUnits: 5,
                            WriteCapacityUnits: 5
                        }
                    }
                }
            ]
        };

        // Actualizar la tabla con los nuevos índices
        await dynamoDB.updateTable(params).promise();
        console.log('Índices creados exitosamente');

        // Esperar a que los índices estén activos
        const describeParams = { TableName: 'Users' };
        let indexStatus;
        do {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos
            const result = await dynamoDB.describeTable(describeParams).promise();
            indexStatus = result.Table.GlobalSecondaryIndexes.map(index => 
                `${index.IndexName}: ${index.IndexStatus}`
            ).join(', ');
            console.log('Estado de los índices:', indexStatus);
        } while (indexStatus.includes('CREATING'));

        console.log('Los índices están activos y listos para usar');
    } catch (error) {
        console.error('Error al crear índices:', error);
        throw error;
    }
}

createIndexes();
