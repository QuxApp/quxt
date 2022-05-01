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