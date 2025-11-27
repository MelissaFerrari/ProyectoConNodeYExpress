// src/models/Community.js
const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize"); // ✅ misma carpeta
const Usuario = require("./User");       // ✅ misma carpeta

const Comunidad = sequelize.define(
  "Comunidad",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
    creador_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "comunidades",
    timestamps: false,
  }
);

// Asociación: cada comunidad pertenece a un usuario creador
Comunidad.belongsTo(Usuario, { foreignKey: "creador_id", as: "creador" });

module.exports = Comunidad;
