// Basic model querying: create, findAll, findByPk.
const sequelize = require('./config/sequelize');
const Book = require('./models/Book');

async function run() {
    try {
        await sequelize.sync();

        const book = await Book.create({
            title: 'The Pragmatic Programmer',
            author: 'David Thomas',
            isbn: '978-0135957059',
            publishedYear: 2019,
        });
        console.log('Created book with id:', book.id);

        const allBooks = await Book.findAll();
        console.log('All books:', allBooks.map((b) => b.title));

        const foundBook = await Book.findByPk(book.id);
        console.log('Found by id:', foundBook.title);
    } catch (error) {
        console.error('Query failed:', error.message);
    } finally {
        await sequelize.close();
    }
}

run();
