const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const fs = require("fs");
const https = require("https");

var options = {
    key: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/cert.pem', 'utf8'),
    ca: fs.readFileSync('/home/bitrix/dehydrated/certs/crm.onlineblink.com/chain.pem', 'utf8')
   }

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes());

// app.listen(4000, () =>{
//     console.log('servidor puerto 4000');
// })

https.createServer(options,app).listen(4000, () =>{
    console.log('servidor puerto 4000');
  });