# Week 8 - Sequelize models, migrations, model querying basics

Edit `config/db.config.js` with your own MySQL details first.

```
cd week08-sequelize-models
npm install
npm run migrate
npm start
```

`migrate.js` creates the `Books` table from the `Book` model.
`query-basics.js` creates a book row, then reads it back with
`findAll()` and `findByPk()`.
