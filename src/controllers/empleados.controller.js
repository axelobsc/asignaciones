'use strict';

const Empleados = require('../models/empleados.model');

exports.findAll = function(req, res) {
  Empleados.findAll(function(err, empleado) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', empleado);
    res.send(empleado);
  });
};

exports.create = function(req, res) {
    const new_usuario = new Empleados(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Empleados.create(new_usuario, function(err, empleado) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Employee added successfully!",data:empleado});
        });
    }
};


exports.findById = function(req, res) {
    Empleados.findById(req.params.id, function(err, empleado) {
        if (err)
        res.send(err);
        res.json(empleado);
    });
};

/*
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Empleados.update(req.params.id, new Empleados(req.body), function(err, empleado) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Empleados creado' });
        });
    }
};


exports.delete = function(req, res) {
  Empleados.delete( req.params.id, function(err, empleado) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Empleados eliminado' });
  });
};
*/