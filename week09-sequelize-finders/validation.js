// Validation and constraints fail before a bad row reaches the database.
const sequelize = require('./config/sequelize');
const Book = require('./models/Book');

async function run() {
    try {
        await sequelize.sync();

        // This passes validation.
        const goodBook = await Book.create({
            title: 'Domain-Driven Design',
            author: 'Eric Evans',
            publishedYear: 2003,
        });
        console.log('Created:', goodBook.title);

        // This fails validation: title is empty and publishedYear is out of range.
        await Book.create({
            title: '',
            author: 'Unknown',
            publishedYear: 3000,
        });
    } catch (error) {
        console.log('Validation error caught as expected:');
        console.log(error.errors.map((e) => e.message));
    } finally {
        await sequelize.close();
    }
}

run();
