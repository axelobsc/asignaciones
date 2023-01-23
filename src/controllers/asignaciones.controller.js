'use strict';

const Asignaciones = require('../models/asignaciones.model');

exports.findAll = function(req, res) {
  Asignaciones.findAll(function(err, asignaciones) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', asignaciones);
    res.send(asignaciones);
  });
};

exports.create = function(req, res) {
    const new_asignaciones = new Asignaciones(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor agregar los campos requeridos' });
    }else{
        Asignaciones.create(new_asignaciones, function(err, asignaciones) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:asignaciones});
        });
    }
};


exports.findById = function(req, res) {
    Asignaciones.findById(req.params.id, function(err, asignaciones) {
        if (err)
        res.send(err);
        res.json(asignaciones);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Asignaciones.update(req.params.id, new Employee(req.body), function(err, asignaciones) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Employee successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Asignaciones.delete( req.params.id, function(err, asignaciones) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Employee successfully deleted' });
  });
};