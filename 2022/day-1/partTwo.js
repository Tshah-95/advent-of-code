let { data } = require('./data')

let arr = data.split('\n')

let top = [ 0, 0, 0 ]
let curr = 0
arr.forEach(row => {
  let trimmedRow = parseInt(row.trim())
  if (isNaN(trimmedRow)) {
    curr = 0
    top.sort()
  } else {
    curr += trimmedRow
    if (curr > top[ 0 ]) {
      top.splice(0, 1, curr)
    }
  }

  console.log(`${trimmedRow} - ${curr} - ${top}`)
})

console.log(top.reduce((prev, curr) => prev + curr, 0))