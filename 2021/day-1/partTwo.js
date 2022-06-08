let { data } = require('./data')

let main = async () => {
    let increasing = 0

    let prevSum = data[ 0 ] + data[ 1 ] + data[ 2 ]

    for (let i = 3; i < data.length; i++) {
        let currVal = data[ i ]
        let currentSum = prevSum - data[ i - 3 ] + currVal

        console.log({
            prevSum,
            currentSum,
            increasing: currentSum > prevSum
        })

        if (i > 3 && currentSum > prevSum) {
            increasing++
        }


        prevSum = currentSum
    }

    console.log(increasing)
}

main()