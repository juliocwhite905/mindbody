const clienteAxios = require('../config/axios');
var formidable = require('formidable');


exports.create = async (req, res, next) => {
    // console.log(req);
    let form = new formidable.IncomingForm();
    form.parse(req, async function (err, rq, files) {
        // `file` is the name of the <input> field of type `file`
        console.log(rq);
        try {
            const reqt = rq.eventData;
            const respuesta = await clienteAxios.post(`/crm.contact.add.json?FIELDS[UF_CRM_1614652133533]=${reqt.clientId}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.homePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[EMAIL][0][VALUE]=${reqt.email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1614652397542]=${reqt.gender}&FIELDS[UF_CRM_1616730398141]=26`);
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