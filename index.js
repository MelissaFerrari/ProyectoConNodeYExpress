const express = require('express');
const app = express();
require('dotenv').config();

// Puerto
const PORT = 3000;

// Importar conexión a la base de datos
const sequelize = require('./config/database');

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const userRoutes = require('./src/routes/userRoutes');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express conectado a MySQL con Sequelize 🚀');
});

// Montar rutas
app.use('/api/users', userRoutes);

// Iniciar servidor
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con la base de datos MySQL');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
