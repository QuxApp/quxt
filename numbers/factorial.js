function factorial(input) {
  let n = 1
  for (i = 2; i <= input; i++) {
    n *= i
  }
  return n
}

module.exports = factorial