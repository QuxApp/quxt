function factor(d, nums) {
  for (num of nums) {
    if (num % d !== 0) {
      return false
    }
  }
  return true
}

module.exports = factor