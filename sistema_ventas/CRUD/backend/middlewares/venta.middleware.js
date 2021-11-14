const { venta_model } = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const venta_joi = joi.object({
        _id: joi.optional(),
        IdVenta: joi.number().required(),
        IdCliente: joi.number().required(),
        NombreCliente: joi.string().required(),
        ApellidoCliente: joi.string().required(),
        NumeroCliente: joi.number().optional(),
        DireccionCliente: joi.string().optional(),
        barcode: joi.number().required(),
        description: joi.string().required(),
        Cantidad: joi.number().required(),
        unit_cost: joi.number().required(),
        ValorTotal: joi.number().required()
    });

    const { error } = venta_joi.validate(req.body);
    if (error) return res.status(400).json({ error: true, mensaje: error.details[0].message });
    next();
}

verifyIdVenta = (req, res, next) => {
    venta_model.findOne({ IdVenta: req.body.IdVenta }).exec((error, venta) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        if (venta) return res.status(400).json({ error: true, mensaje: "El Id numero: " + venta.IdVenta + " ya se encuentra registrado con otra venta." });
        next();
    })
}

module.exports = Object.freeze({
    verifyTypes,
    verifyIdVenta
});