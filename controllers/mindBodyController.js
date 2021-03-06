const clienteAxios = require('../config/axios');
const mindBodyAxios = require('../config/api');
var formidable = require('formidable');
const utf8 = require('utf8');


exports.create = async (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.parse(req, async function (err, rq, files) {
        // console.log(rq);
        try {
            const reqt = rq.eventData;
            // console.log(reqt);
            let contacto = await clienteAxios.post(`/crm.contact.list.json?filter[UF_CRM_1618077556918]=${reqt.clientId}`);
            if(contacto.data.result.length === 0){
                let email = "";
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(reqt.email)) {
                    email = reqt.email;
                }
                // const respuesta = await clienteAxios.post(`/crm.contact.add.json?FIELDS[UF_CRM_1614652133533]=${reqt.clientId}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1614652397542]=${reqt.gender}&FIELDS[UF_CRM_1616730398141]=26`);
                const respuesta = await clienteAxios.post(`/crm.contact.add.json?FIELDS[UF_CRM_1618077556918]=${reqt.clientId}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1618077662617]=53`);
                // console.log(respuesta.data.result);
            }
           
        } catch (error) {
            console.log(error);
        }
        
    });




    res.sendStatus(200);
}


exports.update = async (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.parse(req, async function(err, rq, files) {
        // console.log(rq);
        try {
           const reqt = rq.eventData;
           let email = "";
           let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (reg.test(reqt.email)) {
               email = reqt.email;
           }

           const idCliente = reqt.clientId;
            let contacto = await clienteAxios.post(`/crm.contact.list.json?filter[UF_CRM_1618077556918]=${idCliente}`);
           
            if(contacto.data.result.length === 1){
            const options = {
                headers: { 
                    'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
                    'SiteId': '812798', 
                    'Authorization': '1adf519d2ad644698df11cc527e392c5bc89fa06a85c4698a991e56fb2eb6428'
                    }
                };
            let status = true;
            try {
            let clienteMinBody = await mindBodyAxios.get(`/client/clients?ClientIds=${idCliente}`,options);
            // console.log('consulta')
            // console.log(clienteMinBody.data.Clients[0].Active)
            status = clienteMinBody.data.Clients[0].Active;
            } catch (error) {
                console.log('error')
            }

            let IdStatus = 53;
            if(!status){
                IdStatus = 55;
            }
            // console.log('IdStatus',IdStatus)
            const id = contacto.data.result[0].ID;
            // console.log(id);
            // const respuesta = await clienteAxios.post(`/crm.contact.update.json?id=${id}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1614652397542]=${reqt.gender}&FIELDS[UF_CRM_1616730398141]=${IdStatus}`);
            const respuesta = await clienteAxios.post(`/crm.contact.update.json?id=${id}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1618077662617]=${IdStatus}`);
  
            // console.log(respuesta.data.result);
            }
            
        } catch (error) {
            console.log(error);
        }
        
    });



   res.sendStatus(200);
}


exports.desactivar = async (req, res, next) => {
 
     let form = new formidable.IncomingForm();
     form.parse(req, async function(err, rq, files) {
        
        //  console.log(rq);
        //  console.log(rq.eventId);
         const reqt = rq.eventData;
         let email = "";
         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (reg.test(reqt.email)) {
             email = reqt.email;
         }
           const idCliente = reqt.clientId;
           try {
            let contacto = await clienteAxios.post(`/crm.contact.list.json?filter[UF_CRM_1618077556918]=${idCliente}`);
            if(contacto.data.result.length === 1){
                const id = contacto.data.result[0].ID;
                // const respuesta = await clienteAxios.post(`/crm.contact.update.json?id=${id}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1614652397542]=${reqt.gender}&FIELDS[UF_CRM_1616730398141]=27`);

                const respuesta = await clienteAxios.post(`/crm.contact.update.json?id=${id}&FIELDS[NAME]=${reqt.firstName}&FIELDS[LAST_NAME]=${reqt.lastName}&FIELDS[BIRTHDATE]=${reqt.birthDateTime}&FIELDS[PHONE][0][VALUE]=${reqt.mobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt.homePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt.workPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt.addressLine1}&FIELDS[ADDRESS_2]=${reqt.addressLine2}&FIELDS[ADDRESS_CITY]=${reqt.city}&FIELDS[ADDRESS_PROVINCE]=${reqt.state}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt.postalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt.country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1618077662617]=55`);

                // console.log(respuesta.data.result);
            }
           } catch (error) {
               console.log(error);
           }
         
     });
 
 
 
    res.sendStatus(200);
 }



 


 exports.createbitrixEvent = async (req, res, next) => {
    console.log(req.query);
    // try {
    //     const contacto =  utf8.encode("<a href='https://crm.onlineblink.com/crm/contact/details/52/'>Contacto</a>")
    //     const respuesta = await clienteAxios.post(`/calendar.event.add.json?type=group&ownerId=87&from=2021-04-24&to=2021-04-24&name=cita25&section=101&description=${contacto}`);
    //     console.log(respuesta.data.result)
    //     await clienteAxios.post('/bizproc.workflow.start?TEMPLATE_ID=71&DOCUMENT_ID[0]=crm&DOCUMENT_ID[1]=CCrmDocumentContact&DOCUMENT_ID[2]=52&PARAMETERS[id]='+respuesta.data.result);
    // } catch (error) {
    //     console.log(error);
    // }


    res.send('ok')
 }

 exports.migrate = async (req, res, next) => {
    const credenciales = await clienteAxios.post(`/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=39`);

     token = credenciales.data.result[0].NAME;

         const opciones = {
            headers: { 
                'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
                'SiteId': '812798', 
                'Authorization': token
                }
            };
            let cl = [];
            try {
             cl = await mindBodyAxios.get(`/client/clients?limit=1&offset=`,opciones);
            } catch (error) {
                console.log('error')
            }
            // console.log(Number(cl.data.PaginationResponse.TotalResults))

  let TotalResults = Number(cl.data.PaginationResponse.TotalResults);
  console.log(TotalResults)
  let offset = 0;  
  while(true){
      if(offset < TotalResults){
        console.log(offset)
        const options = {
            headers: { 
                'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
                'SiteId': '812798', 
                // 'Authorization': '1adf519d2ad644698df11cc527e392c5bc89fa06a85c4698a991e56fb2eb6428'
                'Authorization': token
                }
            };
            let clientes = [];
            try {
             clientes = await mindBodyAxios.get(`/client/clients?limit=200&offset=${offset}`,options);
             console.log(clientes.data.Clients.length)
            } catch (error) {
                console.log('error')
            }
        
        
            const reqt = clientes.data.Clients;
        for (let i = 0; i < clientes.data.Clients.length; i++){
          
                try {
                    let email = reqt[i].Email;
                    if(email === null){
                        email =`FIELDS[EMAIL][0][VALUE]=`
                    }else{
                        email = `FIELDS[EMAIL][0][VALUE]=${reqt[i].Email}`
                    }
                    // console.log(email)
                    let IdStatus = 53;
                    if(!reqt[i].Active){
                        IdStatus = 55;
                    }
                    const respuesta = await clienteAxios.post(`/crm.contact.add.json?FIELDS[UF_CRM_1618077556918]=${reqt[i].Id}&FIELDS[NAME]=${reqt[i].FirstName}&FIELDS[LAST_NAME]=${reqt[i].LastName}&FIELDS[BIRTHDATE]=${reqt[i].BirthDate}&FIELDS[PHONE][0][VALUE]=${reqt[i].MobilePhone}&FIELDS[PHONE][0][VALUE_TYPE]=MOBILE&FIELDS[PHONE][1][VALUE]=${reqt[i].HomePhone}&FIELDS[PHONE][1][VALUE_TYPE]=HOME&FIELDS[PHONE][2][VALUE]=${reqt[i].WorkPhone}&FIELDS[PHONE][2][VALUE_TYPE]=WORK&${email}&FIELDS[EMAIL][0][VALUE_TYPE]=HOME&FIELDS[ADDRESS]=${reqt[i].AddressLine1}&FIELDS[ADDRESS_2]=${reqt[i].AddressLine2}&FIELDS[ADDRESS_CITY]=${reqt[i].City}&FIELDS[ADDRESS_PROVINCE]=${reqt[i].State}&FIELDS[ADDRESS_POSTAL_CODE]=${reqt[i].PostalCode}&FIELDS[ADDRESS_COUNTRY]=${reqt[i].Country}&FIELDS[OPENED]=Y&FIELDS[SOURCE_ID]=1&FIELDS[EXPORT]=Y&FIELDS[TYPE_ID]=CLIENT&FIELDS[UF_CRM_1614652397542]=${reqt[i].Gender}&FIELDS[UF_CRM_1618077662617]=${IdStatus}`);
                } catch (error) {
                    console.log(error)
                }
        
         }

      }else{
          console.log('fin')
          break;
      }


      offset = offset + 200;
    
    
    
  }

  

   res.sendStatus(200);
}


