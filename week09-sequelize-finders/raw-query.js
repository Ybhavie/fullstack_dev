// Raw SQL queries, for when the query builder is not enough.
const { QueryTypes } = require('sequelize');
const sequelize = require('./config/sequelize');
const Book = require('./models/Book');

async function run() {
    try {
        await sequelize.sync();
        await Book.create({ title: 'Raw Query Example', author: 'Someone', publishedYear: 2020 });

        const results = await sequelize.query(
            'SELECT title, author FROM Books WHERE publishedYear >= :year',
            {
                replacements: { year: 2000 },
                type: QueryTypes.SELECT,
            }
        );

        console.log('Raw query results:', results);
    } catch (error) {
        console.error('Raw query failed:', error.message);
    } finally {
        await sequelize.close();
    }
}

run();
