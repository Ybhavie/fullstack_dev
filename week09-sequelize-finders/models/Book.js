const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Validation and constraints: allowNull, isEmail-style validators, min/max.
const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Title cannot be empty' },
        },
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isbn: {
        type: DataTypes.STRING,
        unique: true,
    },
    publishedYear: {
        type: DataTypes.INTEGER,
        validate: {
            min: { args: [1500], msg: 'publishedYear looks too old' },
            max: { args: [2100], msg: 'publishedYear looks too far in the future' },
        },
    },
});

module.exports = Book;
