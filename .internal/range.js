function range(start, end, step) {
  let list = []
  if (!step) step = 1
  if (start > end) {
    step *= -1
    for (i = start; i > end; i += step) {
      list.push(i)
    }
  } else {
    for (i = start; i < end; i += step) {
      list.push(i)
    }
  }
  return list
}

module.exports = range