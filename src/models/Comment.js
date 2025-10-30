const { DataTypes } = require('sequelize');
const sequelize = require ("./sequelize");



const Comentario = sequelize.define('Comentario', {
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
  publicacion_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_comentario: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'comentarios', // nombre exacto de la tabla
  timestamps: false          // desactiva createdAt / updatedAt
});

// Relaciones (cuando tengas los modelos de Usuario y Publicacion)
/// Comentario.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
/// Comentario.belongsTo(Publicacion, { foreignKey: 'publicacion_id', as: 'publicacion' });

module.exports = Comentario;
