'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Proyecto = function(proyecto){
    this.nombre         = proyecto.nombre;
    this.activo         = proyecto.activo;
    this.id_proyecto    = proyecto.id_proyecto;
};

Proyecto.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO proyectos set ?", newEmp, function (err, res) {
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

Proyecto.findById = function (id, result) {
    dbConn.query("Select * from proyectos where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Proyecto.findAll = function (result) {
    dbConn.query("Select * from proyectos", function (err, res) {
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

/*
Proyecto.update = function(id, proyecto, result){
  dbConn.query("UPDATE proyectos SET nombre=?,activo=?,id_proyecto? WHERE id = ?", [proyecto.id_proyecto,proyecto.nombre, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Proyecto.delete = function(id, result){
     dbConn.query("DELETE FROM proyectos WHERE id = ?", [id], function (err, res) {
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

module.exports = Proyecto;