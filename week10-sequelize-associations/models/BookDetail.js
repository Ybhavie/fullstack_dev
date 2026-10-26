const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Extra details kept in their own table: a 1:1 example with Book.
const BookDetail = sequelize.define('BookDetail', {
    pageCount: {
        type: DataTypes.INTEGER,
    },
    language: {
        type: DataTypes.STRING,
        defaultValue: 'English',
    },
});

module.exports = BookDetail;
