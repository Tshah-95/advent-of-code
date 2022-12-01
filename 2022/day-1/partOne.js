let { data } = require('./data')

let arr = data.split('\n')

let max = -Infinity
let curr = 0
arr.forEach(row => {
  let trimmedRow = parseInt(row.trim())
  if (isNaN(trimmedRow)) {
    curr = 0
  } else {
    curr += trimmedRow
    if (curr > max) max = curr
  }

  console.log(`${trimmedRow} - ${curr} - ${max}`)
})