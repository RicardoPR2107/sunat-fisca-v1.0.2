const AWS = require('aws-sdk');
require('dotenv').config();

// Configurar AWS
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const activityTypes = [
    {
        PK: 'ACTIVITYTYPE#001',
        SK: 'METADATA',
        typeId: '001',
        name: 'Control de Ingresos (Punto Fijo)',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#002',
        SK: 'METADATA',
        typeId: '002',
        name: 'Control de Llaves',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#003',
        SK: 'METADATA',
        typeId: '003',
        name: 'Control de Espectáculos Públicos',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#004',
        SK: 'METADATA',
        typeId: '004',
        name: 'Sustentación de Mercaderías',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#005',
        SK: 'METADATA',
        typeId: '005',
        name: 'Control Móvil',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#006',
        SK: 'METADATA',
        typeId: '006',
        name: 'CIAE',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#007',
        SK: 'METADATA',
        typeId: '007',
        name: 'Inspecciones Laborales',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#008',
        SK: 'METADATA',
        typeId: '008',
        name: 'VECP',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#009',
        SK: 'METADATA',
        typeId: '009',
        name: 'VICOT - Fichas A',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#010',
        SK: 'METADATA',
        typeId: '010',
        name: 'VICOT - Fichas B',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#011',
        SK: 'METADATA',
        typeId: '011',
        name: 'Control de Imprentas',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#012',
        SK: 'METADATA',
        typeId: '012',
        name: 'Llamadas',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#013',
        SK: 'METADATA',
        typeId: '013',
        name: 'Archivos',
        status: 'ACTIVO'
    },
    {
        PK: 'ACTIVITYTYPE#014',
        SK: 'METADATA',
        typeId: '014',
        name: 'Otros',
        status: 'ACTIVO'
    }
];

async function seedActivityTypes() {
    try {
        for (const activity of activityTypes) {
            const params = {
                TableName: 'ActivityTypes',
                Item: activity
            };

            await dynamodb.put(params).promise();
            console.log(`Se ha insertado el tipo de actividad: ${activity.typeId} - ${activity.name}`);
        }
        console.log('¡Se han insertado todos los tipos de actividades exitosamente!');
    } catch (error) {
        console.error('Error al insertar los tipos de actividades:', error);
    }
}

// Ejecutar la función
seedActivityTypes();
