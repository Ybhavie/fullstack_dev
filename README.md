# Full Stack Development Lab (CSA 301)

One folder per week. Each week folder has its own README with the
exact commands to run it.

| Week | Topic | Folder |
|------|-------|--------|
| 1  | Node.js basics, npm, Express | [week01-node-basics](week01-node-basics) |
| 2  | Node modules (CommonJS and ES modules) | [week02-modules](week02-modules) |
| 3  | Event loop, callbacks, EventEmitter | [week03-event-loop-events](week03-event-loop-events) |
| 4  | Promises, promise chaining, CLI args, files | [week04-promises](week04-promises) |
| 5  | Streams, standard streams, routes, headers, gateway | [week05-streams-server](week05-streams-server) |
| 6  | Cron jobs, blocking vs. non-blocking, webpack | [week06-cron-webpack](week06-cron-webpack) |
| 7  | Sequelize: install, connect, test, close | [week07-sequelize-connect](week07-sequelize-connect) |
| 8  | Sequelize models, migrations, basic queries | [week08-sequelize-models](week08-sequelize-models) |
| 9  | Finders, validation, raw queries | [week09-sequelize-finders](week09-sequelize-finders) |
| 10 | Associations: 1:1, 1:M, M:N | [week10-sequelize-associations](week10-sequelize-associations) |
| 11 | React components, props, state | [week11-react-basics](week11-react-basics) |
| 12 | React hooks | [week12-react-hooks](week12-react-hooks) |
| 13 | React Router, navigation | [week13-react-router](week13-react-router) |
| 14 | Redux, dispatch | [week14-redux](week14-redux) |
| 15 | Node.js + React integration | [week15-integration](week15-integration) |

## Running any Node exercise

Most exercise folders are independent and have their own
`package.json`:

```
cd week0X-topic/exercise-name
npm install
node app.js
```

(or `npm start`, where the folder defines a `start` script).

## Running any React exercise

```
cd weekXX-topic/app-name
npm install
npm run dev
```

## Weeks 7-10 (Sequelize / MySQL)

These need a running MySQL server. Create the databases once:

```sql
CREATE DATABASE library_db;
CREATE DATABASE library_associations_db;
```

Weeks 7-9 share `library_db` (the same Book table evolving across
those weeks). Week 10 uses its own `library_associations_db` because
it defines a different schema (Author/Book/BookDetail/Category) -
keeping it separate avoids colliding with the simpler Book table from
weeks 8-9.

Then edit `config/db.config.js` in each week's folder with your own
MySQL host, user and password before running the scripts.
