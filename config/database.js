const { Sequelize } = require('sequelize');

// Datos de conexión
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
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
