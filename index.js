const express = require('express');
const app = express();
require('dotenv').config(); // importante si usás variables de entorno

// Puerto
const PORT = 3000;

// Importar conexión a la base de datos
const sequelize = require('./config/database');

// Middleware para parsear JSON
app.use(express.json());

// 🔹 Importar rutas de autenticación
const authRoutes = require('./src/routes/authRoutes');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express conectado a MySQL con Sequelize 🚀');
});

// Rutas
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const communityRoutes = require('./src/routes/communityRoutes');
const postRoutes = require('./src/routes/postRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

// Montar rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/communities', communityRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

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

