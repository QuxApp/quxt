function property(key) {
  return (object) => {
    return object[key]
  }
}

module.exports = property