require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'sunat_fisca',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'your_password',
    port: process.env.DB_PORT || 5432
};

module.exports = dbConfig;
