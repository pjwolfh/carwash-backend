const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  obtenerRegalos,
  canjearRegalo,
  validarCanje,
  obtenerCanjesPorUsuario,
  marcarCanjeComoEntregado,
  entregarCanje,
  crearRegalo,
  actualizarRegalo
} = require('../controllers/regalosController');

// ✅ Configuración de Multer
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// ✅ Rutas para REGALOS
router.get('/', obtenerRegalos);
router.post('/', upload.single('imagen'), crearRegalo);
router.put('/:id', upload.single('imagen'), actualizarRegalo);

// ✅ Rutas para CANJES
router.post('/canjear', canjearRegalo);
router.post('/validar', validarCanje);
router.get('/historial/:user_id', obtenerCanjesPorUsuario);
router.post('/marcar-entregado', marcarCanjeComoEntregado);
router.post('/entregar', entregarCanje);

module.exports = router;
