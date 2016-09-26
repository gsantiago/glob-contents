# glob-contents

Just like [Glob](https://github.com/isaacs/node-glob), but with files contents.

```js
var glob = require('glob-contents')

glob('path/to/**/*').then(function (contents) {
  console.log(contents)
  // {
  //   'path/to/file1.txt': 'file 1 contents...',
  //   'path/to/file2.txt': 'file 2 contents...'
  // }
})
```

## installation

`npm install glob-contents --save`

## tests

`npm install && npm test`

## usage

It receives exactly the same arguments from [Node Glob](https://github.com/isaacs/node-glob), the difference
is that it returns a Promise.

## license

MIT
