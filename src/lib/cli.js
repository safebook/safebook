#!/usr/bin/env node

// const safebook = require('./src/lib/safebook.js')
import safebook from './safebook.js'

// if (!module.parent) {
// }

console.log(process.argv)

if (process.argv[2] === 'publish') {
  safebook.publish()
}
