const axios = require('axios');

const clienteAxios = axios.create({
    baseURL : "https://crm.onlineblink.com/rest/205/eiwd3iapk7hblq5f"
});

module.exports = clienteAxios;