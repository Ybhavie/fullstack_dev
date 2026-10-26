# Week 7 - Sequelize ORM for MySQL

## Notes

**Sequelize** is an ORM (Object-Relational Mapper) for Node - it lets
you work with a SQL database using JavaScript objects and method
calls instead of writing raw SQL by hand.

**Install:**

```
npm install sequelize mysql2
```

`mysql2` is the actual driver that talks to MySQL; Sequelize sits on
top of it. (Different drivers exist for Postgres, SQLite, etc. -
Sequelize supports several databases through the same API.)

**Connect:**

```js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
```

Creating a `Sequelize` instance does **not** connect immediately - it
just configures the connection pool.

**Test the connection:**

```js
await sequelize.authenticate();   // throws if it can't connect
```

**Close the connection:**

```js
await sequelize.close();
```

Always close it when a script is done, otherwise the process can hang
open waiting on the connection pool.

## Files

- `config/db.config.js` - host/user/password/database, kept in one
  place so it's easy to edit.
- `connect.js` - connects, tests the connection, closes it.

## How to run

The database must already exist first:

```sql
CREATE DATABASE library_db;
```

Edit `config/db.config.js` with your own MySQL user/password, then:

```
cd week07-sequelize-connect
npm install
npm start
```
