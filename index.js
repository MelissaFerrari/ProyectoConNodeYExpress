const express = require('express');
const app = express();

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
