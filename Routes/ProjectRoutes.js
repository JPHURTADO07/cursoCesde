'use strict'
let express = require('express');
// importo el controlador project
let projectController = require('../Controllers/ProjectController');
//método router de express
let router = express.Router();
// Se crea una ruta por get ('ruta a crear','método del controlador')
router.get('/home',projectController.home);
// Se crea una nueva ruta
router.get('/test',projectController.test);
router.post('/saveProject',projectController.saveProject);

module.exports = router;