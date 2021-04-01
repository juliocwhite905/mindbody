const express = require('express');
const router = express.Router();
const mindBodyController = require('../controllers/mindBodyController');

module.exports = function() {
    router.post('/create', 
    mindBodyController.create
    );
    router.post('/update', 
    mindBodyController.update
    );
    router.post('/desactivar', 
    mindBodyController.desactivar
    );

    
    return router;
}
 
