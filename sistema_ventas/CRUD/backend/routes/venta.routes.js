const router = require('express').Router();
const {venta_controller} = require('../controllers');

router.get('/list', venta_controller.getAllVentas);
router.post('/add', venta_controller.addVenta);

module.exports = router;