'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Asignaciones = function(employee){
    this.email          = employee.email;
    this.departamento   = employee.departamento;
    this.division       = employee.division;
    this.squad          = employee.squad;
    this.asignacion     = employee.asignacion;
    this.activo         = employee.activo;
    this.id_proyecto    = employee.id_proyecto;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Asignaciones.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO asignaciones set ?", newEmp, function (err, res) {
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
Asignaciones.findById = function (id, result) {
    dbConn.query("Select * from asignaciones where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Asignaciones.findAll = function (result) {
    dbConn.query("Select * from asignaciones", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });   
};
Asignaciones.update = function(id, asignaciones, result){
  dbConn.query("UPDATE asignaciones SET email=?,departamento=?,division=?,squad=?,asignacion=?,activo=?,id_proyecto=?,created_at=?,updated_at=? WHERE id = ?", [asignaciones.email,asignaciones.departamento,asignaciones.division,asignaciones.squad,asignaciones.asignacion,asignaciones.activo,asignaciones.id_proyecto,asignaciones.created_at,asignaciones.updated_at, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Asignaciones.delete = function(id, result){
     dbConn.query("DELETE FROM asignaciones WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Asignaciones;