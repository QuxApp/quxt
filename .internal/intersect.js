function intersect(...lists) {
  let all = []
  for (list of lists) {
    all = all.concat(list)
  }
  return all.filter((x) => {
    let common = true
    for (list of lists) {
      ((!list.includes(x)) ? common = false: common = common)
    }
    return common
  })
}

module.exports = intersect