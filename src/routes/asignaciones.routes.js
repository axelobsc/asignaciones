const express = require('express')
const router = express.Router()
const asignacionesController = require('../controllers/asignaciones.controller');

// Retrieve all employees
router.get('/', asignacionesController.findAll);

// Create a new employee
router.post('/', asignacionesController.create);

// Retrieve a single employee with id
router.get('/:id', asignacionesController.findById);

// Update a employee with id
router.put('/:id', asignacionesController.update);

// Delete a employee with id
router.delete('/:id', asignacionesController.delete);

module.exports = router