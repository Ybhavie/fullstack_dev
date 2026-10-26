# Week 7 - Sequelize ORM for MySQL

Topics: installing Sequelize, connecting to MySQL, testing the
connection, closing the connection.

Edit `config/db.config.js` with your own MySQL host, user, password and
database name before running this. The database itself must already
exist (`CREATE DATABASE library_db;`).

```
cd week07-sequelize-connect
npm install
npm start
```

Expected output: "Connected to MySQL successfully." then
"Connection closed." If MySQL is not installed or running, it prints
the connection error instead.
