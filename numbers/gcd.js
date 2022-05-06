function gcd(a, b) {
  if (b) {
    return gcd(b, a % b)
  } else {
    return Math.abs(a)
  }
}

module.exports = gcd