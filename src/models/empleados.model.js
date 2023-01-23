'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Empleados = function(empleado){
    this.nombre       = empleado.nombre;
    this.apellidos    = empleado.apellidos;
    this.email        = empleado.email;
    this.status       = empleado.status;
};

Empleados.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO empleados set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Empleados.findById = function (id, result) {
    dbConn.query("Select * from empleados where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Empleados.findAll = function (result) {
    dbConn.query("Select * from empleados", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('usuario : ', res);  
            result(null, res);
        }
    });   
};

/*
Empleados.update = function(id, empleado, result){
  dbConn.query("UPDATE empleados SET nombre=?,apellidos=?,email=?,status=? WHERE id = ?", [empleado.nombre,empleado.apellidos,empleado.email,empleado.status, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Empleados.delete = function(id, result){
     dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};
*/
module.exports = Empleados;