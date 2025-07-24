const AWS = require('aws-sdk');
require('dotenv').config();

// Datos de los usuarios
const bcrypt = require('bcryptjs');

const users = [
    {
        userId: '7308',
        name: 'Herlan Figueroa',
        email: 'hfigueroa@sunat.gob.pe',
        phone: '974498839',
        role: 'JEFE DE AREA',
        status: 'ACTIVO',
        area: 'Masivos-ITI-Chimbote',
        createdAt: '2025-07-24',
        lastLogin: '2025-07-24',
        password: '7308', // El userId mismo como contraseña
        preferencias: {},
        PK: 'USER#7308',
        SK: 'METADATA'
    },
    {
        userId: '9943',
        name: 'Noemi Mendez',
        email: 'nmendez@sunat.gob.pe',
        phone: '974498839',
        role: 'Supervisor',
        status: 'ACTIVO',
        area: 'Masivos-ITI-Chimbote',
        createdAt: '2025-07-24',
        lastLogin: '2025-07-24',
        password: '9943', // El userId mismo como contraseña
        preferencias: {},
        PK: 'USER#9943',
        SK: 'METADATA',
        supervisorID: '7308' // Como es supervisor, tiene supervisorID
    }
];

// Función para generar el hash de la contraseña
async function generatePasswordHash(user) {
    try {
        const hash = await bcrypt.hash(user.password, 10);
        return hash;
    } catch (error) {
        console.error('Error al generar hash de contraseña:', error);
        throw error;
    }
}

// Función para insertar usuarios
async function insertUsers() {
    try {
        for (const user of users) {
            // Generar hash de la contraseña
            const passwordHash = await generatePasswordHash(user);

            const params = {
                TableName: 'Users',
                Item: {
                    PK: { S: user.PK },
                    SK: { S: user.SK },
                    userId: { S: user.userId },
                    name: { S: user.name },
                    email: { S: user.email },
                    phone: { S: user.phone },
                    role: { S: user.role },
                    status: { S: user.status },
                    area: { S: user.area },
                    createdAt: { S: user.createdAt },
                    lastLogin: { S: user.lastLogin },
                    passwordHash: { S: passwordHash },
                    preferencias: { S: JSON.stringify(user.preferencias) }
                },
                ConditionExpression: 'attribute_not_exists(PK) AND attribute_not_exists(SK)',
                ReturnValues: 'NONE'
            };

            // Si el usuario tiene supervisorID, agregarlo
            if (user.supervisorID) {
                params.Item.supervisorID = { S: user.supervisorID };
            }

            await dynamoDB.putItem(params).promise();
            console.log(`Usuario ${user.userId} insertado exitosamente`);
        }
        console.log('Todos los usuarios insertados exitosamente');
    } catch (error) {
        console.error('Error al insertar usuarios:', error);
        throw error;
    }
}

// Configurar AWS
const dynamoDB = new AWS.DynamoDB({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Función para insertar usuarios
async function insertUsers() {
    try {
        for (const user of users) {
            const params = {
                TableName: 'Users',
                Item: {
                    PK: { S: user.PK },
                    SK: { S: user.SK },
                    userId: { S: user.userId },
                    name: { S: user.name },
                    email: { S: user.email },
                    phone: { S: user.phone },
                    role: { S: user.role },
                    status: { S: user.status },
                    area: { S: user.area },
                    createdAt: { S: user.createdAt },
                    lastLogin: { S: user.lastLogin },
                    passwordHash: { S: user.passwordHash },
                    preferencias: { S: JSON.stringify(user.preferencias) },
                    ...(user.supervisorID && { supervisorID: { S: user.supervisorID } })
                },
                ConditionExpression: 'attribute_not_exists(PK) AND attribute_not_exists(SK)',
                ReturnValues: 'NONE'
            };

            await dynamoDB.putItem(params).promise();
            console.log(`Usuario ${user.userId} insertado exitosamente`);
        }
        console.log('Todos los usuarios insertados exitosamente');
    } catch (error) {
        console.error('Error al insertar usuarios:', error);
        throw error;
    }
}

// Ejecutar la función
insertUsers().catch(console.error);
