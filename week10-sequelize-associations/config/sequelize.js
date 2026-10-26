const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
