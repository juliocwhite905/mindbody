const axios = require('axios');

const clienteAxios = axios.create({
    baseURL : "https://crm.onlineblink.com/rest/1/i2uc6tpvmi9nbt95"
});

module.exports = clienteAxios;