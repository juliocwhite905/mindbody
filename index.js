const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const fs = require("fs");
const https = require("https");

//var options = {
  //  key: fs.readFileSync('/etc/nginx/ssl/demo.asesores-e.crt', 'utf8'),
    //cert: fs.readFileSync('/etc/nginx/ssl/demo.asesores-e.com.crt', 'utf8'),
    //ca: fs.readFileSync('/etc/nginx/ssl/demo.asesores-e.com.ca-bundle', 'utf8')
   //}

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes());

 app.listen(4000, () =>{
     console.log('servidor puerto 4000');
 })

//https.createServer(options,app).listen(4000, () =>{
  //  console.log('servidor puerto 4000');
  //});
