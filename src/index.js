const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8090;

//importacion de rutas
const Router = require('./routes');


app.use(bodyParser.json());
app.use(cors());


// Configuración de enrutamiento  
app.use('/api', Router);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
