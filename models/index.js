const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('N2_seguranca', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;