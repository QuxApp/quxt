const frequency = require('../.internal/frequency')

function mode(data) {
  const chart = frequency(data)
  const max = Math.max(...chart.values())
  return [...chart.keys()].filter(x => chart.get(x) === max)
}

module.exports = mode