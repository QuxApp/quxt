function zip(...lists) {
  const zipped = []
  for (i = 0; i < lists[0].length; i++) {
    const item = []
    for (list of lists) {
      item.push(list[i])
    }
    zipped.push(item)
  }
  return zipped
}

module.exports = zip