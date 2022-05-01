function matches(rule) {
  return (object) => {
    let match = true
    for (const [key, value] of Object.entries(rule)) {
      if (object[key] !== value) {
        match = false
      }
    }
    return match
  }
}

module.exports = matches