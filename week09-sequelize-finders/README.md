# Week 9 - Finders, validation and constraints, raw queries

Edit `config/db.config.js` with your own MySQL details first.

```
cd week09-sequelize-finders
npm install
node finders.js
node validation.js
node raw-query.js
```

- `finders.js` - `findAll`, `findOne`, `findByPk`, and a `where` clause.
- `validation.js` - a required field and a numeric range constraint,
  and the validation error Sequelize throws when they fail.
- `raw-query.js` - a plain SQL query with `sequelize.query()`.
