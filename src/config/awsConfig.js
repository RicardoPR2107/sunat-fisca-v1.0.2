require('dotenv').config();

const AWS = require('aws-sdk');

// Configurar AWS con las credenciales del .env
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1' // o la región que estés usando
});

// Exportar la instancia de DynamoDB
module.exports = {
    dynamoDB: new AWS.DynamoDB({apiVersion: '2012-08-10'})
};
