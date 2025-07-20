require('dotenv').config({ path: require('path').resolve(__dirname, '..', '..', '.env') });

process.env.AWS_REGION = 'us-east-1';
process.env.AWS_ACCESS_KEY_ID = 'AKIAWSKW6GK2LSM5BO3M';
process.env.AWS_SECRET_ACCESS_KEY = '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';

require('./seedActivityTypes.js');
