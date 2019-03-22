'use strict'
//Se crea un objeto controller tipo json
let Project = require("../Models/ProjectModel")
let controller = {
    home: function(req,res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el metodo test del controlador'
        });
    },
    saveProject: function(req,res){
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.edad = params.edad;
        project.ciudad = params.ciudad;
        project.fruta = params.fruta;
        project.color = params.color;
        project.animal = params.animal;
        project.save((err,projectStored)=>{
            if (err) {
                return res.status(500).send({
                     menssage: "No se puede guardar el documento"
                });
            }
            if(!projectStored){
                return res.status(404).send({
                    mensaje:"No se ha podido guardar el documento"
                });
            }
        })     
        return res.status(200).send({
            datos: project,
            menssage: "Guardado"
        });
    }
};
module.exports = controller;