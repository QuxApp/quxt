function exclude(...lists) {
  let all = []
  for (list of lists) {
    all = all.concat(list)
  }
  const track = []
  const common = []
  for (item of all) {
    ((track.includes(item)) ? common.push(item) : track.push(item))
  }
  return all.filter(x => !common.includes(x))
}

module.exports = exclude