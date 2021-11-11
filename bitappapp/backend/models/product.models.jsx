const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    barcode:{
        type: String,
        requiered: true,
        min: 1
    },

    description:{
        type: String,
        requiered: true,
        min: 1
        
    },

    unit_cost:{
        type: Number,
        requiered: true,
    },

    state:{
        type: Boolean,
        default: true,
    }

});

module.exports = mongoose.model('product', product_schema);