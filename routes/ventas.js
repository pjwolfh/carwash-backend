const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

// 📌 Registrar venta (escaneada o manual)
router.post('/registrar', ventasController.registrarVenta);

// 📌 Solicitar venta pendiente desde cliente
router.post('/solicitar', ventasController.solicitarVenta);

// 📌 Confirmar venta por parte del admin
router.post('/confirmar', ventasController.confirmarVenta);

// 📌 Rechazar venta pendiente
router.post('/declinar', ventasController.declinarVenta);

// 📌 Obtener historial (POST con filtros o GET simple)
router.get('/historial', ventasController.obtenerHistorialVentas);
router.post('/historial', ventasController.obtenerHistorialVentas); // ✅ para filtros con body

// ✅ RUTA ÚNICA PARA PENDIENTES
router.get('/pendientes/:id_sucursal', ventasController.obtenerVentasPendientes);

// ✅ Resumen de sucursal
router.get('/resumen/:id_sucursal', ventasController.obtenerResumenSucursal);

module.exports = router;
