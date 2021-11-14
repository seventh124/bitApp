const mongoose = require('mongoose');

const ventas_schema = new mongoose.Schema({
    IdVenta: {
        type: Number,
        default: true,
        min: 1

    },
    IdCliente: {
        type: Number,
        default: true,
        min: 1
        
    },
    NombreCliente: {
        type: String,
        default: true,
        min: 1
    },
    ApellidoCliente: {
        type: String,
        default: true,
        min: 1
    },
    NumeroCliente: {
        type: Number,
        requiered: true,
        min: 1
    },
    DireccionCliente: {
        type: String,
        requiered: true,
        min: 1
    },
    barcode: {
        type: Number,
        default: true,
        min: 1

    },
    description: {
        type: String,
        default: true,
        min: 1
        
    },
    Cantidad: {
        type: Number,
        default: true,
        min: 1
    },
    unit_cost: {
        type: Number,
        default: true,
        min: 1
    },
    ValorTotal: {
        type: Number,
        default: true,
        min: 1
    }
});

module.exports = mongoose.model('ventas', ventas_schema)