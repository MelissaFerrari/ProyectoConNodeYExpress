const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Community = sequelize.define('Community', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  ownerId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'communities'
});

// Relación: Un usuario puede crear muchas comunidades
Community.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });

module.exports = Community;
