// Install, connect, test the connection, close the connection.
const { Sequelize } = require('sequelize');
const dbConfig = require('./config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: 'mysql',
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    } finally {
        await sequelize.close();
        console.log('Connection closed.');
    }
}

main();
