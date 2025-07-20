const axios = require('axios');

async function testAuth() {
    try {
        console.log('\n=== Probando endpoint de validación ===');
        
        // Validar usuario por userId
        const userIdResponse = await axios.post('http://localhost:3001/auth/validate-user', {
            code: 'TC42'
        });
        console.log('\nResultado userId:', userIdResponse.data);
        
        // Validar usuario por email
        const emailResponse = await axios.post('http://localhost:3001/auth/validate-user', {
            code: 'prac-rpalma@sunat.gob.pe'
        });
        console.log('\nResultado email:', emailResponse.data);
        
    } catch (error) {
        console.error('\nError:', error.response?.data || error.message);
    }
}

testAuth();
