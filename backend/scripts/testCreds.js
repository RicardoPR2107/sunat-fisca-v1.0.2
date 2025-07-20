require('dotenv').config();
const AWS = require('aws-sdk');

console.log('Credenciales cargadas:', {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Intentar usar las credenciales directamente
const AWS_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
};

AWS.config.update(AWS_CONFIG);

console.log('AWS Config:', AWS.config.credentials);
