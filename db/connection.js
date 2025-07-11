const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);

// Crear conexión a MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306, // Convertir puerto a número
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Probar conexión
connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión a la base de datos:', err);
  } else {
    console.log('✅ Conexión exitosa a MySQL');
  }
});

module.exports = connection;
