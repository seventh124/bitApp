const { venta_model } = require('../models');


getAllVentas = (req, res) => {
    venta_model.find().exec((error, ventas) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ ventas });
    })
}
addVenta = (req, res) => {
    const venta_new = new venta_model(req.body);
    venta_new.save((error, venta) => {
        if(error) return res.status(500).json({ error: true, mensaje: error })
        res.json({mensaje: 'Venta agregada con exito'})
    })
}


module.exports = Object.freeze({
    getAllVentas,
    addVenta
})
