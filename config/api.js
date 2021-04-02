const axios = require('axios');

const mindBodyAxios = axios.create({
    baseURL : "https://api.mindbodyonline.com/public/v6"
});

module.exports = mindBodyAxios;