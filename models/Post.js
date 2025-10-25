const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Community = require('./Community');

const Post = sequelize.define('Post', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  communityId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'posts'
});

// Relaciones
Post.belongsTo(User, { foreignKey: 'userId', as: 'author' });
Post.belongsTo(Community, { foreignKey: 'communityId', as: 'community' });

module.exports = Post;
