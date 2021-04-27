const express = require('express');
const router = express.Router();
const mindBodyController = require('../controllers/mindBodyController');
const bitrixController = require('../controllers/bitrixController');

module.exports = function() {
    router.all('/create', 
    mindBodyController.create
    );
    router.post('/update', 
    mindBodyController.update
    );
    router.post('/desactivar', 
    mindBodyController.desactivar
    );
    router.get('/migrate', 
    mindBodyController.migrate
    );
    router.post('/createbitrix', 
    bitrixController.createbitrix
    );
    router.post('/updatebitrix', 
    bitrixController.updatebitrix
    );
    router.post('/createbitrixEvent', 
    mindBodyController.createbitrixEvent
    );
    router.get('/test', 
    bitrixController.test
    );
    
    
    return router;
}
 
