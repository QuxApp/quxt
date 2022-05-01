matches = require('../.internal/matches')
property = require('../.internal/property')
matchesProperty = require('../.internal/matchesProperty')

function partition(list, rule) {
  if (typeof rule === 'function') {
    const yes = list.filter(rule)
    const no = list.filter((x) => {
      return !rule(x)
    })
    return [yes, no]
  } else if (Array.isArray(rule)) {
    const yes = list.filter((x) => {
      return matchesProperty(rule[0], rule[1])(x)
    })
    const no = list.filter((x) => {
      return !matchesProperty(rule[0], rule[1])(x)
    })
    return [yes, no]
  } else if (typeof rule === 'object') {
    const yes = list.filter((x) => {
      return matches(rule)(x)
    })
    const no = list.filter((x) => {
      return !matches(rule)(x)
    })
    return [yes, no]
  } else if (typeof rule === 'string') {
    const yes = list.filter((x) => {
      return property(rule)(x)
    })
    const no = list.filter((x) => {
      return !property(rule)(x)
    })
    return [yes, no]
  }
}

module.exports = partition