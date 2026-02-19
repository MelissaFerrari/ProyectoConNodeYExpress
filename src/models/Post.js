const { DataTypes } = require('sequelize');
const sequelize = require ("./sequelize");


const Publicacion = sequelize.define('Publicacion', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  contenido: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  usuario_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  comunidad_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  fecha_publicacion: { 
    type: DataTypes.DATE, 
    allowNull: false,
    defaultValue: DataTypes.NOW 
  }
}, {
  tableName: 'publicaciones',
  timestamps: false // porque ya tenés tu propio campo de fecha
});


module.exports = Publicacion;
