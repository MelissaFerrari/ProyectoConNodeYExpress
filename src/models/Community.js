// models/Community.js
const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Comunidad = sequelize.define(
  "Comunidad",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    creador_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "comunidades",
    timestamps: false,
  }
);

// Relaciones opcionales
Comunidad.belongsTo(Usuario, { foreignKey: "creador_id", as: "creador" });

module.exports = Comunidad;
