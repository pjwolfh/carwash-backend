// 🧠 Importaciones necesarias
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// 🔌 Conexión
require('./db/connection');

// 🧭 IMPORTS
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');
const clientesRoutes = require('./routes/clientes');
const controlHorariosRoutes = require('./routes/control_horarios');
const sucursalesRoutes = require('./routes/sucursales');
const empleadosRoutes = require('./routes/empleados');
const asistenciaRoutes = require('./routes/asistencia');
const serviciosRoutes = require('./routes/servicios');
const regalosRoutes = require('./routes/regalos');
const canjesRoutes = require('./routes/canjes');
const ventasRoutes = require('./routes/ventas');
const dellersRoutes = require('./routes/dellers');

// ✅ DEBUG TRY/CATCH en cada use()
function safeUse(path, router) {
  try {
    app.use(path, router);
    console.log(`✅ Montada: ${path}`);
  } catch (err) {
    console.error(`❌ ERROR en ruta ${path}:`, err.message);
    throw err;
  }
}

// ✅ Registrar rutas con debug
safeUse('/api/auth', authRoutes);
safeUse('/api/usuarios', usuariosRoutes);
safeUse('/api/clientes', clientesRoutes);
safeUse('/api/control-horarios', controlHorariosRoutes);
safeUse('/api/sucursales', sucursalesRoutes);
safeUse('/api/empleados', empleadosRoutes);
safeUse('/api/asistencias', asistenciaRoutes);
safeUse('/api/servicios', serviciosRoutes);
safeUse('/api/regalos', regalosRoutes);
safeUse('/api/canjes', canjesRoutes);
safeUse('/api/ventas', ventasRoutes);
safeUse('/api/dellers', dellersRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ API CarWash funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
