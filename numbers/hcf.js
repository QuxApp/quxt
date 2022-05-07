const range = require('../.internal/range')
const factor = require('../.internal/factor')

function hcf(...nums) {
  let p = null
  for (i of range(Math.min(...nums), Math.floor(Math.sqrt(Math.min(...nums))) - 1)) {
    if (factor(i, nums)) {
      return i
    }
    if (factor(Math.min(...nums) / i, nums)) {
      p = Math.min(...nums) / i
    }
  }
  return p
}

module.exports = hcf