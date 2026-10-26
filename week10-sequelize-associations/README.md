# Week 10 - Associations: 1:1, 1:M, M:N

A small library example:

- `Author` 1:M `Book` - one author can have many books.
- `Book` 1:1 `BookDetail` - extra details kept in a separate table.
- `Book` M:N `Category` - a book can have several categories, and a
  category can have many books.

This week uses its own database, `library_associations_db` (separate
from the `library_db` used in weeks 7-9), since its Book model has a
different shape. Create it first:

```sql
CREATE DATABASE library_associations_db;
```

Edit `config/db.config.js` with your own MySQL details first.

```
cd week10-sequelize-associations
npm install
npm start
```
