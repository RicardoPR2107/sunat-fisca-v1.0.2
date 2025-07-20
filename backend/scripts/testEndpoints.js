const axios = require('axios');

async function testEndpoints() {
    try {
        console.log('\n=== Probando endpoints ===');
        
        // 1. Validar usuario por userId
        console.log('\n=== Validando usuario por userId ===');
        const userIdResponse = await axios.post('http://localhost:3001/auth', {
            code: 'TC42'
        });
        console.log('Resultado userId:', userIdResponse.data);
        
        // 2. Validar usuario por email
        console.log('\n=== Validando usuario por email ===');
        const emailResponse = await axios.post('http://localhost:3001/auth', {
            code: 'prac-rpalma@sunat.gob.pe'
        });
        console.log('Resultado email:', emailResponse.data);
        
        // 3. Intentar login
        console.log('\n=== Intentando login ===');
        const loginResponse = await axios.post('http://localhost:3001/auth/login', {
            code: 'TC42',
            password: 'TC42'
        });
        console.log('Resultado login:', loginResponse.data);
        
    } catch (error) {
        console.error('\n=== Error ===');
        console.error('Mensaje:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
            console.error('Status:', error.response.status);
        }
    }
}

testEndpoints();
