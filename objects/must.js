function must(rule) {
  return (object) => {
    let match = true
    for (const [key, value] of Object.entries(rule)) {
      if (typeof value === 'string') {
        if (!eval(`object[key]${value}`)) {
          match = false
        }
      } else if (Array.isArray(value) && value.length > 1) {
        let str = ''
        let con = value.shift()
        value.forEach((item, index) => {
          if (index === 0) {
            str += 'object[key]' + item
          } else {
            str += con + 'object[key]' + item
          }
        })
        if (!eval(str)) {
          match = false
        }
      } else if (typeof value === 'boolean') {
        if (!eval(`object[key] === ${value}`)) {
          match = false
        }
      }
    }
    return match
  }
}

module.exports = must