const { Sequelize } = require('sequelize');

// Datos de conexión
const sequelize = new Sequelize('discord_sencillo', 'root', 'mkdir', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // desactiva logs de SQL en consola (opcional)
});

// Probar la conexión
async function conectarDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con la base de datos MySQL');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
}

conectarDB();

module.exports = sequelize;
