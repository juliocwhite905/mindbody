const clienteAxios = require('../config/axios');
var formidable = require('formidable');


exports.create = async (req, res, next) => {
    // console.log(req);
    let form = new formidable.IncomingForm();
    form.parse(req, async function (err, rq, files) {
        // `file` is the name of the <input> field of type `file`
        console.log(rq);
        try {
            const respuesta = await clienteAxios.post('/crm.contact.add.json?FIELDS[NAME]=Julio3&FIELDS[LAST_NAME]=Lopez');
            console.log(respuesta.data.result);
        } catch (error) {
            console.log(error);
        }
        
    });




    res.sendStatus(200);
}


exports.update = async (req, res, next) => {
   // console.log(req);

    let form = new formidable.IncomingForm();
    form.parse(req, function(err, rq, files) {
        // `file` is the name of the <input> field of type `file`
        console.log(rq);
        
    });



   res.sendStatus(200);
}

exports.desactivar = async (req, res, next) => {
    // console.log(req);
 
     let form = new formidable.IncomingForm();
     form.parse(req, function(err, rq, files) {
         // `file` is the name of the <input> field of type `file`
        
         console.log(rq);
         console.log(rq.eventId);
         
     });
 
 
 
    res.sendStatus(200);
 }