require('dotenv').config();
const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');

// Configurar AWS
const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Obtener todos los tipos de actividades
const getActivityTypes = async (req, res) => {
    try {
        const command = new ScanCommand({
            TableName: 'ActivityTypes',
            ProjectionExpression: '#tid, #n, #s',
            ExpressionAttributeNames: {
                '#tid': 'typeId',
                '#n': 'name',
                '#s': 'status'
            }
        });
        const result = await client.send(command);
        
        // Convertir los resultados a formato normal usando unmarshall
        const sortedActivities = result.Items.map(item => unmarshall(item)).sort((a, b) => {
            return parseInt(a.typeId) - parseInt(b.typeId);
        });

        res.json(sortedActivities);
    } catch (error) {
        console.error('Error al obtener tipos de actividades:', error);
        res.status(500).json({ error: 'Error al obtener tipos de actividades' });
    }
};

module.exports = (app) => {
    app.get('/api/activityTypes', getActivityTypes);
};
