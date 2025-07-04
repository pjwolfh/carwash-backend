const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');
const db = require('../db/connection');

// ✅ Crear nuevo empleado
router.post('/', empleadosController.crearEmpleado);

// ✅ Buscar empleado por user_id (usado por QR)
router.post('/buscar', (req, res) => {
  const { user_id } = req.body;
  if (!user_id) return res.status(400).json({ error: 'Falta user_id' });

  db.query('SELECT id, nombre_contacto FROM usuarios WHERE user_id = ?', [user_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    if (rows.length === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
    return res.json(rows[0]);
  });
});

// ✅ Obtener empleado por ID (ruta antigua)
router.get('/buscar/:idEmpleado', empleadosController.obtenerEmpleadoPorId);

// ✅ NUEVA RUTA PARA PANEL EMPLEADO
router.get('/info/:user_id', empleadosController.obtenerEmpleadoPorUserId);

// ✅ NUEVAS rutas para editar empleado desde Angular
router.get('/sucursal/:idSucursal/empleados/editar/:idEmpleado', empleadosController.obtenerEmpleadoPorId);
router.put('/sucursal/:idSucursal/empleados/editar/:idEmpleado', empleadosController.actualizarEmpleado);

// ✅ Actualizar empleado SIMPLE
router.put('/:idEmpleado', empleadosController.actualizarEmpleado);

// ✅ Eliminar empleado
router.delete('/:idEmpleado', empleadosController.eliminarEmpleado);

// ✅ LISTAR EMPLEADOS POR SUCURSAL (con prefijo claro)
router.get('/sucursal/:idSucursal', empleadosController.obtenerEmpleadosPorSucursal);

module.exports = router;
