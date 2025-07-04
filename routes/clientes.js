const express = require('express');
const router = express.Router();

const {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  editarCliente,
  eliminarCliente,
  obtenerServiciosPorCliente,
  obtenerVentasDelDiaPorCliente,
  getUsuarioPorCliente,
  resetearPasswordCliente
} = require('../controllers/clientesController');

// 🧩 Endpoints principales
router.get('/', obtenerClientes);
router.post('/crear', crearCliente);

// 🔁 Servicios y ventas relacionados al cliente
router.get('/:clienteId/servicios', obtenerServiciosPorCliente);
router.get('/:clienteId/ventas-hoy', obtenerVentasDelDiaPorCliente);
router.get('/:clienteId/usuario', getUsuarioPorCliente);

// 🔁 Reset de contraseña
router.put('/:id/reset-password', resetearPasswordCliente);

// ✅ Obtener, editar y eliminar cliente por ID (al final)
router.get('/id/:id', obtenerClientePorId);
router.put('/:id', editarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;
