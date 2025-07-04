const express = require('express');
const router = express.Router();
const controlHorarios = require('../controllers/controlHorariosController');

// ✅ Rutas para control de horarios
router.post('/entrada', controlHorarios.marcarEntrada);

// Lunch
router.put('/inicio-lunch', controlHorarios.marcarInicioLunch);
router.put('/regreso-lunch', controlHorarios.marcarRegresoLunch);

// Salida
router.put('/salida', controlHorarios.marcarSalida);

// Consulta del control de horario del día por empleado
router.get('/empleado/:id_empleado', controlHorarios.obtenerControlHoy);

module.exports = router;
