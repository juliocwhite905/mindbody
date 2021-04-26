const clienteAxios = require('../config/axios');
const mindBodyAxios = require('../config/api');
var formidable = require('formidable');
const utf8 = require('utf8');


exports.createbitrix = async (req, res, next) => {
    console.log(req.query);
    let idBitrix = req.query.id;
    let AddressLine1 = req.query.direccion;
    let BirthDate = "";
    let fechaNacimiento = req.query.nacimiento;
    let City = req.query.ciudad[1];
    let State = req.query.estado;
    let Email = req.query.email;
    let FirstName = req.query.name;
    let LastName = req.query.apellido;
    let HomePhone = req.query.telfcasa.replace(/[+]/g, "");
    let WorkPhone = req.query.telftrabajo.replace(/[+]/g, "");
    let MobilePhone = req.query.telfmobil.replace(/[+]/g, "");
    let PostalCode = req.query.postal;
    
    let phone = req.query.telefono.replace(/[+]/g, "");
    //console.log(phone);
    var array = JSON.parse("["+phone+"]");
    //console.log(array);

    if(!MobilePhone.trim()){
        MobilePhone = array[0].toString();
    }
    if(WorkPhone.trim() === array[0].toString()){
        WorkPhone = "";
    }
    if(HomePhone.trim() === array[0].toString()){
      
    }

    let Gender = "";
    switch (req.query.genero.trim()) {
      case '':
        Gender = 'None';
        break;
      case 'Preferiría Omitir':
        Gender = 'Undisclosed';
        break;
      case 'Masculino': 
       Gender = 'Male';
        break;
      case 'Femenino':
        Gender = 'Female';
        break;
      default:
        Gender = 'None';
    }


    // console.log("id",req.query.id);
    // console.log("nacimiento",req.query.nacimiento);
    // console.log("email",req.query.email);
    // console.log("ciudad",req.query.ciudad);
    // console.log("genero",Gender);
    // console.log("postal",req.query.postal);
    // console.log("direccion",req.query.direccion);
    // console.log("telfcasa",HomePhone);
    // console.log("telftrabajo",WorkPhone);
    // console.log("telfmobil",MobilePhone);
    // console.log("estado",req.query.estado);
    // console.log("name",req.query.name);
    // console.log("apellido",req.query.apellido);
    // console.log("segundoname",req.query.segundoname);
    // console.log("telefono",req.query.telefono);

    if(fechaNacimiento){
        let fecha = fechaNacimiento.split('/');
        let dia = fecha[0];
        let mes = fecha[1];
        let annio = fecha[2].substr(0,4);
        // console.log(fecha)
        // console.log(dia);
        // console.log(mes);
        // console.log(annio);
        var today = new Date(annio,mes - 1,dia);
        // console.log(today);
        // console.log(today.toISOString());
        BirthDate = today.toISOString();
    }
    
    var data = JSON.stringify({
        AddressLine1,
        BirthDate,
        City,
        Country: "ES",
        State,
        Email,
        FirstName,
        LastName,
        Gender,
        HomePhone,
        IsProspect: false,
        MobilePhone,
        PostalCode,
        WorkPhone
      });

    const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
            'SiteId': '812798'
            }
    };
        
        try {
         let clientes = await mindBodyAxios.post(`/client/addclient`,data,options);
        //   console.log(clientes.data.Client);
         let idMindbody = clientes.data.Client.Id;
         await clienteAxios.post(`/crm.contact.update.json?id=${idBitrix}&fields[UF_CRM_1618077556918]=${idMindbody}&fields[UF_CRM_1618077662617]=53`);
        //   console.log(idMindbody);
        } catch (error) {
            console.log(error.response.data)
        }




  
    
    res.send('ok');
 }

 exports.updatebitrix = async (req, res, next) =>{
    // console.log(req.query);
    let lists = 39;
    let creado = req.query.creado.replace('user_',"");
    let IdToken = "";
    let token = "";
    let user = "";
    let password = "";
    let idBitrix = req.query.id;
    let idMindbody = req.query.idmindbody;
    let AddressLine1 = req.query.direccion;
    let BirthDate = "";
    let fechaNacimiento = req.query.nacimiento;
    let City = req.query.ciudad[1];
    let State = req.query.estado;
    let Email = req.query.email;
    let FirstName = req.query.name;
    let LastName = req.query.apellido;
    let HomePhone = req.query.telfcasa.replace(/[+]/g, "");
    let WorkPhone = req.query.telftrabajo.replace(/[+]/g, "");
    let MobilePhone = req.query.telfmobil.replace(/[+]/g, "");
    let PostalCode = req.query.postal;
    
    let phone = req.query.telefono.replace(/[+]/g, "");
    //console.log(phone);
    var array = JSON.parse("["+phone+"]");
    //console.log(array);

    if(!MobilePhone.trim()){
        MobilePhone = array[0].toString();
    }
    if(WorkPhone.trim() === array[0].toString()){
        WorkPhone = "";
    }
    if(HomePhone.trim() === array[0].toString()){
      
    }

    let Gender = "";
    switch (req.query.genero.trim()) {
      case '':
        Gender = 'None';
        break;
      case 'Preferiría Omitir':
        Gender = 'Undisclosed';
        break;
      case 'Masculino': 
       Gender = 'Male';
        break;
      case 'Femenino':
        Gender = 'Female';
        break;
      default:
        Gender = 'None';
    }


    // console.log("id",req.query.id);
    // console.log("nacimiento",req.query.nacimiento);
    // console.log("email",req.query.email);
    // console.log("ciudad",req.query.ciudad);
    // console.log("genero",Gender);
    // console.log("postal",req.query.postal);
    // console.log("direccion",req.query.direccion);
    // console.log("telfcasa",HomePhone);
    // console.log("telftrabajo",WorkPhone);
    // console.log("telfmobil",MobilePhone);
    // console.log("estado",req.query.estado);
    // console.log("name",req.query.name);
    // console.log("apellido",req.query.apellido);
    // console.log("segundoname",req.query.segundoname);
    // console.log("telefono",req.query.telefono);

    if(fechaNacimiento){
        let fecha = fechaNacimiento.split('/');
        let dia = fecha[0];
        let mes = fecha[1];
        let annio = fecha[2].substr(0,4);
        // console.log(fecha)
        // console.log(dia);
        // console.log(mes);
        // console.log(annio);
        var today = new Date(annio,mes - 1,dia);
        // console.log(today);
        // console.log(today.toISOString());
        BirthDate = today.toISOString();
    }
    


      try {
        const credenciales = await clienteAxios.post(`/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=${lists}`);

        // console.log(credenciales.data.result[0]);
        // console.log(credenciales.data.result[0].ID);
        // console.log(credenciales.data.result[0].NAME);
        // console.log(Object.values(credenciales.data.result[0].PROPERTY_141)[0]);
        // console.log(Object.values(credenciales.data.result[0].PROPERTY_142)[0]);
        token = credenciales.data.result[0].NAME;
        IdToken = credenciales.data.result[0].ID;
        user = Object.values(credenciales.data.result[0].PROPERTY_141)[0];
        password = Object.values(credenciales.data.result[0].PROPERTY_142)[0];

      } catch (error) {
          console.log(error)
      }
    //   console.log('token',token);
    //   console.log('user',user);
    //   console.log('password',password);

      if(user || password){
             const option = {
        headers: { 
            'Content-Type': 'application/json',
            'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
            'SiteId': '812798',
            'authorization': token, 
            }
    };
      try {
         await mindBodyAxios.get(`/client/clients?limit=1&offset=`,option);
      } catch (error) {
        //   console.log(error.response.data.Error);
          const data = JSON.stringify({
            Username: user,
            Password: password
          });
          const option = {
            headers: { 
                'Content-Type': 'application/json',
                'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
                'SiteId': '812798', 
                }
        };
        try {
            const result = await mindBodyAxios.post(`/usertoken/issue`,data,option);
            // console.log('nuevo token')
            // console.log(result.data);
            // console.log(result.data.AccessToken);
            try {
               await clienteAxios.post(`/lists.element.update.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=${lists}&ELEMENT_ID=216&FIELDS[PROPERTY_141]=${user}&FIELDS[PROPERTY_142]=${password}&FIELDS[NAME]=${result.data.AccessToken}`);
            } catch (error) {
                console.log(error);
            }            
        } catch (error) {
            // console.log(error.response.data.Error);
            let mensaje = utf8.encode('Credenciales invalidas de MindBody revisar lista de Token');
            await clienteAxios.post(`/im.notify.json?to=${creado}&type=SYSTEM&message=${mensaje}`);
        }
      }



      const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Api-Key': '354d8205b307429e8f4e23e70af64ca2', 
            'SiteId': '812798',
            'authorization': '82294a384db1471e9a38ad51814a1599c2161d6693af4eb3a63ca195d33c08a2', 
            }
    };
    try {
        const data = JSON.stringify({
            Client: {
                Id: idMindbody,
                AddressLine1,
                BirthDate,
                City,
                Country: "ES",
                State,
                Email,
                FirstName,
                LastName,
                Gender,
                HomePhone,
                IsProspect: false,
                MobilePhone,
                PostalCode,
                WorkPhone,
                // Active: false,
              },
              CrossRegionalUpdate: false
          });
        let clientes = await mindBodyAxios.post(`/client/updateclient?ClientIds=${idMindbody}`,data,options);
        //  console.log(clientes.data.Client);
       } catch (error) {
        //    console.log(error.response.data)
       } 

      }else{
          try {
            let mensaje = utf8.encode('No se cuenta con credenciales de Mindbody en la lista de Token');
            await clienteAxios.post(`/im.notify.json?to=${creado}&type=SYSTEM&message=${mensaje}`);
          } catch (error) {
              
          }
      }

   
    res.send('ok');

 }

 exports.test = async (req, res, next) =>{
   console.log('ok');

   res.send('ok');
 }