const router = require('express').Router();
const { venta_controller } = require('../controllers');
const { venta_middleware } = require('../middlewares');

router.get('/list', venta_controller.getAllVentas);
router.post('/add', venta_middleware.verifyTypes, venta_middleware.verifyIdVenta, venta_controller.addVenta);
router.put('/update', venta_middleware.verifyTypes, venta_controller.updateVenta);
router.delete('/delete/:id', venta_controller.deleteVenta);


module.exports = router;