const express = require('express');
const app = express();
require('dotenv').config(); // importante si usás variables de entorno

// Puerto
const PORT = 3000;

// Importar conexión a la base de datos
const sequelize = require('./config/database');

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express conectado a MySQL con Sequelize 🚀');
});

// Iniciar el servidor y probar conexión a la base de datos
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate(); // 🔹 intenta conectar con la BD
    console.log('✅ Conexión exitosa con la base de datos MySQL');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
