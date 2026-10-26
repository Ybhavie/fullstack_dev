# Week 9 - Finders, validation and constraints, raw queries

## Notes

**Finder methods** are how you read rows back out of a model:

| Method | Does |
|---|---|
| `Model.findAll()` | all rows (SELECT *) |
| `Model.findAll({ where: {...} })` | rows matching a condition |
| `Model.findOne({ where: {...} })` | the first matching row |
| `Model.findByPk(id)` | one row by its primary key |

`Op` (from `sequelize`) builds conditions beyond plain equality:

```js
const { Op } = require('sequelize');
Book.findAll({ where: { publishedYear: { [Op.gte]: 2005 } } });
// WHERE publishedYear >= 2005
```

**Validation** runs in JavaScript, before anything reaches the
database - it rejects bad data early with a clear error:

```js
title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: { msg: 'Title cannot be empty' } },
},
```

**Constraints** are enforced by the database itself (e.g. `unique: true`
on a column creates a unique index) - these still apply even if
something bypasses Sequelize's validation.

If `Model.create()` fails validation, it throws a
`SequelizeValidationError` with an `.errors` array describing what
went wrong.

**Raw queries** - sometimes it's simpler to just write SQL directly:

```js
const { QueryTypes } = require('sequelize');
const rows = await sequelize.query(
    'SELECT title FROM Books WHERE publishedYear >= :year',
    { replacements: { year: 2000 }, type: QueryTypes.SELECT }
);
```

`replacements` safely substitutes values into the query (avoids SQL
injection) instead of string-concatenating them in.

## Files

- `models/Book.js` - with validation (`notEmpty`) and a constraint
  (`unique` on isbn).
- `finders.js` - findAll, findOne, findByPk, a where clause.
- `validation.js` - a passing create and a failing one, and the error
  it throws.
- `raw-query.js` - a plain SQL query with `sequelize.query()`.

## How to run

```
cd week09-sequelize-finders
npm install
node finders.js
node validation.js
node raw-query.js
```
