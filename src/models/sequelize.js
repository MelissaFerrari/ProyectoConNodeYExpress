const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('discord_sencillo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // 👈 ESTE CAMPO ES OBLIGATORIO
  logging: false,
});

module.exports = sequelize;
