// require('babel-register')()
// var jsdom = require('jsdom').jsdom
// var exposedProperties = ['window', 'navigator', 'document']
// global.document = jsdom('')
// global.window = document.defaultView
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property)
//     global[property] = document.defaultView[property]
//   }
// })
// global.navigator = {
//   userAgent: 'node.js'
// }
// global.documentRef = document

var jsdom = require('jsdom')

global.document = jsdom.jsdom('<html><body></body></html>')
global.window = document.defaultView
global.navigator = window.navigator

function noop () {
  return {}
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop
require.extensions['.svg'] = noop
