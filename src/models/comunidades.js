const { DataTypes } = require ('sequelize');

const sequelize = require ("./sequelize");

const Comunidades = sequelize.define('comunidades',
    {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false  //no permite nulos (este dato es obligatorio)
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  creador_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'comunidades', // nombre exacto de la tabla
  timestamps: false          // desactiva createdAt/updatedAt automáticos
});


module.exports = Comunidades;