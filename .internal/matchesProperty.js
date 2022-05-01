function matchesProperty(key, value) {
  return (object) => {
    return object[key] === value
  }
}

module.exports = matchesProperty