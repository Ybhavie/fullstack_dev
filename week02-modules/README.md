# Week 2 - Node modules, module dependencies, module functionality

## Notes

A **module** is just a file. Node wraps every file in a function, so
variables declared in one file don't leak into another unless you
explicitly export and import them.

There are two module systems in Node. Do not mix them in the same file.

**CommonJS** (the default, no config needed):

```js
// mathModule.js
function add(a, b) { return a + b; }
module.exports = { add };

// app.js
const { add } = require('./mathModule');
```

- `module.exports` - what the file makes available to others.
- `require('./file')` - imports it. The `./` means "same folder";
  without it, Node looks in `node_modules` for an installed package.

**ES Modules** (needs `"type": "module"` in `package.json`):

```js
// math.js
export function add(a, b) { return a + b; }

// app.js
import { add } from './math.js';
```

- `export` - what the file makes available (note: the `.js` extension
  is required in the `import` path, unlike CommonJS).
- A **module dependency** is just one file requiring/importing
  another - `app.js` depends on `mathModule.js`.

## Files

- `commonjs-module/` - `require()`/`module.exports`, a local module
  (`mathModule.js`), and the built-in `http`/`fs` modules.
- `esm-module/` - `import`/`export`, an interest calculator split
  across `math.js` (the module) and `app.js` (uses it via Express).

## How to run

```
cd week02-modules/commonjs-module
node app.js
```

```
cd week02-modules/esm-module
npm install
npm start
```

Try: http://localhost:3000/compound-interest?init=1000&intRate=10&years=3
