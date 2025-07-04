const express = require('express');
const router = express.Router();

const { 
  loginUsuario, 
  crearUsuario, 
  obtenerUsuario,
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario,
  resetearPasswordCliente,
  obtenerVentasDelDiaPorCliente,
  obtenerServiciosPorCliente,
  getCredencialesUsuario,
  obtenerUsuarioPorCodigo,
  obtenerSucursalesPorUsuario
} = require('../controllers/usuariosController');

// 🔐 Login del usuario
router.post('/login', loginUsuario);

// 🆕 Crear nuevo usuario (solo esta ruta POST)
router.post('/', crearUsuario);

// 🔍 Obtener todos los usuarios
router.get('/', obtenerUsuarios);

// 🔍 Obtener usuario por código alfanumérico
router.get('/codigo/:user_id', obtenerUsuarioPorCodigo);

// 🔁 Resetear contraseña
router.put('/reset-password/:id', resetearPasswordCliente);

// 📊 Ventas del día
router.get('/:id/ventas-hoy', obtenerVentasDelDiaPorCliente);

// 🛠️ Servicios del cliente
router.get('/:id/servicios', obtenerServiciosPorCliente);

// 🔐 Credenciales del usuario
router.get('/:id/credenciales', getCredencialesUsuario);

// 🔗 Sucursales asignadas al usuario
router.get('/:id/sucursales', obtenerSucursalesPorUsuario);

// ✅ Obtener usuario por ID numérico
router.get('/id/:id', obtenerUsuario);

// ✅ Editar usuario
router.put('/:id', editarUsuario);

// ❌ Eliminar usuario
router.delete('/:id', eliminarUsuario);

module.exports = router;
