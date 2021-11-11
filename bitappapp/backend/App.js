const express = require ('express');
require ('dotenv').config();

//creamos el servidor
const app = express();

//exponer el backend
const cors = require('cors');
app.use(cors());

//capturar el cuerpo de las peticiones
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// configurar la conexion con momgo atlas ojo la forma de las comillas donde se pega el link
const mongoose = require ('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.srroq.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(()=> console.log("Base de datos conectada correctamente"))
.catch((e)=> console.log("Error en la conexión: " + e));

// importemos las rutas
const {product_routes} = require('./routes');
app.use('/api/v1/product', product_routes);

//poner a escuchar al servidor
app.listen(process.env.PORT, ()=>{console.log("Estoy a tu servicio en el puerto"+process.env.PORT)});
