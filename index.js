const express = require('express');
const app = express();
const cors = require('cors'); 
require('dotenv').config();

require("./src/models/asociaciones");

// Puerto
const PORT = process.env.PORT || 3000;

// Importar conexión a la base de datos
const sequelize = require('./config/database');

// 🔥 Middleware para parsear JSON (TIENE QUE IR ARRIBA)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const userRoutes = require('./src/routes/userRoutes');
const postRoutes = require('./src/routes/postRoutes');
const commentRoutes = require('./src/routes/commentRoutes');
const communityRoutes = require('./src/routes/communityRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express conectado a MySQL con Sequelize 🚀');
});

// Montar rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/communities', communityRoutes);
app.use('/api/auth', authRoutes);

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
