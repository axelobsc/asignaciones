const express = require('express')
const router = express.Router()
const empleadosController = require('../controllers/empleados.controller');

// Retrieve all employees
router.get('/', empleadosController.findAll);

// Create a new employee
router.post('/', empleadosController.create);

// Retrieve a single employee with id
router.get('/:id', empleadosController.findById);

// Update a employee with id
// router.put('/:id', empleadosController.update);

// Delete a employee with id
// router.delete('/:id', empleadosController.delete);

module.exports = router