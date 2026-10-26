// Finder methods: findAll, findOne, findByPk, with a where clause.
const { Op } = require('sequelize');
const sequelize = require('./config/sequelize');
const Book = require('./models/Book');

async function run() {
    try {
        await sequelize.sync();

        await Book.bulkCreate([
            { title: 'Clean Code', author: 'Robert Martin', publishedYear: 2008 },
            { title: 'Refactoring', author: 'Martin Fowler', publishedYear: 1999 },
            { title: 'The Clean Coder', author: 'Robert Martin', publishedYear: 2011 },
        ]);

        const allBooks = await Book.findAll();
        console.log('findAll:', allBooks.map((b) => b.title));

        const oneBook = await Book.findOne({ where: { author: 'Robert Martin' } });
        console.log('findOne:', oneBook.title);

        const byId = await Book.findByPk(allBooks[0].id);
        console.log('findByPk:', byId.title);

        const recentBooks = await Book.findAll({
            where: { publishedYear: { [Op.gte]: 2005 } },
        });
        console.log('Books from 2005 onward:', recentBooks.map((b) => b.title));
    } catch (error) {
        console.error('Finder query failed:', error.message);
    } finally {
        await sequelize.close();
    }
}

run();
