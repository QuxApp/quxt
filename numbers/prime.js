const range = require('../.internal/range')

function prime(n) {
  for (i of range(2, Math.floor(Math.sqrt(n)) + 1)) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

module.exports = prime