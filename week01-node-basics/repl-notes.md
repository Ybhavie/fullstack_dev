# Node.js REPL notes

The REPL (Read Eval Print Loop) is the interactive shell that runs when you
type `node` with no file name.

```
node
> 2 + 2
4
> const name = "Vaibhavi"
undefined
> name
'Vaibhavi'
> .exit
```

Useful REPL commands:

- `.help` - list all REPL commands
- `.exit` or Ctrl+D - leave the REPL
- `_` - holds the result of the last expression
- Up/Down arrow - cycle through command history

The REPL is good for trying out a small snippet of JavaScript quickly.
For anything longer than a few lines, write a `.js` file and run it with
`node app.js` instead.
