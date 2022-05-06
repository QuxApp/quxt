const range = require('../.internal/range')

function factors(n) {
  let list = []
  for (i of range(2, Math.floor(Math.sqrt(n)) + 1)) {
    if (n % i === 0) {
      list.push(i)
      list.push(n / i)
    }
  }
  return list
}

module.exports = factors