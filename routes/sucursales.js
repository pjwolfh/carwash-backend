const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

// ✅ Obtener todas las sucursales
router.get('/', sucursalesController.obtenerTodasSucursales);

// ✅ Obtener resumen de una sucursal específica
router.get('/resumen/:id', sucursalesController.obtenerResumenSucursal);

// ✅ Obtener sucursal por ID (ruta específica)
router.get('/id/:id', sucursalesController.obtenerSucursalPorId);

// ✅ Obtener sucursales por cliente (evitar ambigüedad)
router.get('/cliente/:idCliente', sucursalesController.obtenerSucursalesPorCliente);

// ✅ Crear nueva sucursal
router.post('/', sucursalesController.crearSucursal);

// ✅ Editar sucursal (ruta clara)
router.put('/id/:id', sucursalesController.editarSucursal);

// ✅ Eliminar sucursal (ruta clara)
router.delete('/id/:id', sucursalesController.eliminarSucursal);

module.exports = router;
