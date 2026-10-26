# Week 8 - Sequelize models, migrations, model querying basics

## Notes

A **model** is a JavaScript representation of a database table - one
model maps to one table, one model instance maps to one row.

```js
const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING },
    publishedYear: { type: DataTypes.INTEGER },
});
```

- `sequelize.define('Book', {...})` creates the model. Sequelize
  pluralizes the name for the actual table (`Book` -> `Books`).
- Each key becomes a column; `DataTypes` maps to SQL column types
  (`STRING` -> `VARCHAR`, `INTEGER` -> `INT`, etc.).

A **migration** is a script that changes the database schema (create
a table, add a column...) so the schema can evolve over time instead
of being recreated from scratch. The simplest version is:

```js
await sequelize.sync();   // creates any tables that don't exist yet
```

`sync()` does **not** alter a table that already exists - if the
model changes, you need a proper migration (or `sync({ alter: true })`
in development) to update the real table.

**Basic querying:**

```js
const book = await Book.create({ title: '...', author: '...' });  // INSERT
const all = await Book.findAll();                                  // SELECT *
const one = await Book.findByPk(book.id);                          // SELECT by primary key
```

## Files

- `config/db.config.js`, `config/sequelize.js` - connection setup.
- `models/Book.js` - the Book model.
- `migrate.js` - creates the `Books` table.
- `query-basics.js` - create, findAll, findByPk.

## How to run

```sql
CREATE DATABASE library_db;
```

```
cd week08-sequelize-models
npm install
npm run migrate
npm start
```
