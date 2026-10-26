# Week 2 - Node modules, module dependencies, module functionality

Topics: local modules, module dependencies, the two module systems
(CommonJS and ES modules).

## commonjs-module

Uses `require()` and `module.exports`. Works without `"type": "module"`
in `package.json`.

```
cd week02-modules/commonjs-module
node app.js
```

Open http://localhost:3000/ in a browser.

## esm-module

Uses `import` / `export`. Needs `"type": "module"` in `package.json`
(already set). An interest calculator split across two files to show a
module depending on another module.

```
cd week02-modules/esm-module
npm install
npm start
```

Try these URLs:
- http://localhost:3000/
- http://localhost:3000/simple-interest?init=1000&intRate=10&years=3
- http://localhost:3000/compound-interest?init=1000&intRate=10&years=3

Note: `require()` and `module.exports` belong to CommonJS. `import` and
`export` belong to ES modules. Do not mix the two systems in one file.
