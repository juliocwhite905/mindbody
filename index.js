const express = require('express');
const routes = require('./routes');
const fs = require("fs");
const https = require("https");

var options = {
    key: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/cert.pem', 'utf8'),
    ca: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/chain.pem', 'utf8')
   }

const app = express();

app.use('/', routes());

// app.listen(4000, () =>{
//     console.log('servidor puerto 4000');
// })

https.createServer(options,app).listen(4000, () =>{
    console.log('servidor puerto 4000');
  });