function subtract(target, ...lists) {
  let sub = []
  for (list of lists) {
    sub = sub.concat(list)
  }
  return target.filter(x => !sub.includes(x))
}

module.exports = subtract