function unite(...lists) {
  let unision = []
  for (list of lists) {
    unision = unision.concat(list) 
  }
  return unision
}

module.exports = unite