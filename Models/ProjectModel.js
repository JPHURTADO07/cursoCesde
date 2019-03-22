'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//Esquema de la bd
let ProjectSchema = Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    ciudad: String,
    fruta: String,
    color: String,
    animal: String
});
//Mongoose.model('coleccion','esquema de la coleccion')
module.exports = mongoose.model('cursos',ProjectSchema);