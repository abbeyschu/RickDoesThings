const Sequelize = require('sequelize');
require('dotenv').config();
// require('dotenv').config({ path: '../../.env' });

let sequelize;


sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  }
);

  module.exports = sequelize;