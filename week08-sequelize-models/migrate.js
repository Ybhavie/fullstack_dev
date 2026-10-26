// A migration creates or changes database tables to match the models.
// This script runs the migration for the Book model with sequelize.sync().
const sequelize = require('./config/sequelize');
const Book = require('./models/Book');

async function migrate() {
    try {
        // sync() creates the table if it does not exist yet.
        // Use { force: true } only in development: it drops the table first.
        await sequelize.sync();
        console.log('Migration complete: the "Books" table is ready.');
    } catch (error) {
        console.error('Migration failed:', error.message);
    } finally {
        await sequelize.close();
    }
}

migrate();
