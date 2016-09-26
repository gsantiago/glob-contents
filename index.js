var glob = require('glob-promise')
var fs = require('fs-promise')
var join = require('path').join

module.exports = function globContents () {
  var cwd = ''

  if (arguments[1] && arguments[1].cwd) {
    cwd = arguments[1].cwd
  }

  return glob.apply(glob, arguments)
    .then(function (files, options) {
      var obj = {}

      var promises = files.map(function (file) {
        return fs.readFile(join(cwd, file), 'utf8')
      })

      return Promise.all(promises).then(function (contents) {
        contents.forEach(function (content, index) {
          obj[files[index]] = content
        })

        return obj
      })
    })
}
