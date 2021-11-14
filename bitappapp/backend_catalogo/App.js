const express = require('express');
require('dotenv').config();

//Creamos el servidor
const app = express();

//Expongamos el backend
const cors = require('cors');
app.use(cors());

//Capturar el cuerpo de las peticiones
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Conexión con mongo atlas
const mongoose = require('mongoose');
const uri = `mongodb+srv://ingrid_bernal_velandia:BitApp@cluster0.gvys3.mongodb.net/bit_app_productos?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log("Error en la conexión de base de datos: " + e));

//Importemos las rutas
const {product_routes} = require('./routes');
app.use('/api/v1/product', product_routes);

//Pongamos al servidor a escuchar
app.listen(process.env.PORT, () =>{console.log("Estoy a tu servicio en el puerto "+process.env.PORT)});