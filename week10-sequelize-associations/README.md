# Week 10 - Associations: 1:1, 1:M, M:N

A small library example:

- `Author` 1:M `Book` - one author can have many books.
- `Book` 1:1 `BookDetail` - extra details kept in a separate table.
- `Book` M:N `Category` - a book can have several categories, and a
  category can have many books.

Edit `config/db.config.js` with your own MySQL details first.

```
cd week10-sequelize-associations
npm install
npm start
```
