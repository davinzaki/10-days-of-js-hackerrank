const arr = [1,2,3,4,5]

const str = ['asdasd', 'asdeefq', 'g4afeasddad', 'fedafada']

const txt = 'asdoasidaoijdao adnaosnd asdnaosdn fri'

const sum = arr.reduce( function(a, b) {
    return a + b
})

const sum2 = arr.reduce((a, b) => a + b, 0)

const len = str.map((s) => s.length )

const indexof = txt.indexOf('o')

const greaterThan = str.filter((s) => s.length > 8)

const greaterThan3 = arr.filter((n) => n > 3)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


function isPrime(n) {  
    for (let i = 2; n > i; i++) {
        if (n % i === 0) {
            return false
        }
    }  
    
    return n > 1
}


// =======================================================

function main() {
    const input = parseInt(prompt())
    let nums = []

    for (let i = 0; i < input; i++) {
        let input = parseInt(prompt())
        nums.push(input)
    }

    console.log(nums)

    console.log(modifyArray(nums))
}

function modifyArray(nums) {
    console.log(nums)
    // const modifiedArray = nums.map(n => {
    //     if (n % 2 === 0) {
    //         return n * 2
    //     } else {
    //         return n * 3
    //     }
    // })

    // console.log(modifiedArray)

    // return nums.map((i) => i % 2 === 0 ? i * 2 : i * 3)
    return nums.map(i => i & 1 ? i * 3 : i * 2)
    
}

main()