'use strict'
let mongoose = require('mongoose');
let app = require("./app");
let port = 3700;
//promesa para conexion con mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/curso")
        .then(()=>{
            console.log("Conexion a la base de datos extablecida con exito");
        })
        .catch((err)=>{
            console.log(err);
        });
app.listen(port, ()=>{
    console.log("Corriendo servidor");
})