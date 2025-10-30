const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('discord_sencillo', 'root', 'mkdir', {
  host: 'localhost',
  dialect: 'mysql', // 👈 ESTE CAMPO ES OBLIGATORIO
  logging: false,
});

module.exports = sequelize;
