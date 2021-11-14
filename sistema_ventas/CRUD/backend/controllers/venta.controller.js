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
deleteVenta = async (req, res) => {
    const venta_delete = await venta_model.findByIdAndDelete({ _id: req.params.id })

    try {
        if (venta_delete) return res.json({ mensaje: "La venta registrada con el Id: " + venta_delete.IdVenta + " ha sido eliminada correctamente" });
        else return res.status(500).json({ error: true, mensaje: "Falla al eliminar" });
    } catch (error) {
        return res.status(500).json({error: true, mensaje: error})
    }
}

updateVenta = async (req, res) =>{
    try {
        const venta_update = await venta_model.findByIdAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false })
        if (venta_update) return res.json({ mensaje: "Venta actualizada correctamente" });
        else return res.status(400).json({ error: true, mensaje: "Falla al actualizar la venta" });
    } catch (error) {
        if (error) return res.status(500).json({ error: true, mesaje: error });
    }
}

module.exports = Object.freeze({
    getAllVentas,
    addVenta,
    deleteVenta,
    updateVenta
})
