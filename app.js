'use strict'
//importar biblioteca para manejo de peticiones http y archivos json
let express = require('express');
let bodyParser = require('body-parser');
//ejecuto express
let app = express();
//cargar archivo de ruta
let projectRoutes= require('./Routes/projectRoutes');
//app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//rutas
app.use('/api',projectRoutes);
module.exports = app;