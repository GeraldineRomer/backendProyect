const express = require('express');
const bodyParser = require('body-parser');
//const cors = require("cors");
const { API_VERSION } = require("./constants");

var app = express();
// Importamos las rutas
//const authRoutes = require('./src/Routes/auth'); 
const userRoutes = require("./src/Routes/user");

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//evitar bloqueos con el navegador cuando se trabaje frontend y backend al tiempo
//app.use(cors());
console.log(`api/${API_VERSION}`);
// Cargamos las rutas
app.use(`/api/${API_VERSION}`, userRoutes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
