// Cargamos los módulos de express y body-parser
const express = require('express');
const bodyParser = require('body-parser');
//const cors = require("cors");
const { API_VERSION } = require("./constants");
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var authRoutes = require('./src/Routes/auth'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//evitar bloqueos con el navegador cuando se trabaje frontend y backend al tiempo
//app.use(cors());
console.log(`api/${API_VERSION}`);
// Cargamos las rutas
app.use(`api/${API_VERSION}/auth`, authRoutes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
