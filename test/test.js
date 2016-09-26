var assert = require('assert')
var glob = require('..')

describe('glob-contents', function () {
  it('should get the files contents', function (done) {
    glob('fixtures/**/*.txt', {cwd: __dirname})
      .then(function (files) {
        assert.deepStrictEqual(files, {
          'fixtures/file1.txt': 'content 1\n',
          'fixtures/file3.txt': 'content 3\n'
        })
        done()
      })
  })
})
