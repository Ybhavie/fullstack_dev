const { sequelize, Author, Book, BookDetail, Category } = require('./models');

async function run() {
    try {
        await sequelize.sync();

        // 1:M - Author -> Books
        const author = await Author.create({ name: 'Robert Martin' });
        const book = await Book.create({ title: 'Clean Architecture', authorId: author.id });

        // 1:1 - Book -> BookDetail
        await BookDetail.create({ pageCount: 432, language: 'English', bookId: book.id });

        // M:N - Book <-> Category
        const fiction = await Category.create({ name: 'Software Engineering' });
        const design = await Category.create({ name: 'Design' });
        await book.addCategory(fiction);
        await book.addCategory(design);

        const fullBook = await Book.findOne({
            where: { id: book.id },
            include: [Author, BookDetail, Category],
        });

        console.log('Author:', fullBook.Author.name);
        console.log('Book:', fullBook.title);
        console.log('Page count:', fullBook.BookDetail.pageCount);
        console.log('Categories:', fullBook.Categories.map((c) => c.name));
    } catch (error) {
        console.error('Association query failed:', error.message);
    } finally {
        await sequelize.close();
    }
}

run();
