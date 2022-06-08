const { data } = require('./data')

let main = async () => {
    let increasing = 0

    console.log(JSON.stringify(data))

    // for each value that isn't the initial, compare it to the previous value.
    // if found to be greater, increment the total value of increasing by 1
    data.forEach((x, i) => {
        console.log({
            prev: i > 0 ? data[ i - 1 ] : 'N/A',
            curr: x,
            increasing: x > data[ i - 1 ]
        })
        if (i > 0 && x > data[ i - 1 ]) {
            increasing++
        }
    })

    console.log(increasing)
}

main()