# Week 10 - Associations: 1:1, 1:M, M:N

## Notes

Associations describe how tables relate to each other, and let
Sequelize fetch related rows together instead of writing manual joins.

**1:1 (one-to-one)** - one row relates to exactly one row elsewhere:

```js
Book.hasOne(BookDetail, { foreignKey: 'bookId' });
BookDetail.belongsTo(Book, { foreignKey: 'bookId' });
```

`hasOne` goes on the "parent" side, `belongsTo` on the side that
actually holds the foreign key column.

**1:M (one-to-many)** - one row relates to many rows elsewhere:

```js
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });
```

One author, many books. `Book` gets an `authorId` column.

**M:N (many-to-many)** - rows on both sides can relate to many rows
on the other side, through a join table:

```js
Book.belongsToMany(Category, { through: 'BookCategory' });
Category.belongsToMany(Book, { through: 'BookCategory' });
```

Sequelize creates (and manages) the `BookCategory` join table for
you, with an `addCategory()`/`addBook()` helper method added to each
model instance.

**Fetching related data** - `include` performs a join and nests the
result:

```js
const book = await Book.findOne({
    where: { id },
    include: [Author, BookDetail, Category],
});
book.Author.name;
book.BookDetail.pageCount;
book.Categories.map((c) => c.name);
```

This week uses its own database, `library_associations_db` (separate
from the `library_db` used in weeks 7-9), since its Book model has a
different shape - keeping it separate avoids colliding with the
simpler Book table from weeks 8-9 (`sync()` doesn't alter a table
that already exists with a different shape).

## Files

- `models/` - `Author`, `Book`, `BookDetail`, `Category`.
- `models/index.js` - where the associations themselves are defined.
- `associations.js` - creates related rows across all three
  relationships, then reads them back with `include`.

## How to run

```sql
CREATE DATABASE library_associations_db;
```

Edit `config/db.config.js` with your own MySQL details first.

```
cd week10-sequelize-associations
npm install
npm start
```
