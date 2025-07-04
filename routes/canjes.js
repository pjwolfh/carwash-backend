const express = require('express');
const router = express.Router();

const {
  registrarCanje,
  obtenerCanjesPorUsuario,
  validarCanje,
  entregarCanje
} = require('../controllers/canjesController');

// ✅ Registrar canje
router.post('/', registrarCanje);

// ✅ Obtener canjes por usuario
router.get('/:user_id', obtenerCanjesPorUsuario);

// ✅ Validar canje
router.post('/validar', validarCanje);

// ✅ Entregar canje
router.post('/entregar', entregarCanje);

module.exports = router;
