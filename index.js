const { Qux, Server } = require('./quxt') // Import Module
// const server = new Server('/public', 3000, [process.env.vue])
const _ = new Qux()
var result = null

for (i of _.range(0, 10, 2)) {
  console.log(i)
}

for (i of _.range(10, 0)) {
  console.log(i)
}

/* We can use some methods to filter this array of objects */

const users = [
  {
    name: 'foo',
    age: 8,
    deleted: false,
  },
  {
    name: 'bar',
    age: 18,
    deleted: false,
  },
  {
    name: 'baz',
    age: 13,
    deleted: true,
  },
  {
    name: 'qux',
    age: 13,
    deleted: false,
  },
]

// Gets objects with the same key & value pairs
result = users.filter(_.matches({ name: 'foo' }))
console.log(result)

// Gets objects where a key is equal to a value
result = users.filter(_.matchesProperty(['age', 13]))
console.log(result)

// Gets objects with truthy deleted values
result = users.filter(_.property('deleted'))
console.log(result)

// Gets objects with key & value pairs with an expression
result = users.filter(_.must({ age: `>= 13` }))
console.log(result) // 13+ year olds

// Like before but takes multiple expressions
result = users.filter(_.must({ age: ['||', '=== 18', '=== 8'] }))
console.log(result) // must be 18 or 8 years old

/* Returns list of [0] matched values [1] other values */

// Partition with function rule
result = _.partition(users, _.must({ name: `[0] === 'b'` }))
console.log(result) 

// The matches() shorthand
result = _.partition(users, { age: 13 })
console.log(result)

// The matchesProperty() shorthand
result = _.partition(users, ['name', 'qux'])
console.log(result)

// The property() shorthand
result = _.partition(users, 'deleted')
console.log(result)

/* OR, NOT, AND, XOR operations on arrays */

const one = ['foo', 'bar', 'baz']
const two = ['bar', 'baz']
const three = ['baz', 'qux']

// Unites multiple arrays
result = _.unite(one, two, three)
console.log(result)

// Subtracts an array from another
result = _.subtract(one, two, three)
console.log(result)

// Returns the common elements in arrays
result = _.intersect(one, two, three)
console.log(result)

// Gets the symmetric difference
result = _.exclude(one, two, three)
console.log(result)

/* Stastics and Data */

const companies = ['google', 'amazon', 'microsoft', 'google', 'apple', 'amazon', 'netflix']

result = _.frequency(companies)
console.log(result)

result = _.mode(companies)
console.log(result)

/* Math stuff */

console.log(_.prime(7))
console.log(_.fibonacci(8))
console.log(_.triangular(4))
console.log(_.factorial(4))
console.log(_.factors(144))

// HCF takes multiple parameters (use spread syntax with an array)
console.log(_.hcf(24, 51, 18))

// GCD takes only 2 parameters but is recursive
console.log(_.gcd(138, 207))

// Sorting
result = _.mergeSort(_.factors(144))
console.log(result)

result = _.shellSort(_.factors(144))
console.log(result)

result = _.quickSort(_.factors(144))
console.log(result)

// Zips are good for tables
result = _.zip(['username', 'pasword'], ['foo', 'bar'], ['baz', 'qux'],)
console.log(result)