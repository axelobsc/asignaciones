'use strict';

const Proyecto = require('../models/proyecto.model');

exports.findAll = function(req, res) {
  Proyecto.findAll(function(err, proyecto) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', proyecto);
    res.send(proyecto);
  });
};

exports.create = function(req, res) {
    const new_proyecto = new Proyecto(req.body);
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor ingrese los campos requeridos' });
    }else{
        Proyecto.create(new_proyecto, function(err, proyecto) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Proyecto agregado con éxito!",data:proyecto});
        });
    }
};


exports.findById = function(req, res) {
    Proyecto.findById(req.params.id, function(err, proyecto) {
        if (err)
        res.send(err);
        res.json(proyecto);
    });
};

/*
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor ingrese los campos requeridos' });
    }else{
        Proyecto.update(req.params.id, new Proyecto(req.body), function(err, proyecto) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Proyecto creado' });
        });
    }
};


exports.delete = function(req, res) {
  Proyecto.delete( req.params.id, function(err, proyecto) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Proyecto eliminado' });
  });
};
*/