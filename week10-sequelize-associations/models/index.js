const sequelize = require('../config/sequelize');
const Author = require('./Author');
const Book = require('./Book');
const BookDetail = require('./BookDetail');
const Category = require('./Category');

// 1:M - one author can have many books.
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

// 1:1 - one book has exactly one detail row.
Book.hasOne(BookDetail, { foreignKey: 'bookId' });
BookDetail.belongsTo(Book, { foreignKey: 'bookId' });

// M:N - a book can belong to many categories, a category can have many books.
Book.belongsToMany(Category, { through: 'BookCategory' });
Category.belongsToMany(Book, { through: 'BookCategory' });

module.exports = { sequelize, Author, Book, BookDetail, Category };
