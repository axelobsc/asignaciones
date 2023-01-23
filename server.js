const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const asignacionesRoutes = require('./src/routes/asignaciones.routes')
const empleadosRoutes = require('./src/routes/empleados.routes')
const proyectoRoutes = require('./src/routes/proyecto.routes')

// using as middleware
app.use('/api/v1/asignaciones', asignacionesRoutes)
app.use('/api/v1/empleados', empleadosRoutes)
app.use('/api/v1/proyectos', proyectoRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});