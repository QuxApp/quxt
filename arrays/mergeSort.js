function mergeSort(list) {
  function sort(list, half = list.length / 2) {
    if (list.length < 2) {
      return list
    }
    const left = list.splice(0, half)
    return merge(sort(left), sort(list))
  }
  function merge(left, right) {
    const list = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        list.push(left.shift())
      } else {
        list.push(right.shift())
      }
    }
    return [...list, ...left, ...right]
  }
  return sort(list)
}

module.exports = mergeSort