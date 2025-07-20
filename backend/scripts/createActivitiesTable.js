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

async function createTable() {
    try {
        const params = {
            TableName: 'Activities',
            KeySchema: [
                { AttributeName: 'PK', KeyType: 'HASH' },  // Partition key
                { AttributeName: 'SK', KeyType: 'RANGE' }   // Sort key
            ],
            AttributeDefinitions: [
                { AttributeName: 'PK', AttributeType: 'S' },
                { AttributeName: 'SK', AttributeType: 'S' },
                { AttributeName: 'userId', AttributeType: 'S' },
                { AttributeName: 'activityId', AttributeType: 'S' }
            ],
            GlobalSecondaryIndexes: [
                {
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
                },
                {
                    IndexName: 'ActivityIdIndex',
                    KeySchema: [
                        { AttributeName: 'activityId', KeyType: 'HASH' }
                    ],
                    Projection: {
                        ProjectionType: 'ALL'
                    },
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 5,
                        WriteCapacityUnits: 5
                    }
                }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5
            }
        };

        // Crear la tabla
        await dynamoDB.createTable(params).promise();
        console.log('Tabla Activities creada exitosamente');

        // Esperar a que la tabla esté activa
        const describeParams = { TableName: 'Activities' };
        let tableStatus;
        do {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos
            const result = await dynamoDB.describeTable(describeParams).promise();
            tableStatus = result.Table.TableStatus;
            console.log('Estado de la tabla:', tableStatus);
        } while (tableStatus !== 'ACTIVE');

        console.log('Tabla Activities está activa y lista para usar');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
        throw error;
    }
}

createTable();
