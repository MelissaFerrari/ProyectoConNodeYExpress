// models/Comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Comentario = sequelize.define(
  "Comentario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_comentario: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "comentarios",
    timestamps: false,
  }
);


module.exports = Comentario;

