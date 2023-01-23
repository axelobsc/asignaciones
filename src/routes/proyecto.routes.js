const express = require('express')
const router = express.Router()
const proyectoController = require('../controllers/proyecto.controller');

// Retrieve all employees
router.get('/', proyectoController.findAll);

// Create a new employee
router.post('/', proyectoController.create);

// Retrieve a single employee with id
router.get('/:id', proyectoController.findById);

// Update a employee with id
// router.put('/:id', proyectoController.update);

// Delete a employee with id
// router.delete('/:id', proyectoController.delete);

module.exports = router