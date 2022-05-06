function frequency(data) {
  const chart = new Map()
  for (item of data) {
    const value = chart.get(item)
    if (value) {
      chart.set(item, value + 1)
    } else {
      chart.set(item, 1)
    }
  }
  return chart
}

module.exports = frequency