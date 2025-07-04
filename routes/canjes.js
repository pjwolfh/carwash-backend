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

// ✅ Validar canje
router.post('/validar', validarCanje);

// ✅ Entregar canje
router.post('/entregar', entregarCanje);

// ✅ Obtener canjes por usuario (al final)
router.get('/:user_id', obtenerCanjesPorUsuario);


module.exports = router;
