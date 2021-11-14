const express = require('express');
require('dotenv').config();

//Se crea el servidor
const app = express();

//Se expone el BACKEND
const cors = require('cors');
app.use(cors());

// Se captura el BODY de las peticiones
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configurar conexión con mongo MONGO ATLAS
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gvys3.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

//Esto se coloca por protocolo para que posteriormente no genere ERROR

const option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri, option)
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("Error en la conexión: " + e));
    
//Importación de rutas
const { venta_routes } = require('./routes');

//Uso de las rutas
app.use('/api/v1/venta', venta_routes);


//Se coloca a ESCUCHAR al SERVIDOR
app.listen(process.env.PORT, () => console.log('Servidor a su servicio en el puerto', process.env.PORT));

